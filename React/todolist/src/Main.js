import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Main.css'

function Main() {
    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <h1>React To Do List</h1>
                <input className="form-control" id="taskName" type="text" placeholder="Enter Task" />
                <button onclick="" class="btn btn-primary">Add</button>
            </div>
        </div>
    )
}

export default Main;