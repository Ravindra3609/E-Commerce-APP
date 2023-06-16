import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  CategoryController,
  DeleteCategoryController,
  SingleCategoryController,
  createCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
// import categoryModel from "../models/categoryModel.js";

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Get All Category
router.get("/get-category", CategoryController);

//single category
router.get("/single-category/:slug", SingleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  DeleteCategoryController
);

export default router;
