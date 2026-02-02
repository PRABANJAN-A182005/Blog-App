import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q?.trim();

  try {
    let blogs;

    if (query) {
      blogs = await Blog.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { shortDescription: { $regex: query, $options: "i" } },
          { blog: { $regex: query, $options: "i" } },
          { author: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } }
        ]
      });
    } else {
      blogs = await Blog.find();
    }
    return res.json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
