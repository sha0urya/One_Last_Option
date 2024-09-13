import express from "express";
import {
  getCategories,
  addCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/getcategories", getCategories);
router.post("/addcategory", addCategory);


export default router;
