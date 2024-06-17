import React from 'react'
import Todo from './Todo'

function Todos(props) {
  return (
    <div>
        
        {
          props.todos.length === 0 ?"No todo to dispay":
           props.todos.map((todo)=>{
            return  <Todo key = {todo.id} todo = {todo} onDelete = {props.onDelete} />
          })}
        
     
       
    </div>
  )
}

export default Todos
