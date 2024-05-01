import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
  arrival: String,
  Jupiter: String,
  date: String,
  depature: String,
  email: String,
  message: String,
  name: String,
  subject: String,
  time: String,
});

const Booking = mongoose.model("Bookings", BookingSchema);

export default Booking;
