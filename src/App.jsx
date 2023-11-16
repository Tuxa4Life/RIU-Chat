import React, { useState, useEffect } from "react";
import './Stlyes/App.css';
import Container from "./Container";
import Authenticaiton from "./Components/Authentication";

const App = () => {
    const [userData, setUserData] = useState({}) // storing all user data here → sending it to Container to use and to authentication to modify

    useEffect(() => {
        if (localStorage.getItem('_user')) {
            setUserData(JSON.parse(localStorage.getItem('_user')))
        }
    }, [])

    return ( // redirecting to authentication if userData is empty
            <div className="app">
                { userData.uid ? <Container setUserData={setUserData} userData={userData}/> : <Authenticaiton setUserData={setUserData}/> }
            </div>
    )
}

export default App;