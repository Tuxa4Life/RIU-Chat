import React from "react";
import img from '../Images/RIU Logo Transparent.png'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ setUserData }) => {
    const logOut = () => {
        signOut(auth).then(() => {
            setUserData('')
        })
    }

    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <img src={img} alt="" />
                <h1>IU</h1>
            </div>

            <button onClick={logOut} className="ui icon button secondary inverted">
                <i className="log out icon"></i>
            </button>
        </div>
    )
}

export default Navbar;