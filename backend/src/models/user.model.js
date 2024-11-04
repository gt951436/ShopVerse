const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  fullname: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: "",
  },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  address: { type: String, default: "" },

  profileProgress: {
    type: Number,
    default: 0,
  },
});
