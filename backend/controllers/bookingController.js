const fs = require("fs");
const path = require("path");

const bookingsFile = path.join(__dirname, "../data/bookings.json");

// ✅ Safe read
const readBookings = () => {
  try {
    if (!fs.existsSync(bookingsFile)) {
      fs.writeFileSync(bookingsFile, "[]");
    }
    const data = fs.readFileSync(bookingsFile, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Read booking error:", err);
    return [];
  }
};

// ✅ Safe write
const writeBookings = (data) => {
  fs.writeFileSync(bookingsFile, JSON.stringify(data, null, 2));
};

// ✅ CREATE BOOKING
exports.createBooking = (req, res) => {
  const {
    userId,
    workerId,
    workerName,
    date,
    time,
    address,
    lat,
    lng,
    notes,
    image,
  } = req.body;

  // 🔴 IMPORTANT VALIDATION
  if (
    !userId ||
    !workerId ||
    !workerName ||
    !date ||
    !time ||
    !address ||
    lat === undefined ||
    lng === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const bookings = readBookings();

  const newBooking = {
    id: Date.now(),
    userId,
    workerId,
    workerName,
    date,
    time,
    address,

    // ✅ STORE LOCATION (FOR DISTANCE)
    lat: parseFloat(lat),
    lng: parseFloat(lng),

    notes: notes || "",
    image: image || null,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);
  writeBookings(bookings);

  res.status(201).json({
    success: true,
    booking: newBooking,
  });
};

// ✅ UPDATE BOOKING STATUS
exports.updateBookingStatus = (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.body;

  if (!["ACCEPTED", "REJECTED"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  const bookings = readBookings();
  const index = bookings.findIndex((b) => b.id == bookingId);

  if (index === -1) {
    return res.status(404).json({ message: "Booking not found" });
  }

  bookings[index].status = status;
  bookings[index].updatedAt = new Date().toISOString();

  writeBookings(bookings);

  res.json({
    success: true,
    message: `Booking ${status.toLowerCase()}`,
    booking: bookings[index],
  });
};

// ✅ GET BOOKING BY ID
exports.getBookingById = (req, res) => {
  const { bookingId } = req.params;
  const bookings = readBookings();

  const booking = bookings.find((b) => b.id == bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  res.json(booking);
};

// ✅ GET BOOKINGS FOR A WORKER
exports.getBookingsByWorker = (req, res) => {
  const { workerId } = req.params;
  const bookings = readBookings();

  const workerBookings = bookings.filter(
    (b) => b.workerId == workerId
  );

  res.json(workerBookings);
};

// ✅ GET BOOKINGS FOR USER
exports.getBookingsByUser = (req, res) => {
  const { userId } = req.params;
  const bookings = readBookings();

  const userBookings = bookings.filter(
    (b) => b.userId == userId
  );

  res.json(userBookings);
};
