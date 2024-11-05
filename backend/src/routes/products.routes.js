const productRoutes = require("express").Router();
const productController = require("../controllers/product.controller.js");

productRoutes.post("/", productController.createProduct);
productRoutes.get("/", productController.fetchAllProducts);
productRoutes.get("/category/:id", productController.fetchProductByCategory);

module.exports = productRoutes;
