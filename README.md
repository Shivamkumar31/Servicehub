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
[🌐 Live Demo](https://servicehub-mu.vercel.app/) &nbsp;&nbsp;|&nbsp;&nbsp; [📹 Demo Video](#) &nbsp;&nbsp;|&nbsp;&nbsp; [📄 API Docs](#api-documentation)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Screenshots](#-screenshots)
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

## 📸 Screenshots

### 🏠 Home / Landing Page
<!-- Add screenshot here -->
<img width="1903" height="883" alt="image" src="https://github.com/user-attachments/assets/4bdc1b66-de8e-492d-9fad-1e59a3d679c9" />
<img width="1889" height="752" alt="image" src="https://github.com/user-attachments/assets/cbea91a8-8f34-46e2-8b73-258cec3118ff" />



### 🔐 Login / Register
<!-- Add screenshot here -->
<img width="1892" height="842" alt="image" src="https://github.com/user-attachments/assets/6a375814-312f-4bc5-b75c-711f278c7822" />
<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/b19fe6fe-92e3-46f5-a6c5-0d60544116a9" />
<img width="1919" height="885" alt="image" src="https://github.com/user-attachments/assets/5859ebd8-3b3f-4568-b27a-3bc4b04cfabb" />


### 📍 Nearby Workers Listing
<!-- Add screenshot here -->
<img width="1889" height="876" alt="image" src="https://github.com/user-attachments/assets/13a10f5c-83ee-4671-b5ce-21f9338f5018" />


### 📦 Booking Page
<!-- Add screenshot here -->
<img width="1895" height="838" alt="image" src="https://github.com/user-attachments/assets/667c8e86-f3b3-49f3-825a-ed2de0efe891" />
<img width="1903" height="856" alt="image" src="https://github.com/user-attachments/assets/65ed7870-022e-4695-92fc-256a1adab786" />


### ✅ Booking Status / Worker Response
<!-- Add screenshot here -->
<img width="1919" height="789" alt="image" src="https://github.com/user-attachments/assets/3a206560-9da4-48dd-ba87-847a100f30b8" />
<img width="1904" height="887" alt="image" src="https://github.com/user-attachments/assets/7f90f07c-a501-4221-b125-afc0355ca39a" />



### 📄 Swagger API Docs
<!-- Add screenshot here -->
![Swagger Docs](screenshots/swagger-docs.png)

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
