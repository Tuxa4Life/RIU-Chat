import React, { useState } from "react";
import '../Stlyes/Authenticaiton.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase";
import Register from "./Auths/Register";
import Login from "./Auths/Login";

const Authenticaiton = ({ setUserData }) => {
    const [loginState, setLoginState] = useState(true)

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(result => {
            setUserData({
                username: result.user.displayName,
                photoUrl: result.user.photoURL,
                uid: result.user.uid
            })
        }).catch((err) => {
            alert("Authentication Failed...")
            console.log(err.message)
        })
    }

    

    return (
        <div className="auth">
            { loginState ? <Login setUserData={setUserData} toggle={() => setLoginState(false)}/> : <Register toggle={() => setLoginState(true)} setUserData={setUserData}/> }

            <div className="ui horizontal divider">or continue with</div>

            <button  onClick={loginWithGoogle} className="ui secondary inverted button">
                <i className="google icon"></i>Google
            </button>
        </div>
    )
}

export default Authenticaiton;