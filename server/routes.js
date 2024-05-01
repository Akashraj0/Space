import express from "express";
import Planet from "./DataModel.js";
import Booking from "./BookingModel.js";
const router = express.Router();

router.route("/planet").post(async (req, res) => {
  const data = await Planet.create(req.body);

  res.status(200).json(data);
});

router.route("/planet/:planet").post(async (req, res) => {
  const data = await Planet.find(req.params);
  res.status(200).json(data);
});

router.route("/booking").post(async (req, res) => {
  const data = await Booking.create(req.body);
  res.status(200).json(data);
});

export default router;
