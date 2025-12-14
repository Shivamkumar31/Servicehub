const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/workers.json");

/* ---------- helpers ---------- */
const readData = () => {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({}, null, 2));
  }
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
};

const writeData = (data) =>
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

/* ---------------------------------------------------------
   REGISTER WORKER
--------------------------------------------------------- */
exports.registerWorker = (req, res) => {
  const { name, phone, category, experience, address, lat, lng } = req.body;

  if (!name || !phone || !category || !experience || !address || !lat || !lng) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const data = readData();
  const allWorkers = Object.values(data).flat();

  // 🔹 Already registered → login
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
    lat,
    lng,
    createdAt: new Date().toISOString(),
  };

  if (!data[category]) data[category] = [];
  data[category].push(newWorker);
  writeData(data);

  res.json({ success: true, worker: newWorker });
};

/* ---------------------------------------------------------
   LOGIN WORKER (PHONE ONLY)
--------------------------------------------------------- */
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

  res.json({ success: true, worker });
};

/* ---------------------------------------------------------
   GET WORKERS
--------------------------------------------------------- */
exports.getAllWorkers = (req, res) => {
  const data = readData();
  res.json(Object.values(data).flat());
};

exports.getWorkersByCategory = (req, res) => {
  const { category } = req.params;
  const data = readData();
  res.json(data[category] || []);
};
