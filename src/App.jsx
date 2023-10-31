import React, { useState } from "react";
import './Stlyes/App.css';
import Container from "./Container";

const App = () => {
    const [username, setUsername] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const login = e => {
        e.preventDefault()
        setIsLogin(true)
    }

    if (isLogin) {
        return (
            <div className="app">
                <Container username={username}/>
            </div>
        )
    } else {
        return (
            <form onSubmit={login} className="ui container" style={{
                width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
            }}>
                <input  type="text" onChange={e => setUsername(e.target.value)} placeholder="username"/>
                <button>Enter</button>
            </form>
        )
    }

    
}

export default App;