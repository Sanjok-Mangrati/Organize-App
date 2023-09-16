// Import necessary styles and libraries
import './toolbar.css';
import { useState } from 'react';

const Toolbar = (props) => {

    // State variable to store the new behavior data
    const [behaviourData, setBehaviourData] = useState(null);

    // Function to post a new behavior
    const postBehaviour = async () => {
        try {
            // Send a POST request to the server to create a new behavior
            await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/behaviours`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: props.email, // User email 
                    behaviour: behaviourData // New behavior name
                })
            })

            // Call a function to update the list of behaviors after adding the new behavior
            props.getBehaviours();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="organize__toolbar-container">
            <div className="organize__toolbar">
                <div className="organize__toolbar-input">
                    {/* Input field to enter a new behavior name and capture changes */}
                    <input type="text" placeholder='Behaviour Name' onChange={(e) => {setBehaviourData(e.target.value)}}/>
                </div>
                <div className="organize__toolbar-add">
                    {/* Button to add a new behavior and trigger the postBehaviour function */}
                    <button type="button" onClick={postBehaviour}>+ ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;
