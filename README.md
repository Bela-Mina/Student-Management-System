# Student-Management-System

# Student Management System

A full-stack Student Management System built with React, Node.js, Express, and MongoDB.

## 📌 Project Overview

This project allows users to manage student records through a web-based interface.

The application supports the complete CRUD operations:

- Create students
- View students
- Update students
- Delete students

The frontend communicates with a RESTful backend API, which stores and manages data in MongoDB.

##  System Architecture

text
React Frontend
      ↓
   HTTP Request
      ↓
Node.js + Express
      ↓
   Controllers
      ↓
    Mongoose
      ↓
 MongoDB Atlas
      ↓
   HTTP Response
      ↓
 React UI

// Project Structure /

student-management/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.jsx
│   │   │   └── StudentList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md

//🛠️ Technologies Used //
   // Frontend//
-React
-JavaScript
-CSS
-Vite

  //Backend//
-Node.js
-Express.js
-Mongoose
-CORS
dotenv

 // Database //
-MongoDB Atlas
-API Testing
-Thunder Client


// HTTP Status Codes //

The API uses standard HTTP status codes:

Status	Meaning
200	Request successful
201	Resource created
400	Invalid request
404	Student not found
409	Conflict
500	Internal server error

