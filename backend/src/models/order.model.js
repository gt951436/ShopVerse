const { Schema, model, Types } = require("mongoose");

const orderItemSchema = new Schema({
  product: { type: Map, required: true },
  quantity: { type: Number, default: 1 },
});

const orderSchema = new Schema({
  user: {
    // order belongs to which user
    type: Map,
    required: true,
  },
  items: { type: [orderItemSchema], default: [], required: true },
  status: { type: String, default: "order placed" },
  updatedOn: { type: Date },
  createdOn: { type: Date },
});

orderSchema.pre("save", function (next) {
  this.updatedOn = new Date();
  this.createdOn = new Date();
  next();
});
orderSchema.pre(["update", "findOneAndUpdate", "updateOne"], function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();
  next();
});

const orderModel = model("Order", orderSchema);
module.exports = orderModel;
