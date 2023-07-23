import React, {useState} from "react";


const Form = (props) => {

    const[task,setTask] = useState({taskName:'', isCompleted:false});
    const{taskList,setTaskList} = props;

    const handleTask = (e) => {
        if(e.target.type === 'checkbox'){
            setTask({...task, isCompleted:e.target.checked})
        }
        else{
            setTask({...task, [e.target.name]: e.target.value})
        }
    }

    const createTask = (e) => {
        e.preventDefault();
        
        setTaskList([...taskList,task]);
        setTask({taskName:'', isCompleted:false})

    }

    return(
        <div>
            <form onSubmit={createTask}>
                <label htmlFor="task">Add a Task: </label>
                <input type="text" value={task.taskName} onChange={handleTask} name="taskName"/>
                <div>
                    <label htmlFor="check">Task Completed?</label>
                    <input type="checkbox" onChange={handleTask} name="isCompleted" checked={task.isCompleted}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;