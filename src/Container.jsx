import React from "react";
import './Stlyes/Container.css';
import Chat from "./Components/Chat";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";

const Container = ({ userData, setUserData }) => {
    return (
        <div className="container">
            <div className="chat-wrapper">
                <Navbar setUserData={setUserData} />
                <Chat userData={userData}/>
            </div>
            
            <Input username={ userData.username } photoUrl={userData.photoUrl} uid={userData.uid} />
        </div>
    )
}

export default Container;