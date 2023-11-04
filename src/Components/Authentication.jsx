import React from "react";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase";

const Authenticaiton = ({ setUserData }) => {
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(result => {
            setUserData({
                username: result.user.displayName,
                photoUrl: result.user.photoURL,
                uid: result.user.uid
            })
        }).catch(() => alert("Authentication Failed..."))
    }

    return (
        <div className="auth">
            <button onClick={loginWithGoogle}>Sign in With google</button>
        </div>
    )
}

export default Authenticaiton;