import React from 'react'
import Todositem from './Todositem';

export default function todos(props) {
  return (
    <div className='container'>
       <h3>Todos List</h3>
       <br></br>
       {props.todo.length===0? <h6>No ToDos to Display</h6>:
       <ul>
       {props.todo.map((todo)=>{
         return <li><Todositem todo={todo} key={todo.sno} onDelete={props.onDelete} /></li>
       })}
       </ul>
}
      <br></br><br></br>
    </div>
  )
}
