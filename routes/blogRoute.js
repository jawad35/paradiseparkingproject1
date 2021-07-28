const express = require("express");
const router = express.Router();
const Blog = require("../Models/blog");

router.post("/createpost", async (req, res) => {
  const { file, title, description } = req.body;
  try {
    // if user exist
    const newObject = new Blog({
      image: file,
      title,
      desc: description,
    });
    await newObject.save();
    res.json({ ok: "ok" });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
