const express = require("express");
const router = express.Router();

const {
  registerWorker,
  loginWorker,
  getAllWorkers,
  getWorkersByCategory,
} = require("../controllers/workerController");

// ✅ REGISTER
router.post("/register", registerWorker);

// ✅ LOGIN (THIS WAS MISSING ❌)
router.post("/login", loginWorker);

// ✅ WORKER LIST
router.get("/", getAllWorkers);
router.get("/category/:category", getWorkersByCategory);

module.exports = router;
