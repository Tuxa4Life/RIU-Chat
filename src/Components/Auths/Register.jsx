import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../../firebase";

const Register = ({ setUserData, toggle }) => {
    const [username, setUsername] = useState('') // getting values from form ↓↓
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerWithEmail = (e) => { // exactly what it says
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then(creds => { // using firebase registration function
            let user = creds.user // we register them with email and password ↑ and then getting creditentials as a promise

            updateProfile(user, { // using creds to modify with funciton (adding username and pfp)
                displayName: username,
                photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }).then(() => {
                setUserData({ // setting user data to auto-login App.jsx
                    username: creds.user.displayName,
                    photoUrl: creds.user.photoURL,
                    uid: creds.user.uid
                })
            })

            setUsername('')
            setEmail('')
            setPassword('')
        }).catch(err => {
            alert('Authentication Failed... \n' + err.message)
            console.log(err.message)
        })
    }

    return (
        <form className="ui form" onSubmit={registerWithEmail}>
            <h2 className="ui dividing header">Register</h2>
            <span>
                <label>Username: </label>
                <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} value={username}/>
            </span>
            <span>
                <label>Email: </label>
                <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
            </span>
            <span>
                <label>Password: </label>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </span>

            <button className="ui button secondary inverted" type="submit">Register</button>
            <button onClick={toggle} className="ui button black basic" type="button">Login</button>
        </form>
    )
}

export default Register;