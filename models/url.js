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
    },
    totalVisits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("URL", urlSchema);
