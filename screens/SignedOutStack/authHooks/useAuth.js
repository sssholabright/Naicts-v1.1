import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext({
    // initial state ...
})


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)

    useEffect(() => 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Logged in
                setUser(user)
            } else {
                // Logged out
                setUser(null)
            }
            setLoadingInitial(false)
        }),
 [])

    
    const login = async (email, password) => {
        setLoading(true)
          
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            setLoading(false)
            console.log(userCredential.user)
            //.catch((error) => setError(error))
            //.finally(() => setLoading(false))
    }
      
    const register = async (email, password) => {
        setLoading(true)
    
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }
      
    const logout = async () => {
        setLoading(true)

        await signOut(auth)
            setUser(null)
            /*.catch((error) => setError(error))
            .finally(() => setLoading(false))*/
    }
      
    const memoedValue = useMemo(() => ({
        user,
        login,
        register,
        logout,
        error,
        loading
    }), [user, loading, error, logout, login, register])
      

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}

