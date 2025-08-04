const mongoose = require("mongoose");

const fightSchema = new mongoose.Schema({
  flight_path: { type: String },
  shipment_number: { type: Number },
  flight_number: { type: String, unique: true },
  departure: { type: Date, default: Date.now },
  arrival: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["in-transit", "landed"],
    default: "in-transit",
  },
});

module.exports = mongoose.model("flights", fightSchema);
