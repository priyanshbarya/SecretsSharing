# Project Name: Secrets Share

## Description
This project is a simple web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This app's main functionality is allowing users to share secrets anonymously. Users can register and log in to the system using their email/password or Google authentication. Once logged in, users can submit their secrets anonymously and view secrets submitted by other users.

## Features
- User authentication using email/password and Google authentication.
- Anonymous secret submission.
- View secrets shared by other users.
- Simple and intuitive user interface.

## Technologies Used
- MongoDB
- Mongoose
- Express.js
- React.js
- Node.js
- Passport.js
- Google OAuth

## Setup Instructions
1. Clone the repository: git clone https://github.com/priyanshbarya/SecretsSharing
2. Navigate to the project directory 
3. Install dependencies:
    - cd Frontend
    - npm install
    - cd ../Backend
    - npm install

4. Configure environment variables:
  - Create a `.env` file in the `Backend` directory.
  - Define the following variables in the `.env` file:
    ```
    PORT=where_you_want_to_run_your_backend
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=type_any_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_SECRET=your_google_client_secret
    URL=frontend_url
    SESSION_KEY=type_any_key
    GPASSWORD=create_secret_password
    ```
    
  - Create a `.env` file in the `Frontend` directory.
  - Define the following variables in the `.env` file:
    ```
    REACT_APP_BASE_URL=backend_url
    ```
    
5. Start the server:
   - cd ../Backend
   - nodemon index.js
   
6. Start the client:
    - cd ../Frontend
    - npm start
      
7. Open your browser and navigate to `http://localhost:3000` to access the application.

## Credits
This project was created by Priyansh Barya. 
