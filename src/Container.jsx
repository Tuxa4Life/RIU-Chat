import React from "react";
import './Stlyes/Container.css';
import Chat from "./Components/Chat";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";

const Container = ({ username }) => {
    return (
        <div className="container">
            <div className="chat-wrapper">
                <Navbar />
                <Chat username={ username }/>
            </div>
            
            <Input username={ username }/>
        </div>
    )
}

export default Container;