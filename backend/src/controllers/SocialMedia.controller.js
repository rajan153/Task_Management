import mongoose from "mongoose";
import { Post } from "../models/SocialMedia.model.js";
import { User } from "../models/User.model.js";
import { uploadOnCloudinary } from "../config/Cloudinary.js";

export const createPost = async (req, res) => {
  try {
    const { caption, publicPost } = req.body;
    const { _id } = req.user;
    const imageLocalPath = req.file.path;

    if (!imageLocalPath) {
      return res.status(401).json({
        message: "Image is required for post",
      });
    }

    if (!imageLocalPath && !caption) {
      return res.status(401).json({
        message: "Field is required",
      });
    }

    const imagePost = await uploadOnCloudinary(imageLocalPath);

    if (!imagePost) {
      return res.status(400).json({
        message: "image is required",
      });
    }

    const newPost = await Post.create({
      caption,
      createdBy: _id,
      publicPost,
      image: imagePost?.url || "",
    });

    await User.findByIdAndUpdate(_id, {
      $push: {
        posts: newPost._id,
      },
    });

    return res.status(200).json({
      message: "Post is create",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while creating post",
    });
  }
};

export const fetchAllPosts = async (req, res) => {
  try {
    const postData = await Post.find().populate("createdBy", "name").exec();

    return res.status(200).json({
      message: "Post Fetched",
      post: postData,
    });
  } catch (error) {
    return req.status(500).json({
      message: "Something went wrong while fetching posts",
    });
  }
};
