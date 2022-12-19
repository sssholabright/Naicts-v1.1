import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";

const AuthContext = createContext({
    // initial state ...
})


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const login = async (email, password) => {
        setLoading(true)
          
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(auth.currentUser)
            })
            .catch((error) => alert("user not found"))
    }

    const register = async (email, password) => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(auth.currentUser)
            })
            .catch((error) => alert(error))
    }


    const forgotPassword = async (email) => {
        setLoading(true)
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent")
            })
            .catch((error) => alert(error))
    }

    const resetPassword = async (password) => {
        setLoading(true)
        await updatePassword(auth.currentUser, password)
            .then(() => {
                alert("Password reset successful")
            })
            .catch((error) => alert(error))
    }
         
    const memoedValue = useMemo(() => ({
        user,
        login,
        register,
        forgotPassword,
        resetPassword,
        error,
        loading
    }), [user, loading, error, login, register, forgotPassword, resetPassword])
      

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}

