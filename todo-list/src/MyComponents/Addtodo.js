import React,{useState} from 'react'

export default function Addtodo({addTodo}) {
  const[title,setTitle] = useState("");
  const[desc,setDesc] = useState("");
  const submit = (e) =>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title or Desc cannot be empty");
      }
      else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
  }}
    let blocksize ={
        width:"50%"
    }
    return (
    <div className='container m-5'>
    <div className='addblock'>
    
    <form onSubmit={submit} style={blocksize}>
  <div className="form-group">
    <h3>Add ToDo</h3>
    <label>Enter the Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Title"/>
  </div>
  <br/>
  <div className="form-group">
    <label>Details</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Desc"/>
  </div>
 <br/>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
</div>
    </div>
  )
}
