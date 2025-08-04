const shipments = require("../models/shipments");

exports.createShipment = async (req, res) => {
  const { origin, destination, shipment_number } = req.body;
  const arr = [destination, shipment_number];
  const shipment = await shipments.create({
    origin,
    destination,
    shipment_number,
    hopes: arr,
  });

  if (!shipment) {
    res.status(400).json({ message: "Bad request" });
  }

  res.status(201).json({
    success: true,
    message: "Shipments create successfully",
    data: shipment,
  });
};

exports.addNewHope = async (req, res) => {
  const { previous_hop, next_hop, new_hop } = req.body;
  const { shipment_number } = req.params;

  const shipment = await shipments.findOne({
    shipment_number: shipment_number,
  });
  const hopes = shipment.hopes;
  hopes.push(new_hop);
  shipment.hopes = hopes;
  shipment.save();
  res.status(200).json(hopes);
};

exports.getAllshipments = async (req, res) => {
  const { shipment_number } = req.params;
  const shipment = shipments.find({ shipment_number: shipment_number });

  if (!shipment) {
    res.status(400).json({
      success: false,
      message: "Shipment with ID 12345 not found.",
    });
  }
  res.status(200).json({
    success: true,
    message: "Hopes retrieved successfully",
    data: shipment,
  });
};
