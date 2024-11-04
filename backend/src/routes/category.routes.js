const categoryRoutes = require("express").Router();
const categoryController = require("./../controllers/category.controller.js");

categoryRoutes.post("/", categoryController.createCategory);
categoryRoutes.get("/", categoryController.fetchAllCategories);
categoryRoutes.get("/:id", categoryController.fetchCategoryById); // id can be dynamic value(:id)

module.exports = categoryRoutes;
