import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";

const AuthContext = createContext({
    // initial state ...
})


export const AuthProvider = ({children}) => { 
    const [user, setUser] = useState(null) // user is null if not logged in
    const [loading, setLoading] = useState(false) // loading is true when logging in or registering or resetting password or sending password reset email 
    const [error, setError] = useState(null)

    const login = async (email, password) => { // login function that takes in email and password
        setLoading(true) 
          
        await signInWithEmailAndPassword(auth, email, password) // sign in with email and password using firebase auth and await for the promise to resolve  
            .then(() => { // if promise resolves then set user to the current user 
                setUser(auth.currentUser) // set user to the current user 
            })
            .catch((error) => alert("user not found")) // if promise rejects then alert the error 
    }

    const register = async (email, password) => { // register function that takes in email and password and await for the promise to resolve
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password) // create user with email and password using firebase auth and await for the promise to resolve
            .then(() => { // if promise resolves then set user to the current user
                setUser(auth.currentUser) // set user to the current user
            })
            .catch((error) => alert(error)) // if promise rejects then alert the error
    }


    const forgotPassword = async (email) => { // forgot password function that takes in email and await for the promise to resolve
        setLoading(true)
        await sendPasswordResetEmail(auth, email) // send password reset email using firebase auth and await for the promise to resolve
            .then(() => { // if promise resolves then alert the user that the password reset email has been sent
                alert("Password reset email sent") // alert the user that the password reset email has been sent
            }) 
            .catch((error) => alert(error))
    }

    const resetPassword = async (password) => { // reset password function that takes in password and await for the promise to resolve
        setLoading(true)
        await updatePassword(auth.currentUser, password) // update password using firebase auth and await for the promise to resolve and update the password of the current user 
            .then(() => { // if promise resolves then alert the user that the password has been reset
                alert("Password reset successful") // alert the user that the password has been reset
            })
            .catch((error) => alert(error))
    }
         
    const memoedValue = useMemo(() => ({ // memoize the value of the context so that it only updates when the value changes and not when the component re-renders 
        user, 
        login,
        register,
        forgotPassword,
        resetPassword,
        error,
        loading
    }), [user, loading, error, login, register, forgotPassword, resetPassword]) // only update the value when the user, loading, error, login, register, forgotPassword, resetPassword changes and not when the component re-renders
      

    return (
        <AuthContext.Provider value={memoedValue}> 
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext) 
}

