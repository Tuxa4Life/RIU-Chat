import React, { useState } from "react";
import '../Stlyes/Authenticaiton.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase";
import Register from "./Auths/Register";
import Login from "./Auths/Login";

const Authenticaiton = ({ setUserData }) => {
    const [loginState, setLoginState] = useState(true) // to toggle login or register page

    const loginWithGoogle = () => { // exactly what it says
        const provider = new GoogleAuthProvider() // importing and using google auth provder (idk copied)
        signInWithPopup(auth, provider).then(result => { // using popup to sign users in
            setUserData({ // getting what information we'll need from user 
                username: result.user.displayName,
                photoUrl: result.user.photoURL,
                uid: result.user.uid
            })
        }).catch((err) => { // just in case...
            alert("Authentication Failed...")
            console.log(err.message)
        })
    }

    

    return (
        <div className="auth">
            {/* toggling between login or register page, we are handling them with proper functions to change loginState variable or to change user data when logged in */}
            { loginState ? <Login setUserData={setUserData} toggle={() => setLoginState(false)}/> : <Register toggle={() => setLoginState(true)} setUserData={setUserData}/> }

            <div className="ui horizontal divider">or continue with</div>

            <button  onClick={loginWithGoogle} className="ui secondary inverted button">
                <i className="google icon"></i>Google
            </button>
        </div>
    )
}

export default Authenticaiton;