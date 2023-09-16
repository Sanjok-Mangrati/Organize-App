// Import necessary styles and libraries
import './homepage.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Toolbar } from '../../components/index';
import Behaviours from '../behaviours/Behaviours';

const Homepage = (props) => {

  // State variable to store the fetched behaviors
  const [behaviours, setBehaviours] = useState(null);

  // Function to fetch user-specific behaviors
  const getBehaviours = async () => {
    try {
      // Send a GET request to the server to retrieve user-specific behaviors
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/behaviours/${props.email}`);
      
      // Convert the response into JSON format
      const json = await response.json();
      // Set the fetched behaviors in the state
      setBehaviours(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Call getBehaviours initially once when the page loads
    getBehaviours();
  }, [])

  return (
    <div>
      <nav>
        {/* Render the Navbar component */}
        <Navbar />
      </nav>
      <main>
        {/* Render the Toolbar component and pass the getBehaviours function and user email as props */}
        <Toolbar getBehaviours={getBehaviours} email={props.email}/>
        {/* Render the Behaviours component and pass relevant props */}
        <Behaviours getBehaviours={getBehaviours} behaviours={behaviours} getBid={props.getBid} getBname={props.getBname}/>
      </main>
    </div>
  )
}

export default Homepage;
