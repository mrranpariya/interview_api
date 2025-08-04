const express = require("express");
const router = express.Router();
const {
  createShipment,
  addNewHope,
  getAllshipments,
} = require("../controllers/shipmentsController");
const {
  createflight,
  updateStatus,
} = require("../controllers/flightController");

router.post("/create", createShipment);
router.get("/:shipment_number/hops", getAllshipments);
router.post("/:shipment_number/hops/add", addNewHope);
router.post("/:shipment_number/flights/add", createflight);
router.post("/flights/:flight_number/status", updateStatus);

module.exports = router;
