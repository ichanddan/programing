import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complite: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      red: "User",
    },
  },
  { timestamps: true }
);

export const SudTudo = mongoose.model("SubTudo", subTodoSchema);
