import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (e) {
    console.log(e);
    throw new Error("Error connecting to mongodb: ");
  }
};

export default connect;
