const cartRoutes = require("express").Router();
const cartController = require("../controllers/cart.controller.js");

cartRoutes.get("/:user", cartController.getCartForUser);
cartRoutes.post("/", cartController.addToCart);
cartRoutes.patch("/", cartController.updateCart);
cartRoutes.delete("/", cartController.EmptyCart);

module.exports = cartRoutes;
