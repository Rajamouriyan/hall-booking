const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    requied: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  roomId: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("bookRoom", roomSchema);