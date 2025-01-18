const mongoose = require("mongoose");
const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
    }
    // totalClicks: {
    //   type: Number,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("URL", urlSchema);
