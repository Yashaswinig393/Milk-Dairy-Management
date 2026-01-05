Milk Entry One-Time Save System (MERN Stack)

This project implements a secure milk entry system with one-time save, approval-based edits, and complete audit traceability using the MERN stack.

Features

One-time milk entry (auto-lock after save)

Read-only entries for society users

Edit request workflow (EO → Admin)

Admin approval mandatory for edits

Audit trail for all approved changes

MERN stack implementation with Bootstrap UI

Tech Stack

Frontend: React, Bootstrap, Axios

Backend: Node.js, Express

Database: MongoDB (with Mongoose)

Routing: React Router DOM

Installation & Setup
Prerequisites

Node.js (v16+ recommended)

npm

MongoDB (local or MongoDB Atlas)

Git

Project Structure
Milk-Dairy-2026/
├── backend/
└── frontend/

Backend Setup

Navigate to backend folder

cd backend


Install dependencies

npm install


Start MongoDB (local or use Atlas)

mongod


Run backend server

Development mode:

npm run dev


Normal mode:

npm start


Backend runs on:

http://localhost:5000

Frontend Setup

Navigate to frontend folder

cd frontend


Install dependencies

npm install


(If needed explicitly)

npm install axios react-router-dom bootstrap


Start React app

npm start


Frontend runs on:

http://localhost:3000

How to Use the Application
Role	URL	Description
Society	/	Create milk entry (one-time save)
EO	/eo	Request edit for milk entry
Admin	/admin	Approve or reject edit requests
Application Flow
Society → Save & Lock
EO → Request Edit
Admin → Approve
System → Update + Audit Trail

Sample Test Flow

Society saves milk entry

EO requests correction

Admin approves request

Milk entry updated with audit history
