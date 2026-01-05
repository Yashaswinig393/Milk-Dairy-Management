const MilkEntry = require("../models/MilkEntry");

exports.createMilkEntry = async (req, res) => {
  const entry = new MilkEntry({ ...req.body, locked: true });
  await entry.save();
  res.json(entry);
};

exports.getMilkEntry = async (req, res) => {
  const entry = await MilkEntry.findById(req.params.id);
  res.json(entry);
};
