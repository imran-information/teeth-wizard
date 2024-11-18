import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';

export const AuthProviders = createContext()
const AuthProvider = ({ provider }) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUsr = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            console.log(currenUser);
            setUser(currenUser)
        })
        return () => {
            unsubscribe()
        }

    }, [])

    const authInfo = {
        googleLogin,
        signUpUser,
        user,
        signOutUsr,
        signInUser
    }
    return (
        <AuthProviders.Provider value={authInfo}>
            {provider}
        </AuthProviders.Provider>
    );
};

export default AuthProvider;