import React from "react";
import './Stlyes/Container.css';
import Chat from "./Components/Chat";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";

const Container = ({ userData }) => {
    return (
        <div className="container">
            <div className="chat-wrapper">
                <Navbar />
                <Chat username={ userData.username }/>
            </div>
            
            <Input username={ userData.username } photoUrl={userData.photoUrl}/>
        </div>
    )
}

export default Container;