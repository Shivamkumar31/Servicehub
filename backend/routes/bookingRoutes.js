const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookingsByWorker,
  updateBookingStatus,
  getBookingById,
  getBookingsByUser,
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/worker/:workerId", getBookingsByWorker);

// ✅ worker accepts / rejects
router.patch("/:bookingId/status", updateBookingStatus);
router.get("/:bookingId", getBookingById); // ✅ USER FETCH
// ✅ USER DASHBOARD ROUTE
router.get("/user/:userId", getBookingsByUser);

// updated code 


module.exports = router;
