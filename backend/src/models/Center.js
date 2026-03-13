import mongoose from "mongoose";

const centerSchema = new mongoose.Schema({
  centerName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Center", centerSchema);
