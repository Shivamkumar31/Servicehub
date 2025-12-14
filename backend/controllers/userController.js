const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

// helpers
const readUsers = () => {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, "[]");
  }
  return JSON.parse(fs.readFileSync(usersFile, "utf-8"));
};

const writeUsers = (data) => {
  fs.writeFileSync(usersFile, JSON.stringify(data, null, 2));
};

// ------------------------------------
// REGISTER USER
// ------------------------------------
exports.registerUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const users = readUsers();

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.json({ success: false, message: "User already exists" });
  }

  const username = email.split("@")[0].slice(0, 4);

  const newUser = {
    id: Date.now(),
    email,
    password,
    username,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  writeUsers(users);

  res.json({ success: true, user: newUser });
};

// ------------------------------------
// LOGIN USER
// ------------------------------------
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  res.json({ success: true, user });
};

// ------------------------------------
// USER BOOKINGS (later extend)
// ------------------------------------
exports.getUserBookings = (req, res) => {
  const bookingsFile = path.join(__dirname, "../data/bookings.json");
  if (!fs.existsSync(bookingsFile)) return res.json([]);

  const bookings = JSON.parse(fs.readFileSync(bookingsFile, "utf-8"));
  const userBookings = bookings.filter(b => b.userId == req.params.userId);

  res.json(userBookings);
};
