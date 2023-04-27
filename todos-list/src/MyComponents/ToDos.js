import React from 'react';
import {ToDoItems} from "./ToDoItems";

export const ToDos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin: "10px auto"
  }

  return (
    <div className='container' style={myStyle}>
        <h3 className='my-3'>ToDos list</h3>
        {props.todos.length===0 ? <h4 className='text-center'>No records</h4> :
          props.todos.map((todo)=>{
            return <ToDoItems todo={todo} key={todo.Sno} onDelete={props.onDelete}/>
          })
        }      
    </div>
  )
}
