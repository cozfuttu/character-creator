import { IUser } from "@/types";
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    points: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model("User", userSchema);
