import { addDoc, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { colRef } from "../firebase";

const Input = ({ username, photoUrl, uid, replyData, setReplyData }) => {
    const [inputValue, setInputValue] = useState('') // to store input element value

    const uploadData = (e) => { // exaclty what it says
        e.preventDefault() // not to reload

        if (inputValue) { // if input field is not empty
            const currentDate = new Date(); // getting all this shit ↓↓ to write time correctly (new Date() sucks)
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');

            let obj = { // uploading data to database
                author: username,
                date: new Date(Math.floor(Date.now() / 1000) * 1000).toDateString(), // format date beautifully
                hoursAndMinutes: `${hours}:${minutes}`, // format time in beatufully
                seconds: new Date().getTime(), // seconds to use them later while rendering (time and quick message stamps)
                type: 0, // default type where 0 = message, 1 = image, 2 = timestamp
                value: inputValue,
                createdAt: serverTimestamp(), // using firebase bult-in function to order them in Chat.jsx component
                photoUrl: photoUrl,
                authorId: uid,
            }
            if (replyData) {
                obj.repliedAt = replyData
                setReplyData(null)
            }

            addDoc(colRef, obj)

            setInputValue('')
        }
    }

    return (
        <form onSubmit={uploadData} className="input">
            <input type="text" placeholder="message" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button formAction="submit" className="ui icon button">
                <i className="paper plane icon"></i>
            </button>
        </form>
    )
}

export default Input;