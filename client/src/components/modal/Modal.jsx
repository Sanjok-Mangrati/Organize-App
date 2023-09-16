// Import necessary styles and libraries
import './modal.css';
import { useState } from 'react';

const Modal = (props) => {

    // State variable to store the updated behavior value
    const [updatedBehaviour, setUpdatedBehaviour] = useState(null);

    // Function to update the behavior
    const updateBehaviour = async () => {
        try {
            // Send a PUT request to the server to update the behavior
            await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/behaviours/${props.bid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    behaviour: updatedBehaviour
                })
            })

            // Call a function to update the list of behaviors immediately
            props.getBehaviours();
            
            // Close the modal by setting toggleModal to false
            props.setToggleModal(false);
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="organize__modal">
            <div className='organize__modal-container'>
                <div className="organize__modal-title">
                    Edit Behaviour
                </div>
                <div className="organize__modal-closebtn">
                    {/* Display an 'x' icon to close the modal and pass a click handler */}
                    <i className="fa-solid fa-xmark fa-2xl" onClick={() => props.setToggleModal(false)}></i>
                </div>
                <div className="organize__modal-input_container">
                <div className="organize__modal-input">
                    {/* Input field to enter a new behavior name and capture changes */}
                    <input type="text" placeholder='New Behaviour Name' onChange={(e) => setUpdatedBehaviour(e.target.value)}/>
                </div>
                <div className="organize__modal-changebtn">
                    {/* Button to apply changes and trigger the updateBehavior function */}
                    <button type="button" onClick={updateBehaviour}>Change</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
