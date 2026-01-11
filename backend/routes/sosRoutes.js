const express = require("express");
const router = express.Router();
const { triggerSOS } = require("../controllers/sosController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/trigger", authMiddleware, triggerSOS);

module.exports = router;
