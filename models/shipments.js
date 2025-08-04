const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  origin: { type: String },
  destination: { type: String },
  shipment_number: { type: Number, unique: true },
  hopes: [],
});

module.exports = mongoose.model("Shipments", shipmentSchema);
