import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Todos from './component/Todos';
import Footer from './component/Footer';
import { useState } from 'react';
import Addtodolist from './component/Addtodolist';
function App() {
  const onDelete = (todo)=>{
    console.log("sb shi chal rha h na");
    settodos(todos.filter((e)=>
     { return e!==todo}
    ));
 }

 const addtodo = (title,desc)=>{
     let id = todos.length === 0 ?1:parseInt(todos[todos.length-1].id)+1;
     console.log(title);
     const mytodo = {
      id:id,
      task:title,
      desc:desc
     }
    //  console.log("i am ready for set new title and desc",title,desc);
     settodos([...todos,mytodo]);
 }

 const[todos,settodos] = useState( [
    {
       id:"1",
       task:"go to market",
      desc:"go and come with some fruits and vegetables"
    },
    {
       id:"2",
       task:"go to school",
       desc:"if you go to school then you become educated"
    },
    {
      id:"3",
      task:"go to collge",
      desc:"go for higher stduies"
    },
  ]);
  return (
   
    <div className="App">
      <Header/>
      <Addtodolist addtodo = {addtodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>

      
    </div>
  );
}

export default App;
