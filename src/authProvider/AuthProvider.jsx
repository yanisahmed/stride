import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        return await createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth).then(() => setUser(null));
    };

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            } else {
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        };
    }, []);

    const authInfo = { user, loading, createUser, signIn, logout, googleLogin }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );

}

export default AuthProvider;