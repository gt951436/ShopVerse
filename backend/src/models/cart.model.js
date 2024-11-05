const { Schema, model, Types } = require("mongoose");

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const cartSchema = new Schema({
  user: {
    // cart belonmgs to whcih user
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: { type: [cartItemSchema], default: [] },
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

cartSchema.pre("save", function (next) {
  this.updatedOn = new Date();
  this.createdOn = new Date();
  next();
});
cartSchema.pre(["update", "findOneAndUpdate", "updateOne"], function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();
  next();
});

const cartModel = model("Cart", cartSchema);
module.exports = cartModel;
