// Import necessary styles and libraries
import { useState } from 'react';
import './todoToolbar.css';

const TodoToolbar = (props) => {

  // State variable to store the new todo name
  const [newTodo, setNewTodo] = useState(null);

  // Function to post a new todo
  const postTodo = async () => {
    try {
      // Send a POST request to the server to create a new todo
      await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bid: props.bid, // Behavior ID
          name: newTodo, // New todo name
          status: false // Initial status is set to false
        })
      })

      // Call a function to update the list of todos
      props.getTodos();
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="organize__todoToolbar-container">
        <div className="organize__todoToolbar">
            <div className="organize__todoToolbar-input">
                {/* Input field to enter a new todo name and capture changes */}
                <input type="text" placeholder='Todo Name' onChange={(e) => setNewTodo(e.target.value)}/>
            </div>
            <div className="organize__todoToolbar-addbtn">
                {/* Button to add a new todo and trigger the postTodo function */}
                <button type="button" onClick={postTodo}>+ ADD TODO</button>
            </div>
        </div>
    </div>
  )
}

export default TodoToolbar;
