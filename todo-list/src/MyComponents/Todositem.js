import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Todositem({todo, onDelete}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger m-1'  onClick={()=>{onDelete(todo)}}>Delete</button>
      <Button className='btn btn-sm btn-info m-1' onClick={handleShow}>
       View
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{todo.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{todo.desc}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
       <hr></hr>
    </div>

  )
}
