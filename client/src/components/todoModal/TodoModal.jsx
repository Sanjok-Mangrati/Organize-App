// Import necessary styles and libraries
import './todoModal.css';
import React, { useState } from 'react';

const TodoModal = (props) => {

    // State variable to store the updated todo name
    const [updatedTodoName, setUpdatedTodoName] = useState(null);

    return (
        <div className="organize__todoModal">
            <div className='organize__todoModal-container'>
                <div className="organize__todoModal-title">
                    Edit Todo
                </div>
                <div className="organize__todoModal-closebtn">
                    {/* Display an 'x' icon to close the modal and pass a click handler */}
                    <i className="fa-solid fa-xmark fa-2xl" onClick={() => props.setToggleModal(false)}></i>
                </div>
                <div className="organize__todoModal-input_container">
                    <div className="organize__todoModal-input">
                        {/* Input field to enter a new todo name and capture changes */}
                        <input type="text" placeholder='New Todo Name' onChange={(e) => setUpdatedTodoName(e.target.value)} />
                    </div>
                    <div className="organize__todoModal-changebtn">
                        {/* Button to apply changes and trigger the updateTodo function */}
                        <button type="button" onClick={() => props.updateTodo(updatedTodoName)}>Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoModal;
