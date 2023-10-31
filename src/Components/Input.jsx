import { addDoc, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { colRef } from "../firebase";

const Input = () => {
    const [inputValue, setInputValue] = useState('')

    const uploadData = (e) => {
        e.preventDefault()

        if (inputValue) {
            const currentDate = new Date();
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');

            addDoc(colRef, {
                author: 'tuxa',
                date: new Date(Math.floor(Date.now() / 1000) * 1000).toDateString(),
                hoursAndMinutes: `${hours}:${minutes}`,
                seconds: new Date().getTime(),
                type: 0,
                value: inputValue,
                createdAt: serverTimestamp()
            })

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