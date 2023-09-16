// Import necessary styles and libraries
import './behaviour.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../index';

const Behaviour = (props) => {

  // State variable to control the visibility of the modal
  const [toggleModal, setToggleModal] = useState(false);

  // Function to get behavior information
  const getBehaviourInfo = () => {
    props.getBid(props.bid);  // passing bid to parent component
    props.getBname(props.name);  // passing name to parent component
  }

  // Function to delete the behavior
  const deleteBehaviour = async () => {
    // Send a DELETE request to the server to delete the behavior
    await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/behaviours/${props.bid}`, {
      method: 'DELETE'
    });

    // Call a function to update the list of behaviors immediately
    props.getBehaviours();
  }

  return (
    <>
      <div className="organize__behaviour-card">
        <div className="organize__behaviour-card_title">
          {props.name.toUpperCase()} {/* Display the behavior name */}
        </div>
        <div className="organize__behaviour-card_buttons-left">
          <div className="organize__behaviour-card_buttons-left_open">
            {/* Create a link to '/todos' and pass a click handler */}
            <Link to='/todos'><i className="fa-solid fa-arrow-up-right-from-square" onClick={getBehaviourInfo}></i></Link>
          </div>
        </div>
        <div className="organize__behaviour-card_buttons-right">
          <div className="organize__behaviour-card_buttons-right_edit">
            {/* Display an icon to edit the behavior and pass a click handler */}
            <i className="fa-solid fa-pen-to-square" onClick={() => setToggleModal(true)}></i>
          </div>
          <div className="organize__behaviour-card_buttons-right_delete">
            {/* Display an icon to delete the behavior and pass a click handler */}
            <i className="fa-solid fa-trash" onClick={deleteBehaviour}></i>
          </div>
        </div>
      </div>

      {
        // Display the modal only when toggleModal is set to true
        toggleModal && <Modal setToggleModal={setToggleModal} bid={props.bid} getBehaviours={props.getBehaviours} />
      }
    </>
  )
}

export default Behaviour;
