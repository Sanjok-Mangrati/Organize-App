# Organize-App

Organize-App is a web application that allows users to manage and organize their behaviors (skills, hobbies, etc.) effectively. Users can create, read, update, and delete behaviors, and each behavior is associated with a to-do list, which can also be managed by the user. The app is built using the PERN (PostgreSQL, Express.js, React.js, Node.js) stack, with JWT authentication for security.

## Features

- Create, Read, Update, and Delete behaviors (skills, hobbies, etc.).
- Each behavior has an associated to-do list.
- Create, Read, Update, and Delete to-do items within each behavior.
- Secure authentication using JSON Web Tokens (JWT).

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- PostgreSQL database set up.
- Clone the repository to your local machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Organize-App.git

2. Navigate to the client folder and install frontend dependencies:
   ```bash
   cd Organize-App/client
   npm install
   
3. Navigate to the server folder and install backend dependencies:
   ```bash
   cd Organize-App/server
   npm install

4. Start the frontend:
   ```bash
   cd ../client
   npm start

5. Start the backend:
   ```bash
   cd ../server
   npm start

**Note**
- You need to create the required .env file and setup the variables
- Create your own postgres database with the required tables and constraints

**Usage**

- Access the Organize-App frontend by opening your web browser and navigating to `http://localhost:3000`.
- Use the app to create, read, update, and delete behaviors and their associated to-do lists.
- Securely authenticate and manage your data with JWT-based authentication.

**Contributing**

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

**License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##Thank you for using Organize-App! We hope it helps you stay organized and productive.




