const fightSchema = require("../models/flights");

exports.createflight = async (req, res) => {
  const { carrier, from, to, flight_number, departure, arrival } = req.body;
  let temp = "";
  temp = from + "-" + carrier + "-" + to;

  const flight = await fightSchema.create({
    flight_number,
    departure,
    arrival,
    flight_path: temp,
  });

  if (!flight) {
    res.status(400).json({ message: "Bad request" });
  }

  res.status(201).json({
    success: true,
    message: "flights information added successfully",
    data: flight,
  });
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  const { flight_number } = req.params;

  const flight = await fightSchema.findOneAndUpdate(
    { flight_number: String(flight_number) },
    { $set: { status: status } },
    { new: true }
  );

  res.status(203).json({ flight });
};
