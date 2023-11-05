import React from "react";
import '../Stlyes/Message.css'

const Message = ({ type, value, author, authorId, date, photoUrl, userData, removePfp, status }) => {
    const emojis = ['user secret', 'chess queen', 'coffee', 'bath', 'paint brush', 'tint', 'file code', 'thumbs up outline', 'heart', 'bolt', 'flag', 'bicycle', 'car', 'gamepad', 'lemon', 'music', 'leaf', 'umbrella', 'heartbeat', 'user md', 'anchor', 'beer', 'bullhorn', 'gem', 'bell', 'trophy']
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

    if (type === 0) {
        return (
            <div className={`text-message default-message ${userData.uid === authorId ? 'own' : 'notOwn'} ${removePfp ? 'quick-message' : ''} ${status}`}>
                <div className="profile-wrapper">
                    <img src={photoUrl} alt="[ - ]" />
                </div>
                <div title={date} className="message-wrapper">
                    {value}
                    <span className="username-holder">{author.split(" ")[0]}</span>
                </div>
                <i className={`ui icon ${randomEmoji}`}></i>
                <i className="ui icon reply"></i>
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