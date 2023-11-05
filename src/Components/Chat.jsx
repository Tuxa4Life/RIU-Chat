import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { colRef } from "../firebase";
import { onSnapshot, orderBy, query } from "firebase/firestore";

const Chat = ({ userData }) => {
    const [data, setData] = useState([]) // storing message values here

    const messagesEndRef = useRef(null) // ref to make an auto scroll
    const scrollToBottom = () => { // exactly what it says
        messagesEndRef.current?.scrollIntoView();
    }

    useEffect(() => { // scrolling bottom when component re-renders (when new message is uploaded mostly)
        scrollToBottom()
    })

    useEffect(() => {
        const q = query(colRef, orderBy('createdAt')) // order (filter) messages

        onSnapshot(q, snapshot => { // using snapshot to subscribe to real-time changes (copied idk, info in vid)
            let messages = [] // main array what we set data to
            snapshot.docs.forEach ((e, i) => {
                let removePfp = false // default value
                if (snapshot.docs[i + 1]) { // checking 3 minute time stamp to remove pfp
                    if (snapshot.docs[i + 1].data().seconds - e.data().seconds <= 180000 && snapshot.docs[i + 1].data().authorId === e.data().authorId) {
                        removePfp = true
                    }
                }

                messages.push({...e.data(), id: e.id, removePfp: removePfp}) // pushing data

                if (snapshot.docs[i + 1]) { // checking 10 minute timestamp to insert devider
                    if (snapshot.docs[i + 1].data().seconds - e.data().seconds >= 600000) { // 600 sec * 1000 (millisecond)
                        messages.push({
                            value: snapshot.docs[i + 1].data().hoursAndMinutes + " " + snapshot.docs[i + 1].data().date.slice(0, -5),
                            type: 2,
                        })
                    }
                }
            })

            setData(messages) // setting data
        })
    }, [])

    let messages = data.map((e, i) => {
        let status = 'lone'
        if (!data[i - 1]) { // checking for the first element
            if (e.removePfp) status = 'first' // ↓ returning so the map will stop
            return <Message userData={userData} key={i} removePfp={e.removePfp} photoUrl={e.photoUrl} authorId={e.authorId} author={e.author} type={e.type} value={e.value} date={e.hoursAndMinutes + " " + e.date} status={status}/>
        }

        // some logic to filter between first, middle and last messages, to style them correctly
        if (e.removePfp) status = 'middle'
        if (!data[i - 1].removePfp && e.removePfp) status = 'first'
        if (!e.removePfp && data[i - 1].removePfp) status = 'last'


        return <Message userData={userData} key={i} removePfp={e.removePfp} photoUrl={e.photoUrl} authorId={e.authorId} author={e.author} type={e.type} value={e.value} date={e.hoursAndMinutes + " " + e.date} status={status}/>
    })

    return (
        <div className="chat">
            { messages }

            <div ref={messagesEndRef} /> {/* thing where we auto-scroll to */}
        </div>
    )
}

export default Chat;