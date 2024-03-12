'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth, storage, db } from '@/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AuthContextProviderProps, UserType } from '../../new-types';
import firebase from 'firebase/compat/app';

// Create auth context
const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuth = () => useContext<any>(AuthContext);

// Create the auth context provider
export const AuthContextProvider = ({
    children
}: AuthContextProviderProps) => {
    // Define the constants for the user and loading state
    const [currentUser, setCurrentUser] = useState<UserType>(Object)
    const [loading, setLoading] = useState<Boolean>(true);
    const router = useRouter()
    // Update the state depending on auth
    useEffect(() => {
        const data = onAuthStateChanged(auth, (user: any) => {
            setCurrentUser(user);
            return () => {
                data()
            };
        });
        setLoading(false);
    }, []);
    // handle errors
    const handleError = (error: firebase.auth.Error): any => {
        switch (error.code) {
            case 'auth/invalid-email':
                return toast.error("Invalid email")
            case 'auth/user-not-found':
                return toast.error("User not exist")
            case 'auth/wrong-password':
                return toast.error("Invalid password")
            // Add more cases as needed for other error types
            default:
                return toast.error(error.message);
        }
    };
    // Sign up the user
    const signUpWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            elements: {
                0: HTMLInputElement;
                1: HTMLInputElement;
                2: HTMLInputElement;
                3: HTMLInputElement;
            };
        };
        const imageInput = target.elements[0] as HTMLInputElement;
        const image = imageInput.files ? imageInput.files[0] : null;
        if (!image) {
            return toast.error("Please select an image");
        }
        const username = target.elements[1].value;
        const email = target.elements[2].value;
        const password = target.elements[3].value;
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, `profile${Timestamp.now().nanoseconds}`);
            await uploadBytesResumable(storageRef, image).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName: username,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            userName: username,
                            email: email,
                            photoURL: downloadURL,
                        });
                        toast.success('Sign up Successfully!')
                        router.push('/')
                    }
                    catch (error:any) {
                        console.log(error);
                        handleError(error)
                    }
                });
            });
        } catch (error:any) {
            handleError(error)
        }
    };

    // Login the user
    const logIn = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            elements: {
                0: HTMLInputElement;
                1: HTMLInputElement;
            };
        };
        const email = target.elements[0].value;
        const password = target.elements[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Successfully!')
            router.push('/');
        } catch (error:any) {
            handleError(error)
        }
    };

    // Logout the user
    const logOut = async () => {
        await signOut(auth);
        toast.success('Logout Successfully!')
    };

    // Wrap the children with the context provider
    return (
        <AuthContext.Provider value={{ currentUser, signUpWithEmail, logIn, logOut }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};