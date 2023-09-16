// Import necessary styles and libraries
import './navbar.css';
import React from 'react';
import { useCookies } from 'react-cookie';

const Navbar = () => {

  // Initialize cookies
  const [cookie, setCookie, removeCookie] = useCookies(null);

  // Function to handle user logout
  const handleLogout = () => {
    // Remove 'Email' and 'AuthToken' cookies
    removeCookie('Email');
    removeCookie('AuthToken');
    // Reload the page to log the user out and redirect to the login page
    window.location.reload();
  }

  return (
    <div className='organize__navigation'>
      <div className="organize__navigation-logo">
        Organize
      </div>
      <div className="organize__navigation-left_section">
        <div className="organize__navigation-profile">
          {/* Display a user icon */}
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="organize__navigation-logout">
          {/* Button to trigger the handleLogout function */}
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
