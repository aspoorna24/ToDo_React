import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/footer';
import Todos from './MyComponents/todos';
import Addtodo from './MyComponents/Addtodo';
import About from './MyComponents/About';
import React, {useState} from 'react'
import { BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
function App() {
  const addTodo=(title,desc)=>{
     console.log("Adding this ",title,desc);
     let sno;
     if(todos.length===0){
      sno=0
     }
     else{
     sno= todos[todos.length-1].sno+1;
     }
     const myTodo = {
      sno :sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log("Adding this ",myTodo);
  
    }
  const onDelete=(todo)=>{
  console.log(todo)
   setTodos(todos.filter((e)=>{
   return e!==todo;
  }));

  }
  const [todos,setTodos] = useState([]);
  return (
   <>
   <Router>
    <Header title="React Demo"/>
    <Switch>
      <Route path="/" render={()=>{
        return(
          <>
            <Addtodo addTodo={addTodo}/>
            <Todos todo={todos} onDelete={onDelete}/>
          </>)
      }}></Route>
    <Route path="/about">
      <About/>
    </Route>
   </Switch>
   <Footer/> 
   </Router>
   </>
  );
}

export default App;
