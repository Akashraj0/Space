import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  planet: String,
  vedio: String,
  description: String,
  content: [{ data: String, para: String }],
});

const Space = mongoose.model("planets", dataSchema);

export default Space;
