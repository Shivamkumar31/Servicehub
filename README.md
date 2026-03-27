📌 Project Overview

This application allows users to find and book nearby service providers (workers) based on location. Workers can register themselves and respond to booking requests in real time.

👤 User Features
Register & Login securely
Discover nearby workers using location
View worker profiles and categories
Book services instantly
Track booking status (Pending / Accepted / Rejected)
👷 Worker Features
Register with category, location, phone, and email
Receive booking notifications instantly
Accept or reject requests within minutes
Manage availability and bookings
📍 Key Functionalities
🌍 Location-based worker discovery (lat, lng)
📦 Booking creation and management
🔄 Real-time booking status updates
🔔 Instant notification system for workers
📄 API documentation using Swagger (OpenAPI)
🛠️ Tech Stack
Frontend
⚛️ React.js (Functional components & hooks)
🎨 Tailwind CSS
🌐 Axios / Fetch API
🗺️ Google Maps API (Location input & discovery)
Backend
🟢 Node.js
🚀 Express.js
📁 File-based JSON storage (temporary database)
📸 Multer (for image uploads)
📄 Swagger (OpenAPI 3.0 documentation)
🧠 How It Works
Users register and log in
Users enter their location or allow GPS access
Nearby workers are displayed based on location
User selects a worker and creates a booking
Worker receives notification instantly
Worker accepts or rejects within a short time
Booking status updates in real time
📂 Project Structure
project-root/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── data/ (JSON storage)
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
│
└── README.md
⚙️ Installation & Setup
🔧 Backend Setup
cd backend
npm install
npm start

Server runs on:

http://localhost:5000
💻 Frontend Setup
cd frontend
npm install
npm start

App runs on:

http://localhost:3000
📡 API Documentation

Swagger API docs available at:

http://localhost:5000/api-docs
🔮 Future Improvements
🗄️ Replace JSON storage with MongoDB
🔐 Add JWT authentication & authorization
🔔 Real-time notifications using WebSockets (Socket.IO)
💳 Payment integration (Stripe / Razorpay)
📱 Mobile responsive UI enhancements
⭐ Ratings & reviews system
🧭 Advanced location filtering & maps UI
🚧 Current Limitations
Uses JSON as database (not scalable)
No real-time socket integration yet
Basic notification system (not push-based)
Limited security implementation
👨‍💻 Developer Notes

This project was built as a full-stack learning and practical implementation of:

REST API development
React component architecture
Location-based services
Booking system logic
🤝 Contribution

Feel free to fork the repository and improve the project. Contributions are welcome!
