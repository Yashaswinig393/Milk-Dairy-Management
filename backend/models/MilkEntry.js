const mongoose = require("mongoose");

const milkEntrySchema = new mongoose.Schema({
  societyId: String,
  date: String,
  quantity: Number,
  fat: Number,
  locked: { type: Boolean, default: false },

  auditHistory: [
    {
      oldData: Object,
      editedBy: String,
      editedAt: Date
    }
  ]
});

module.exports = mongoose.model("MilkEntry", milkEntrySchema);
