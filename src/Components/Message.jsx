import React from "react";
import '../Stlyes/Message.css'

const Message = ({ type, value, author, date, username }) => {
    if (type === 0) {
        return (
            <div className={`text-message default-message ${author == username ? 'own' : ''}`}>
                <div className="profile-wrapper">
                    <span>{author}</span>   
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                </div>
                <div title={date} className="message-wrapper">{value}</div>
            </div>
        )
    } 

    if (type === 1) {
        return (
            <div>PHOTO</div>
        )
    }
    
    if (type === 2) {
        return (
            <div className="date-message">
                <span></span>
                <p>{value}</p>
                <span></span>
            </div>
        )
    }
}

export default Message;