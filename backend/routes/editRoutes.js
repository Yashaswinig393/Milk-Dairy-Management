const express = require("express");
const MilkEntry = require("../models/MilkEntry");
const EditRequest = require("../models/EditRequest");
const router = express.Router();

router.post("/request", async (req, res) => {
  const request = new EditRequest(req.body);
  await request.save();
  res.json(request);
});

router.get("/", async (req, res) => {
  const requests = await EditRequest.find({ status: "PENDING" });
  res.json(requests);
});

router.post("/approve/:id", async (req, res) => {
  const request = await EditRequest.findById(req.params.id);
  const milk = await MilkEntry.findById(request.milkEntryId);

  milk.auditHistory.push({
    oldData: { quantity: milk.quantity },
    editedBy: "ADMIN",
    editedAt: new Date()
  });

  milk.quantity = request.newQuantity;
  await milk.save();

  request.status = "APPROVED";
  await request.save();

  res.json({ message: "Approved" });
});

module.exports = router;
