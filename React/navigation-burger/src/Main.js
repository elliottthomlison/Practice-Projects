import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

function Main() {
    return (
        <div className="maindiv">
            <h1>Navbar</h1>

            <div>
                <button><i class="fas fa-bars"></i></button>
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