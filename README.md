<div align="center">

# 🚀 ServiceConnect — Location-Based Service Booking Platform

**A full-stack web application that connects users with nearby skilled workers for instant service booking.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

<br/>

> 📍 Find nearby workers &nbsp;•&nbsp; 📦 Book services instantly &nbsp;•&nbsp; 🔔 Get real-time responses

<br/>

<!-- Replace with your actual links -->
[🌐 Live Demo](#) &nbsp;&nbsp;|&nbsp;&nbsp; [📹 Demo Video](#) &nbsp;&nbsp;|&nbsp;&nbsp; [📄 API Docs](#api-documentation)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Application Workflow](#-application-workflow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Data Model](#-data-model)
- [Deployment](#-deployment)
- [What I Learned](#-what-i-learned)

---

## 🧠 Overview

**ServiceConnect** is a location-aware service marketplace that bridges the gap between users who need help and workers ready to provide it. Whether it's plumbing, electrical work, or home repairs — users can discover nearby professionals, book instantly, and track their request in real time.

This project was built to simulate a real-world platform with a focus on clean API design, intuitive UX, and a practical booking lifecycle (Pending → Accepted/Rejected).

---

## 🎯 Features

| Feature | Description |
|---|---|
| 📍 **Location-Based Discovery** | Finds nearby workers based on user's coordinates (lat/lng) |
| 🔐 **Authentication** | Secure user & worker registration and login |
| 👷 **Worker Profiles** | Workers register with category, skills, and contact info |
| 📦 **Instant Booking** | Users can book any available worker in one click |
| 🔄 **Booking Lifecycle** | Tracks status — `Pending` → `Accepted` or `Rejected` |
| 🔔 **Worker Notifications** | Workers receive instant alerts on new booking requests |
| 📄 **Swagger API Docs** | Full REST API documented with OpenAPI 3.0 spec |
| 🖼️ **Image Upload** | Worker profile photos via Multer |

---

## 🧱 Tech Stack

### 🎨 Frontend

- **React.js** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **Axios / Fetch API** — HTTP requests to backend
- **Geolocation API** — Captures user's lat/lng for nearby search

### ⚙️ Backend

- **Node.js + Express.js** — REST API server
- **Multer** — Handles image/file uploads
- **Swagger (OpenAPI 3.0)** — Interactive API documentation
- **JSON File Storage** — Lightweight, file-based data persistence

---

## 🔁 Application Workflow

```
User Registers / Logs In
        │
        ▼
  Shares Location (lat, lng)
        │
        ▼
  Nearby Workers Listed
        │
        ▼
  User Selects Worker → Books Service
        │
        ▼
  Worker Gets Notified 🔔
        │
        ▼
  Worker Accepts ✅  or  Rejects ❌
        │
        ▼
  Booking Status Updated for User
```

---

## 📁 Project Structure

```
service-booking-app/
│
├── frontend/                  # React.js client
│   ├── public/
│   └── src/
│       ├── components/        # Reusable UI components
│       ├── pages/             # Route-level views (Home, Login, Booking, etc.)
│       ├── services/          # API call functions (axios)
│       └── App.jsx
│
├── backend/                   # Node.js + Express server
│   ├── routes/                # API route handlers
│   │   ├── users.js
│   │   ├── workers.js
│   │   └── bookings.js
│   ├── data/                  # JSON-based data store
│   │   └── db.json
│   ├── uploads/               # Multer image storage
│   ├── swagger.js             # OpenAPI config
│   └── server.js              # App entry point
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- npm or yarn

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/service-booking-app.git
cd service-booking-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

> Server runs at: `http://localhost:5000`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

> App runs at: `http://localhost:3000`

---

## 📄 API Documentation

Interactive Swagger docs are available once the backend is running:

```
http://localhost:5000/api-docs
```

### 🔑 Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | User login |
| `POST` | `/api/workers/register` | Register a new worker |
| `GET` | `/api/workers/nearby` | Get workers by location |
| `POST` | `/api/bookings` | Create a new booking |
| `PUT` | `/api/bookings/:id/status` | Accept or reject a booking |
| `GET` | `/api/bookings/:userId` | Get bookings for a user |

---

## 🗄️ Data Model

The app uses a flat JSON-based database (ideal for prototyping):

```json
{
  "users": [
    {
      "id": "u1",
      "name": "John Doe",
      "email": "john@example.com",
      "location": { "lat": 13.08, "lng": 80.27 }
    }
  ],
  "workers": [
    {
      "id": "w1",
      "name": "Ravi Kumar",
      "category": "Electrician",
      "contact": "9876543210",
      "location": { "lat": 13.09, "lng": 80.28 },
      "profileImage": "uploads/ravi.jpg"
    }
  ],
  "bookings": [
    {
      "id": "b1",
      "userId": "u1",
      "workerId": "w1",
      "status": "Pending",
      "createdAt": "2025-01-01T10:00:00Z"
    }
  ]
}
```

> ⚠️ **Note:** JSON file storage is used as a lightweight prototype solution. A production version would use a proper database like **MongoDB** or **PostgreSQL**.

---

## ☁️ Deployment

| Layer | Platform |
|---|---|
| **Frontend** | [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/) |
| **Backend** | [Render](https://render.com/) / [Railway](https://railway.app/) |

> After deployment, update `REACT_APP_API_URL` in your frontend `.env` to point to the live backend URL.

---

## 📚 What I Learned

Working on this project gave me hands-on experience with real-world full-stack development:

- **Full-Stack Architecture** — Designing and connecting a React frontend with an Express REST API
- **REST API Design** — Structuring clean, resource-based routes with proper HTTP methods
- **Booking System Logic** — Implementing a stateful booking lifecycle (Pending → Accepted/Rejected)
- **Location-Based Features** — Using the Geolocation API and filtering workers by proximity
- **File Upload Handling** — Managing multipart form data with Multer
- **API Documentation** — Writing OpenAPI 3.0 specs and rendering interactive docs with Swagger UI
- **Project Structuring** — Organizing a scalable monorepo with clear separation of concerns

---

## 🔮 Future Improvements

- [ ] Migrate from JSON file storage → **MongoDB** or **PostgreSQL**
- [ ] Add **JWT authentication** for secure sessions
- [ ] Implement **real-time notifications** with WebSockets (Socket.io)
- [ ] Build a **worker dashboard** to manage bookings
- [ ] Add **payment gateway** integration
- [ ] Write **unit & integration tests**

---

## 🤝 Connect With Me

> Have feedback or want to collaborate? Feel free to reach out!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](#)

---

<div align="center">

Made with ❤️ and lots of `console.log()` debugging

⭐ If you found this helpful, consider giving it a star!

</div>

