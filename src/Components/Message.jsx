import React from "react";
import '../Stlyes/Message.css'

const Message = ({ type, value, author, authorId, date, photoUrl, userData, removePfp, status, repliedAt, setReplyData }) => {
    // get random emoji (might change this later)
    const emojis = ['user secret', 'chess queen', 'coffee', 'bath', 'paint brush', 'tint', 'file code', 'thumbs up outline', 'heart', 'bolt', 'flag', 'bicycle', 'car', 'gamepad', 'lemon', 'music', 'leaf', 'umbrella', 'heartbeat', 'user md', 'anchor', 'beer', 'bullhorn', 'gem', 'bell', 'trophy']
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

    let reply = ''
    if (repliedAt) { // reply element. its here to prevent error of null
        reply = <div className="reply-wrapper">
            <span className="replied-to">{author.split(" ")[0].slice(0, 5)} replied to {repliedAt.author.split(" ")[0].slice(0, 5)}</span>
            <p>{repliedAt.value}</p>
        </div>
    }

    //// filtering via types to render wanted component
    // text message
    if (type === 0) {
        return (
            <div style={{marginTop: `${repliedAt ? '40px' : '3px'}`}} className={`text-message default-message ${userData.uid === authorId ? 'own' : 'notOwn'} ${removePfp ? 'quick-message' : ''} ${status}`}> {/* using this stuff to filter them in styles */}
                <div className="profile-wrapper">
                    <img src={photoUrl} alt="[ - ]" />
                </div>
                <div className="message-reply-wrapper">

                    { reply }

                    <div title={date} className="message-wrapper">
                        {value}
                        <span style={{display: `${repliedAt || userData.uid === authorId ? 'none' : 'block'}`}} className="username-holder">{author.split(" ")[0]}</span> {/* get first word of username */}
                    </div>
                </div>
                <i className={`ui icon ${randomEmoji}`}></i> {/* inserting random emoji here */}
                <i onClick={() => setReplyData({author: author, value: value})} className="ui icon reply"></i>
            </div>
        )
    } 

    // image message
    if (type === 1) {
        return (
            <div>PHOTO</div>
        )
    }
    
    // timestamp
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