// Import necessary styles and libraries
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './containers/index';
import { Todos } from './containers/index';
import { Auth } from './components/index';
import { useCookies } from 'react-cookie';

function App() {

  // Initialize cookies for authentication and behavior tracking
  const [cookie, setCookie, removeCookie] = useCookies(null);

  // State variables to store behavior ID and behavior name
  const [bid, setBid] = useState(null);
  const [bname, setBname] = useState(null);

  // Retrieve user's email and authentication token from cookies
  const email = cookie.Email;
  const authToken = cookie.AuthToken;

  // Function to set the behavior ID
  const getBid = (id) => {
    setBid(id);
  }

  // Function to set the behavior name
  const getBname = (name) => {
    setBname(name);
  }

  return (
    <div>
      {!authToken && <Auth />} {/* Render the Auth component if not authenticated */}
      {
        authToken && 
        <Routes>
          <Route exact path='/' element={<Homepage getBid={getBid} getBname={getBname} email={email} />} />
          <Route exact path='/todos' element={<Todos bid={bid} bname={bname} />} />
        </Routes> 
      }
    </div>
  );
}

export default App;
