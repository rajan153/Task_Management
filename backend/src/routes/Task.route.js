import Router from "express";
import {
  createTask,
  deleteTask,
  updateStatusOfTask,
} from "../controllers/Task.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

router.route("/create-task").post(verifyJWT, createTask);
router.route("/delete-task").delete(verifyJWT, deleteTask);
router.route("/update-task").patch(verifyJWT, updateStatusOfTask);

export default router;
