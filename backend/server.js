const express = require("express");
const cors = require("cors");
const path = require("path");   // ✅ ADD THIS
const app = express();

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use("/workers", require("./routes/workerRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));    
app.use("/users", require("./routes/userRoutes"));
// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
