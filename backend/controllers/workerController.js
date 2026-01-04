const fs = require("fs");
const path = require("path");
const { getDistanceKm } = require("../utils/distance");
 // ✅ ONLY filename

const dataPath = path.join(__dirname, "../data/workers.json");

// ---------- helpers ----------
const readData = () => {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({}, null, 2));
  }
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
};

const writeData = (data) =>
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// ---------------------------------------------------------
// REGISTER WORKER
// ---------------------------------------------------------
exports.registerWorker = (req, res) => {
  // 👇 req.body now works
  const { name, phone, category, experience, address, lat, lng } = req.body;

  // 👇 image file
  //const photo = req.file ? `/uploads/${req.file.filename}` : null;


  // NEW ✅
const photo = req.file ? req.file.path : null;


  if (!name || !phone || !category || !experience || !address || !lat || !lng) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = readData();
  const allWorkers = Object.values(data).flat();

  const existing = allWorkers.find((w) => w.phone === phone);
  if (existing) {
    return res.json({ success: true, worker: existing });
  }

  const newWorker = {
    id: Date.now(),
    name,
    phone,
    category,
    experience,
    address,
    lat: Number(lat),
    lng: Number(lng),
    photo, // ✅ stored image path
    createdAt: new Date().toISOString(),
  };

  if (!data[category]) data[category] = [];
  data[category].push(newWorker);
  writeData(data);

  res.json({ success: true, worker: newWorker });
};


// ---------------------------------------------------------
// LOGIN WORKER (PHONE ONLY)
// ---------------------------------------------------------
exports.loginWorker = (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ success: false, message: "Phone required" });
  }

  const data = readData();
  const allWorkers = Object.values(data).flat();

  const worker = allWorkers.find((w) => w.phone === phone);

  if (!worker) {
    return res.status(404).json({
      success: false,
      message: "Worker not registered",
    });
  }

  res.json({
    success: true,
    worker,
  });
};

// ---------------------------------------------------------
// GET ALL WORKERS
// ---------------------------------------------------------
exports.getAllWorkers = (req, res) => {
  const data = readData();
  res.json(Object.values(data).flat());
};

// ---------------------------------------------------------
// GET WORKERS BY CATEGORY
// ---------------------------------------------------------
exports.getWorkersByCategory = (req, res) => {
  const { category } = req.params;
  const data = readData();
  res.json(data[category] || []);
};


// ---------------------------------------------------------
// GET WORKERS WITH DISTANCE (OPTIONAL USER LOCATION)
// ---------------------------------------------------------
exports.getWorkersWithDistance = (req, res) => {
  const { lat, lng } = req.query;
  const data = readData();
  const allWorkers = Object.values(data).flat();

  // If user location NOT provided → return workers WITHOUT distance
  if (!lat || !lng) {
    return res.json(allWorkers);
  }

  const userLat = parseFloat(lat);
  const userLng = parseFloat(lng);

  const workersWithDistance = allWorkers.map((w) => {
    if (w.lat && w.lng) {
      const distance = getDistanceKm(
        userLat,
        userLng,
        w.lat,
        w.lng
      );

      return {
        ...w,
        distance: Number(distance.toFixed(2)), // km
      };
    }
    return w;
  });

  // Sort by nearest first
  workersWithDistance.sort((a, b) => {
    if (a.distance === undefined) return 1;
    if (b.distance === undefined) return -1;
    return a.distance - b.distance;
  });

  res.json(workersWithDistance);
};







