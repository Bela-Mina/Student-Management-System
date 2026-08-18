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

s
That's enough.

If you want to show the important backend architecture too, use this slightly more detailed version:

## 📂 Project Structure


student-management/
│
├── client/                  # React frontend
│
├── server/                  # Node.js + Express backend
│   ├── config/              # Database configuration
│   ├── controllers/         # Business logic
│   ├── middleware/          # Error handling
│   ├── models/              # MongoDB/Mongoose models
│   ├── routes/              # API routes
│   ├── server.js            # Server entry point
│   └── .env                 # Environment variables
│
├── README.md
└── .gitignore


/🛠️ Technologies Used /
   
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

