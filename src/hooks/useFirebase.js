import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            console.log(res.user)
            setUser(res.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log('user', user)
                setUser(user)
            }
        })
        
    }, [])
    return {
        error,
        user,
        signInWithGoogle
    }
}
export default useFirebase;

