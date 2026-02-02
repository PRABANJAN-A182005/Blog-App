import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const blog = await Blog.findById(id);
    if(!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
