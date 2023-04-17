const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  noOfSeatsAvailable: {
    type: Number,
    required: true,
  },
  Amenities: {
    type: Array,
    requied: true,
  },
  pricePerHour: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("createRoom", roomSchema);