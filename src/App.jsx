import React, { useState } from "react";
import './Stlyes/App.css';
import Container from "./Container";
import Authenticaiton from "./Components/Authentication";

const App = () => {
    const [userData, setUserData] = useState({})

    return (
            <div className="app">
                { userData.uid ? <Container userData={userData}/> : <Authenticaiton setUserData={setUserData}/> }
            </div>
    )
}

export default App;