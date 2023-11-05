import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = ({ setUserData, toggle }) => {
    const [email, setEmail] = useState('') // getting input from form ↓
    const [password, setPassword] = useState('')

    const login = (e) => { // exaclty what it says
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then(creds => { // using email registration function
            setUserData({ // uploading needed user info
                username: creds.user.displayName,
                photoUrl: creds.user.photoURL,
                uid: creds.user.uid
            })
        })
    }

    return (
        <form onSubmit={login} className="ui form login">
            <h2 className="ui dividing header">Login</h2>
            <span>
                <label>Email: </label>
                <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
            </span>
            <span>
                <label>Password: </label>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </span>

            <button className="ui button secondary inverted" type="submit">Login</button>
            <button onClick={toggle} className="ui button black basic" type="button">Register</button>
        </form>
    )
}

export default Login;