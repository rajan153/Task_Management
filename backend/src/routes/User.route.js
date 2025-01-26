import Router from "express";
import {
  fetchTask,
  loginUser,
  registerUser,
} from "../controllers/User.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/task").get(verifyJWT, fetchTask);

export default router;
