import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

function Main() {

    //create the hooks for the navstatus and the width of the div
    const [navStatus, setNavStatus] = useState(0)
    const [divWidth, setDivWidth] = useState('0')
    
    function openNav() {
        if (navStatus == 0) {
            setDivWidth('100%')
            setNavStatus(1)
        } else {
            setDivWidth('0%')
            setNavStatus(0)
        }
    }

    return (
        <div className="maindiv" style={{width: divWidth}}>
            <h1>Navbar</h1>

            <div>
                <button onClick={openNav}><i class="fas fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>

        </div>
    )
}

export default Main;