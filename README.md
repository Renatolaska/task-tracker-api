Task Tracker API

# Description
A simple backend API built with Node.js and Express for authentication and task management.

# Features
- User registration
- User login
- JWT authentication
- Protected routes
- CRUD tasks (Create, Read, Update, Delete)
# Tech Stack
- Node.js
- Express
- JWT
- JavaScript (in-memory storage)

# How to Run
npm install  
npm run dev  

Server runs at:
http://localhost:5000

# API Routes

# Auth
POST /api/auth/register  
POST /api/auth/login  

# Tasks (Protected)
GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

# Environment Variables
PORT=5000  
JWT_SECRET=secret123
