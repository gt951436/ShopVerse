const categoryModel = require("../models/category.model");

const categoryController = {
  createCategory: async function (req, res) {
    try {
      const categoryData = req.body;
      const newCategory = new categoryModel(categoryData);
      await newCategory.save();

      return res.json({
        success: true,
        data: newCategory,
        message: "Category created!",
      });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
  fetchAllCategories: async function (req, res) {
    try {
      const categories = await categoryModel.find();

      return res.json({
        success: true,
        data: categories,
      });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
  fetchCategoryById: async function (req, res) {
    try {
      const categoryId = req.params.id;
      const fetchedCategories = await categoryModel.findById(categoryId);
      
      if (!fetchedCategories) {
        return res.json({ success: false, message: "category not found!" });
      }
      return res.json({
        success: true,
        data: fetchedCategories,
      });
    } catch (error) {}
  },
};

module.exports = categoryController;
