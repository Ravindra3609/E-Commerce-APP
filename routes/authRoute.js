import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  orderStatusController,
  registerController,
  updateProfileController,
} from "../controllers/authController.js";
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";

import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//reg || method POST
router.post("/register", registerController);

//LOGIN || Post
router.post("/login", loginController);

//Forgot Password
router.post("/forgot-password", forgotPasswordController);

//Test routes
router.get("/test", requireSignIn, isAdmin, testController);

//Protected User - Route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Protected Admin - Route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// orders status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
