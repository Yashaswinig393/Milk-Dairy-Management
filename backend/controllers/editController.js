const EditRequest = require("../models/EditRequest");
const MilkEntry = require("../models/MilkEntry");

exports.requestEdit = async (req, res) => {
  const request = new EditRequest(req.body);
  await request.save();
  res.json(request);
};

exports.approveEdit = async (req, res) => {
  const request = await EditRequest.findById(req.params.id);
  const milk = await MilkEntry.findById(request.milkEntryId);

  milk.auditHistory.push({
    oldData: milk.toObject(),
    editedBy: "ADMIN",
    editedAt: new Date()
  });

  Object.assign(milk, request.newData);
  await milk.save();

  request.status = "APPROVED";
  await request.save();

  res.json({ message: "Edit Approved" });
};
