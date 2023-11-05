import React from "react";
import '../Stlyes/Message.css'

const Message = ({ type, value, author, authorId, date, photoUrl, userData, removePfp, status }) => {
    if (type === 0) {
        return (
            <div className={`text-message default-message ${userData.uid === authorId ? 'own' : ''} ${removePfp ? 'quick-message' : ''} ${status}`}>
                <div className="profile-wrapper">
                    <span>{author.slice(0, 5)}</span>   
                    <img src={photoUrl} alt="[ - ]" />
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