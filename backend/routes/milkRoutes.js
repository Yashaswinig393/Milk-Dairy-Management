const express = require("express");
const MilkEntry = require("../models/MilkEntry");
const router = express.Router();

router.post("/", async (req, res) => {
  const entry = new MilkEntry(req.body);
  await entry.save();
  res.json(entry);
});

router.get("/", async (req, res) => {
  const data = await MilkEntry.find();
  res.json(data);
});

module.exports = router;
