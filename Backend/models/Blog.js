import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    author: {
      type: String,
      required: true,
      trim: true
    },

    dateOfPublish: {
      type: Date,
      required: true
    },

    category: {
      type: String,
      enum: ["react", "javascript", "css"],
      required: true
    },

    image: {
      type: String,
      required: true
    },

    shortDescription: {
      type: String,
      required: true
    },

    blog: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

console.log("Blog model loaded");
const blogs = mongoose.model("Blogs", blogSchema);

export default blogs;