import React from 'react'

function Todo(props) {
  return (
    <div>
      <h1>{props.todo.id}</h1>
      <h2>{props.todo.task}</h2>
      <h4>{props.todo.desc}</h4>
     
      <button onClick={()=>props.onDelete(props.todo)}>Delete</button>
    </div>
  )
}

export default Todo;
