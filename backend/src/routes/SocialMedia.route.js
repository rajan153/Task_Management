import { Router } from "express";
import {
  createPost,
  fetchAllPosts,
} from "../controllers/SocialMedia.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";
import { upload } from "../middleware/Multer.middleware.js";

const router = Router();

router
  .route("/create-post")
  .post(verifyJWT, upload.single("postImage"), createPost);
router.route("/posts").get(verifyJWT, fetchAllPosts);

export default router;
