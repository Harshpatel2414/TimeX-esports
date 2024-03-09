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

// Create auth context
const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuth = () => useContext<any>(AuthContext);

// Create the auth context provider
export const AuthContextProvider = ({
    children
}: AuthContextProviderProps) => {
    // Define the constants for the user and loading state
    const [currentUser, setCurrentUser] = useState<UserType>({})
    const [loading, setLoading] = useState<Boolean>(true);
    const router = useRouter()
    // Update the state depending on auth
    useEffect(() => {
        const data = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            return () => {
                data()
            };
        });
        setLoading(false);
    }, []);

    // Sign up the user
    const signUpWithEmail = async (e) => {
        e.preventDefault();
        const image = e.target[0].files[0]
        const username = e.target[1].value
        const email = e.target[2].value
        const password = e.target[3].value
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
                        router.push('/')
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    // Login the user
    const logIn = async (e) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Successfully!')
            router.push('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    // Logout the user
    const logOut = async () => {
        return await signOut(auth);
    };

    // Wrap the children with the context provider
    return (
        <AuthContext.Provider value={{ currentUser, signUpWithEmail, logIn, logOut }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};