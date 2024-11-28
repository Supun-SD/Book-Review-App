# Book Review Application

## Overview

The **Book Review Application** allows users to browse, add, edit, and delete book reviews. It serves as a platform for sharing thoughts on books, discovering new reads, and engaging with community reviews.

---

## Features

### Backend

- **REST API Endpoints**:
  - `GET /reviews`: Retrieve all book reviews.
  - `GET /reviews/:id`: Retrieve a specific book review.
  - `POST /reviews`: Add a new book review.
  - `PUT /reviews/:id`: Update an existing review.
  - `DELETE /reviews/:id`: Delete a specific review.

### Frontend

- List all book reviews.
- Add new reviews through a form.
- Edit existing reviews.
- Delete reviews.

---

## Tech Stack

### Backend

- **Framework**: Node.js with Express.js
- **Database**: MongoDB

### Frontend

- React
- Tailwind
- shadcn

### Others

- Dockerized backend and frontend services.
- Managed with Docker Compose for seamless container orchestration.

---

## Prerequisites

Ensure the following are installed on your machine:

- **Docker** and **Docker Compose**
- Node.js
- npm or yarn

---

## Setup Instructions

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Supun-SD/Book-Review-App.git
   cd book-review-application
   ```

2. **Backend Setup**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables (e.g., `.env` file with database connection details).
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:

   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

4. Open the application in your browser at `http://localhost:3000`.

---

### Dockerized Setup

1. **Build and Start Services**:

   - Run the following command in the root directory:
     ```bash
     docker-compose up --build
     ```

2. **Access the Application**:

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8080`

3. **Stop Services**:
   ```bash
   docker-compose down
   ```

---

## Review Model

A book review consists of the following fields:

- **User's name**: Name of reviewing user.
- **Book Title**: Name of the book.
- **Author**: Author of the book.
- **Rating**: Star rating (1-5).
- **Review Text**: Detailed review.
- **Date Added**: Automatically generated.

---
