const productModel = require("../models/products.model.js");
const productController = {
  createProduct: async function (req, res) {
    try {
      const productData = req.body;
      const newProduct = new productModel(productData);
      await newProduct.save();

      return res.json({
        success: true,
        data: newProduct,
        message: "Product created!",
      });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
  fetchAllProducts: async function (req, res) {
    try {
      const products = await productModel.find();

      return res.json({ success: true, data: products });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
  fetchProductByCategory: async function (req, res) {
    try {
      const categoryId = req.params.id;
      const products = await productModel.find({ category: categoryId });
      return res.json({ success: true, data: products });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
};

module.exports = productController;
