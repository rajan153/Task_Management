import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    caption: {
      type: String,
    },
    publicPost: {
      type: Boolean,
      default: true,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", socialMediaSchema);
