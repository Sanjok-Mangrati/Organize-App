// Import necessary styles and libraries
import './todos.css';
import { useState, useEffect } from 'react';
import { Navbar, TodoToolbar, Todo } from '../../components/index';
import { Link } from 'react-router-dom';

const Todos = (props) => {

    // State variable to store the fetched todos
    const [todos, setTodos] = useState(null);

    // Function to fetch todos for a specific behavior
    const getTodos = async () => {
        try {
            // Send a GET request to the server to retrieve todos for the specific behavior
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/todos/${props.bid}`);
            // Convert the response into JSON format
            const json = await response.json();
            // Set the fetched todos in the state
            setTodos(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        // Call getTodos initially once when the component loads
        getTodos();
    }, [])

    return (
        <div>
            <nav>
                {/* Render the Navbar component */}
                <Navbar />
            </nav>
            <main>
                <Link to='/'><div className="organize__todos-goback">
                    {/* Link to go back to the homepage */}
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                    <p>Go Back</p>
                </div></Link>
                <div className='organize__todos-title'>
                    <h1>{props.bname.toUpperCase()}</h1>
                </div>
                {/* Render the TodoToolbar component and pass relevant props */}
                <TodoToolbar getTodos={getTodos} bid={props.bid} />
                {
                    todos?.map((todo) => (
                        // Render the Todo component for each todo item and pass relevant props
                        <Todo key={todo.tid} name={todo.name} status={todo.status} getTodos={getTodos} tid={todo.tid} />
                    ))
                }
            </main>
        </div>
    )
}

export default Todos;
