# Task Management and Social Feed Web Application

This repository contains the source code for a full-stack web application that integrates user authentication, a task management system, and a social feed for posting content. The project emphasizes functionality, design, and code quality, providing an intuitive and engaging user experience.

## Table of Contents
- [Objective](#objective)
- [Features](#features)
  - [User Authentication](#user-authentication)
  - [Task Management System](#task-management-system)
  - [Feed Section](#feed-section)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
  - [User Authentication Endpoints](#user-authentication-endpoints)
  - [Task Management Endpoints](#task-management-endpoints)
  - [Social Feed Endpoints](#social-feed-endpoints)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

## Objective
The objective of this project is to develop a feature-rich web application that enables users to:
- Authenticate using traditional login or Google OAuth.
- Manage tasks with drag-and-drop functionality across different columns (Pending, Completed, Done).
- Share content via a social feed with image and caption support.

## Features
### User Authentication
- **Register:** Create an account using name, email, and password.
- **Login:** Access the platform using email and password.

### Task Management System
- **Create Task:** Add tasks with a name and description.
- **Drag-and-Drop:** Move tasks between columns (Pending, Completed, Done) using drag-and-drop functionality powered by React DnD.
- **Delete Task:** Remove tasks with confirmation before deletion.

### Feed Section
- **Content Posting:** Share photos with captions in a user feed.
- **Cloud Storage:** Leverage Cloudinary for secure and efficient image storage and retrieval.

## Technologies Used
- **Frontend:** React.js (React DnD for drag-and-drop), Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Image Storage:** Cloudinary
- **Deployment:** Vercel

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rajan153/Task_Management.git
   cd repository-name
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the backend folder with the following variables:
     ```env
     PORT=4000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the application:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Access the application at `http://localhost:4000`.

## API Endpoints
### User Authentication Endpoints
- **Register:** `POST http://localhost:4000/api/v1/users/register`
- **Login:** `POST http://localhost:4000/api/v1/users/login`

### Task Management Endpoints
- **Create Task:** `POST http://localhost:4000/api/v1/tasks/create-task`
- **Delete Task:** `DELETE http://localhost:4000/api/v1/tasks/delete-task`
- **Update Task:** `PATCH http://localhost:4000/api/v1/tasks/update-task`

### Social Feed Endpoints
- **Create Post:** `POST http://localhost:4000/api/v1/social/create-post`
- **Get Posts:** `GET http://localhost:4000/api/v1/social/posts`

## Deployment
The application is deployed on [Vercel]. You can access the live demo here:
[Live Demo URL](#)

## Future Improvements
- Enhance UI/UX for better accessibility.
- Add real-time updates for task changes using WebSockets.
- Integrate advanced analytics for user activity and engagement.

---

Feel free to explore, contribute, and provide feedback. Happy coding!
