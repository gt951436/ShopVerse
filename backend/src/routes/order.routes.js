const orderRoutes = require("express").Router();
const orderController = require("../controllers/order.controller.js");

orderRoutes.post("/", orderController.createOrder);
orderRoutes.put("/updateStatus", orderController.updateOrderStatus);
orderRoutes.get("/:userId", orderController.fetchOrderForUser);

module.exports = orderRoutes;
