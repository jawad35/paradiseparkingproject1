const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
    title: {
      type: String,
    },
    desc: {
      type: String,
      unique: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Blog", blogSchema);
