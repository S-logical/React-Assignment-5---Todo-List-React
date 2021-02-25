import React, {useState} from 'react'
import "./style.css"

const AddTodo = ({todoListValues,setTodoListValues}) => {
    const handleAddTask=()=>{
        !(newValue.replace(/\s/g,'')  =="") && setTodoListValues([...todoListValues,newValue]);
        setNewValue("");

    }
     const [newValue, setNewValue] = useState("");
     
    const handleNewTask=(event)=>{
        setNewValue(event.target.value);
    }  
      
    
    return (
        

        <div className="add-todo">
            <textarea id="task" value={newValue} onChange={handleNewTask} ></textarea>
            <br/>
            <button id="btn" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default AddTodo