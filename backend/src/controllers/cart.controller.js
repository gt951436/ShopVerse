const cartModel = require("../models/cart.model.js");

const cartController = {
  // get the cart details
  getCartForUser: async function (req, res) {
    try {
      const user = req.params.user;
      const existingCart = await cartModel.findOne({ user: user });

      if (!existingCart) {
        return res.json({
          success: true,
          data: [],
        });
      }
      return res.json({
        success: true,
        data: existingCart.items,
      });
    } catch (err) {
      return res.json({
        success: false,
        message: err,
      });
    }
  },
  // add the items to cart
  addToCart: async function (req, res) {
    try {
      const { product, user, quantity } = req.body;
      const existingCart = await cartModel.findOne({ user: user });

      if (!existingCart) {
        const newCart = new cartModel({ user: user });
        newCart.items.push({
          product: product,
          quantity: quantity,
        });
        await newCart.save();
        return res.json({
          success: true,
          data: newCart,
          message: "Product added to cart!",
        });
      }
      const updatedCart = await cartModel.findOneAndUpdate(
        { user: user },
        { $push: { items: { product: product, quantity: quantity } } },
        { new: true }
      );
      return res.json({
        success: true,
        data: updatedCart,
        message: "item added to cart!",
      });
    } catch (err) {
      return res.json({
        success: false,
        message: err,
      });
    }
  },
  // update the cart
  updateCart: async function (req, res) {
    try {
      const { product, user, quantity } = req.body;

      if (quantity < 0) {
        return res.json({
          success: false,
          message: "Quantity cannot be negative.",
        });
      }

      const existingCart = await cartModel.findOne({ user: user });

      if (!existingCart) {
        return res.json({
          success: false,
          message: "Cart does not exist for this user.",
        });
      }

      // If quantity is 0, remove the item from the cart
      if (quantity === 0) {
        const updatedCart = await cartModel.findOneAndUpdate(
          { user: user },
          { $pull: { items: { product: product } } },
          { new: true }
        );

        return res.json({
          success: true,
          data: updatedCart,
          message: "Item removed from cart.",
        });
      } else {
        // Update the item's quantity
        const updatedCart = await cartModel.findOneAndUpdate(
          { user: user, "items.product": product },
          { $set: { "items.$.quantity": quantity } },
          { new: true }
        );

        if (!updatedCart) {
          return res.json({
            success: false,
            message: "Item not found in cart.",
          });
        }

        return res.json({
          success: true,
          data: updatedCart,
          message: "Cart updated successfully!",
        });
      }
    } catch (err) {
      return res.json({
        success: false,
        message: err.message || "An error occurred while updating the cart.",
      });
    }
  },
  // empty the cart
  EmptyCart: async function (req, res) {
    try {
      const { product, user } = req.body;

      const updatedCart = await cartModel.findOneAndUpdate(
        { user: user },
        { $pull: { items: { product: product } } },
        { new: true }
      );
      return res.json({
        success: true,
        data: updatedCart,
        message: "item removed from cart!",
      });
    } catch (err) {
      return res.json({
        success: false,
        message: err,
      });
    }
  },
};

module.exports = cartController;
