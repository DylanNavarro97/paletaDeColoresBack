import mongoose, { Schema, mongo } from "mongoose";

const colorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
  },
  color: {
    type: String,
    required: true,
    unique: true,
  },
});

const Color = mongoose.model("color", colorSchema);
export default Color;
