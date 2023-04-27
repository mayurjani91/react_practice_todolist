import React, { useState } from "react";

export const AddToDo = ({addToDo}) => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  
    const submit = (e) =>{
        e.preventDefault();
        if(!task || !desc)
        {
            alert("task or desc can not be blank")
        }
        else{
          
          addToDo(task,desc);
          setTask("");
          setDesc("");
        }
  }
    return (
    <div className="container my-3">
        <h1>Add a Todo</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            value={task} onChange={(e)=>{setTask(e.target.value)}}
            
          />

        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            value={desc} onChange={(e)=>{setDesc(e.target.value)}}
            id="desc"
          />
        </div>
       
        <button type="submit" className="btn btn-sm btn-warning">
          Add to do
        </button>
      </form>
    </div>
  );
};
