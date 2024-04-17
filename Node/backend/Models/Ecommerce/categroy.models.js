import mongoose from 'mongoose';
const categroySchema = new mongoose.Schema(
  {
    categroy: {
      type: String,
      requrid: true,
    },
  },
  { timestamps: true }
);

export const Categroy = mongoose.model('Categroy', categroySchema);
