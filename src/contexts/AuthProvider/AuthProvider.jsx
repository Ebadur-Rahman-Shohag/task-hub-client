import AuthContext from "../AuthContext/AuthContext";
import { auth } from "../../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // register user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout user

    const logoutUser = () => {
        return signOut(auth);
    };

    // google signin
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    };

    // Update user profile
    const updateUserProfile = async (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        registerUser,
        loginUser,
        user,
        setUser,
        logoutUser,
        googleSignIn,
        updateUserProfile,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
