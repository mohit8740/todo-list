import React, { useState } from 'react'
import  '../App.css'
function Addtodolist(props) {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
       e.preventDefault();
       if(!title || !desc){
        alert("title or desc cann't be blank");
       }
       props.addtodo(title,desc);
    }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor='title' >Enter the title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} name = "title" id='title'/><br/>
        <label htmlFor='desc'>Enter the description</label>
        <input type='text' value={desc} onChange={(e)=>setDesc(e.target.value)} name='desc' id='desc'/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Addtodolist
