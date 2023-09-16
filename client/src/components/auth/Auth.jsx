// Import necessary styles and libraries
import './auth.css';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const Auth = () => {

    // State variables to manage form inputs, cookies, errors, and authentication data
    const [cookie, setCookie, removeCookie] = useCookies(null);
    const [error, setError] = useState(null);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [authData, setAuthData] = useState(null);

    // Function to switch between login and signup views
    const viewLogin = (status) => {
        setError(null);
        setIsLogin(status);
    }

    // Function to handle form submission for login or signup
    const handleSubmit = async (e, endpoint) => {
        try {
            e.preventDefault();

            // Check if passwords match in case of signup
            if (!isLogin && password !== confirmPassword) {
                setError('Passwords do not match!')
                return
            }

            // Send a request to the server with email and password
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            // Parse the JSON response
            const json = await response.json();

            // Update authentication data and handle errors
            setAuthData(json);

            if (json.error) {
                setError(json.error);
            } else {
                // Set cookies for email and authentication token
                setCookie('Email', json.email);
                setCookie('AuthToken', json.token);

                // Refresh the page to update the authToken and render the homepage
                window.location.reload();
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="organize__auth-container">
            <div className="organize__auth-container_box">
                <form>
                    <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    {!isLogin && <input type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />}
                    <input type="submit" className='organize__auth-create' onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')} />
                    {error && <p>{error}</p>}
                </form>
                <div className="organize__auth-options">
                    {/* Button to switch to signup view */}
                    <button
                        onClick={() => viewLogin(false)}
                        style={{ backgroundColor: !isLogin ? 'rgb(255,255,255)' : 'rgb(188,188,188)' }}
                    >Sign Up</button>
                    {/* Button to switch to login view */}
                    <button
                        onClick={() => viewLogin(true)}
                        style={{ backgroundColor: isLogin ? 'rgb(255,255,255)' : 'rgb(188,188,188)' }}
                    >Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;
