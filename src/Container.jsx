import React from "react";
import './Stlyes/Container.css';
import Chat from "./Components/Chat";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";

const Container = ({ userData, setUserData }) => {
    return (
        <div className="container">
            <div className="chat-wrapper"> 
                <Navbar setUserData={setUserData} /> {/* sending data to nav to logout and set data to empty obj */}
                <Chat userData={userData}/> {/* sending data to chat to use author data for mssages */}
            </div>
            
            <Input username={ userData.username } photoUrl={userData.photoUrl} uid={userData.uid} /> {/* sending this data to upload with message value in database */}
        </div>
    )
}

export default Container;