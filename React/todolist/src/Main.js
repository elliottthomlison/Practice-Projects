import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Main.css'

function Main() {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    function addTask() {
        setTaskList([...taskList, taskName])
    }
    
    function deleteTask(index) {
        const array = [...taskList]
        array.splice(index, 1)
        setTaskList(array)
    }

    const taskListContent = taskList.map((task, index) => {
        return (
            <div id="taskListContentItems">
                <p>{task}</p>
                <i className="far fa-trash-alt" onClick={()=>deleteTask(index)}></i>
            </div>
        )
    })

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <h1>React To Do List</h1>
                <input className="form-control" id="taskName" type="text" placeholder="Enter Task" value={taskName} onChange={(e) => {setTaskName(e.target.value)}}/>
                <button className="btn btn-primary" onClick={addTask}>Add</button>

                {taskListContent}
            </div>
        </div>
    )
}

export default Main;