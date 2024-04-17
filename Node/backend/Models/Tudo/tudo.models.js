import mongoose from "mongoose";

const tudoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    compelete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTudo",
      },
    ],
  },
  { timestamps: true }
);

export const Tudo = mongoose.model("Tudo", tudoSchema);
