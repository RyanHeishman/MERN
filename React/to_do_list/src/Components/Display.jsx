import React, {useState} from "react";
import Form from "./Form";

const Display = (props) => {

    const {taskList, setTaskList} = props;

    const toggleCheckBox = (task) => {
        
        const updatedTasks = taskList.map((a) => {
            if(task === a){
                a.isCompleted != a.isCompleted
            }
            return a;
        })
        setTaskList(updatedTasks);
    }

    const deleteTask = (task) => {
        
        const updatedTasks = taskList.filter((a) => task !== a)
        setTaskList(updatedTasks)
    }

    return (
        <div className="taskContainer">
            {
                taskList.map((a,idx) => {
                    return (
                        <div className="task" key={idx}>
                            {
                                (a.isCompleted === true)
                                ? <s>Task: {a.taskName}</s>
                                : <p>Task: {a.taskName}</p>
                            }
                            <input type="checkbox" name="isCompleted" checked={a.isCompleted} onChange={()=>toggleCheckBox(a)} />
                            <div>
                                <button onClick={()=> deleteTask(a)}>Delete Task</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display;