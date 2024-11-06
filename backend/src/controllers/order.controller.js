const orderModel = require("../models/order.model.js");

const orderController = {
  createOrder: async function (req, res) {
    try {
      const { user, items } = req.body;
      const newOrder = new orderModel({ user: user, items: items });
      await newOrder.save();

      return res.json({
        success: true,
        data: newOrder,
        message: "Order created!",
      });
    } catch (err) {
      return res.json({
        success: false,
        message: err,
      });
    }
  },
  fetchOrderForUser: async function (req, res) {
    try {
      const userId = req.params.userId;
      const foundOrder = await orderModel.find({ "user.id": userId });
      return res.json({ success: true, data: foundOrder });
    } catch (err) {
      return res.json({
        success: false,
        message: err,
      });
    }
  },
  updateOrderStatus: async function (req, res) {
    try {
      const { orderId, status } = req.body;
      const updatedOrder = await orderModel.findOneAndUpdate(
        { _id: orderId },
        { status: status },
        { new: true }
      );
      return res.json({
        success: true,
        data: updatedOrder,
      });
    } catch (err) {
      return res.json({
        success: false,
        message: err,
      });
    }
  },
};
module.exports = orderController;
