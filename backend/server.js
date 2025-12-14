const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/workers", require("./routes/workerRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));    
app.use("/users", require("./routes/userRoutes"));


app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
