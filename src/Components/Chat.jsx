import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { colRef } from "../firebase";
import { onSnapshot, orderBy, query } from "firebase/firestore";

const Chat = ({ userData }) => {
    const [data, setData] = useState([])

    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    }

    useEffect(() => {
        scrollToBottom()
    })

    useEffect(() => {
        const q = query(colRef, orderBy('createdAt'))

        onSnapshot(q, snapshot => {
            let messages = []
            snapshot.docs.forEach ((e, i) => {
                messages.push({...e.data(), id: e.id})
                if (snapshot.docs[i + 1]) {
                    if (snapshot.docs[i + 1].data().seconds - e.data().seconds >= 600000) { // 600 sec * 1000 (millisecond)
                        messages.push({
                            value: snapshot.docs[i + 1].data().hoursAndMinutes + " " + snapshot.docs[i + 1].data().date.slice(0, -5),
                            type: 2,
                        })
                    }
                }
            })

            setData(messages)
        })
    }, [])

    let messages = data.map(e => {
        return <Message userData={userData} key={e.id} photoUrl={e.photoUrl} authorId={e.authorId} author={e.author} type={e.type} value={e.value} date={e.hoursAndMinutes + " " + e.date}/>
    })

    return (
        <div className="chat">
            { messages }

            <div ref={messagesEndRef} />
        </div>
    )
}

export default Chat;