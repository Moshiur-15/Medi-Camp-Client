import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import usePublic from "../Hook/usePublic";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const axiosSecure = usePublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // google provider
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  // update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser);
      if(currentUser){
        axiosSecure.post('/jwt', {
          'email' : currentUser?.email
        }).then(res => {
          if(res.data.token){
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token)
            setUser(currentUser);
            setLoading(false);
          }
        })
      
      }else{
        setUser(currentUser);
        localStorage.removeItem('token')
        setLoading(false);
      }
      return () => unsubscribe();
    });
  }, []);
  const authInfo = {
    user,
    loading,
    setUser,
    logOut,
    loginUser,
    createUser,
    updateUserProfile,
    googleLogin,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
