import React from "react";
import img from '../Images/RIU Logo Transparent.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <img src={img} alt="" />
                <h1>IU</h1>
            </div>

            <button className="ui icon button secondary inverted cog">
                <i className="cog icon"></i>
            </button>
        </div>
    )
}

export default Navbar;