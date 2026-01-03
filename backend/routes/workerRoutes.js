const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  registerWorker,
  loginWorker,
  getAllWorkers,
  getWorkersByCategory,
  getWorkersWithDistance, 
} = require("../controllers/workerController");

// ✅ REGISTER
// router.post("/register", registerWorker);
router.get("/with-distance", getWorkersWithDistance);


router.post("/register", upload.single("photo"), registerWorker);
// ✅ LOGIN
router.post("/login", loginWorker);

// ✅ WORKER LIST
router.get("/", getAllWorkers);
router.get("/category/:category", getWorkersByCategory);

module.exports = router;
