import express from "express";
import dotenv from  "dotenv";
import UserRoute from "./Routes/user.js";
import { ConnectMongoDb } from "./Utils/mongodb.js";
import cors from 'cors'
dotenv.config();

ConnectMongoDb();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", UserRoute);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});