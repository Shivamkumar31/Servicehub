const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserBookings
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/bookings/:userId", getUserBookings);

module.exports = router;
