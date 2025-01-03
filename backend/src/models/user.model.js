const { Schema, model } = require("mongoose");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
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
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    profileProgress: {
      type: Number,
      default: 0, // 0 -->account created, 1 --> address and details entered
    },
    updatedOn: {
      type: Date,
    },
    createdOn: {
      type: Date,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  this.id = uuid.v1();
  this.updatedOn = new Date();
  this.createdOn = new Date();

  // hashing the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt); // hash -->hashed password
  this.password = hash;

  next();
});
userSchema.pre(["update", "findOneAndUpdate", "updateOne"], function (next) {
  // _id -->mongodb object id
  const update = this.getUpdate();
  delete update._id;
  delete update.id;

  this.updatedOn = new Date();
  next();
});

const UserModel = model("User", userSchema);
module.exports = UserModel;
