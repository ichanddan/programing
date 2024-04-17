import mongoose from "mongoose";

const userSechma = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSechma);
