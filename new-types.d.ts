// for history card
type historyCardProps = {
    id?: string,
    imageUrl?: string,
    match?: string,
    matchtype?: string,
    winamount?: string,
    lossamount?: string,
    date?: string,
    result?: string
}

// for section (in header)
type sectionProps = {
    title: string,
    para?: string
}

// about card
type aboutCardProps = {
    icon?: any,
    title?: string,
    para?: string
}

// firebase context 
type FirebaseContextProps = {
    auth: any; // Replace 'any' with the actual type of your Firebase authentication
    firestore: any; // Replace 'any' with the actual type of your Firestore instance
    signInWithGoogle: () => Promise<void>;
}

// current user
type AuthContextProviderProps = {
    children: React.ReactNode;
}

type UserType = {
    email: string | null;
    uid: string | null;
}