// Import necessary styles and libraries
import './todo.css';
import { useState, useEffect } from 'react';
import { TodoModal } from '../index';

const Todo = (props) => {

  // State variables to manage the modal visibility and todo status
  const [toggleModal, setToggleModal] = useState(false);
  const [status, setStatus] = useState(false);

  // Function to update a todo item
  const updateTodo = async (name) => {
    try {
      // Send a PUT request to the server to update the todo
      await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/todos/${props.tid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          status: status
        })
      })

      // Call a function to update the list of todos
      props.getTodos();
      // Close the modal
      setToggleModal(false);

    } catch (error) {
      console.error(error);
    }
  }

  // Function to delete a todo item
  const deleteTodo = async () => {
    try {
      // Send a DELETE request to the server to delete the todo
      await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/todos/${props.tid}`, {
        method: 'DELETE'
      })

      // Call a function to update the list of todos
      props.getTodos();

    } catch (error) {
      console.error(error);
    }
  }

  // useEffect hook to update the todo when the status changes
  useEffect(() => {
    updateTodo(props.name);
  }, [status]);

  return (
    <>
      <div className="organize__todo-container">
        <div className="organize__todo">
          <div className="organize__todo-left_section">
            {/* Checkbox input to toggle the todo status */}
            <input type="checkbox" name="checkbox" id="checkbox" onClick={() => setStatus(!status)} />
            <p className={status ? "organize__todo-left_section-checkbox_checked" : ""}>{props.name.toUpperCase()}</p>
          </div>
          <div className="organize__todo-right_section">
            {/* Icon to edit the todo */}
            <i className="fa-solid fa-pen-to-square editbtn" onClick={() => setToggleModal(true)}></i>
            {/* Icon to delete the todo */}
            <i className="fa-solid fa-trash deletebtn" onClick={deleteTodo}></i>
          </div>
        </div>
      </div>
      {
        // Display the modal when toggleModal is set to true
        toggleModal && <TodoModal tid={props.tid} setToggleModal={setToggleModal} getTodos={props.getTodos} updateTodo={updateTodo} />
      }
    </>
  )
}

export default Todo;
