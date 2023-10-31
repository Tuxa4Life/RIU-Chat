import React from "react";
import './Stlyes/Container.css';
import Chat from "./Components/Chat";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";

const Container = () => {
    return (
        <div className="container">
            <div className="chat-wrapper">
                <Navbar />
                <Chat />
            </div>
            
            <Input />
        </div>
    )
}

export default Container;