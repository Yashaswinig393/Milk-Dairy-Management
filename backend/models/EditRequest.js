const mongoose = require("mongoose");

const EditRequestSchema = new mongoose.Schema({
  milkEntryId: mongoose.Schema.Types.ObjectId,
  newQuantity: Number,
  status: { type: String, default: "PENDING" }
});

module.exports = mongoose.model("EditRequest", EditRequestSchema);
