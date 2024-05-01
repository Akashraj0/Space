import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5000",
  })
);

app.use(express.json({ limit: "30kb" }));

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log("DB is Connected");
});

app.use("/", router);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`The server is running in ${Port}...`);
});
