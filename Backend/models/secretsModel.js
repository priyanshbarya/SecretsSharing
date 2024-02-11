import mongoose from "mongoose";

const secretsModel = mongoose.Schema(
  {
    secret: { type: String },
  },
  { timestamps: true }
);

const Secret = mongoose.model("Secret", secretsModel);
export default Secret;
