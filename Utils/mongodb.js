import mongoose from "mongoose";


export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log(" DB connected");
  } catch (err) {
    console.error(" DB Connection Error");
  }
};
