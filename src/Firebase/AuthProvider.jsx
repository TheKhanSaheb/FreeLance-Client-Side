import React, { Children } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { signOut } from "firebase/auth";
import {  GoogleAuthProvider } from "firebase/auth";


import { onAuthStateChanged } from 'firebase/auth';

const AuthProvider = ({children}) => {

      const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    const createUser =(email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>
    {
       return signInWithEmailAndPassword(auth,email,password)
    }
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
  return signOut(auth); // returns a promise
};






const goggle =(provider)=>
{
    return signInWithPopup(auth,provider)
}











    const userInfo ={
        createUser,
        signIn,
        user,
        loading,
        logOut,
        goggle

    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;