import Category from "../models/category.model.js";
import { errorHandler } from "../utils/error.js";

// Get all categories
export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

// Add a new category (if you need it)
// Add Category Handler
export const addCategory = async (req, res, next) => {
  const { label, value } = req.body;

  try {
    const existingCategory = await Category.findOne({ value });
    if (existingCategory) {
      return next(errorHandler(400, "Category already exists"));
    }

    const newCategory = new Category({ label, value });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

