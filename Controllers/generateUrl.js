const { nanoid } = require('nanoid-cjs');
const URL = require("../models/url");

async function generateNewShortUrl(req, res) {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(401).json({
        success: false,
        message: "Need a URL to shorten , please provide an URL",
      });
    }
    const shortId = nanoid(8);

    await URL.create({
      shortId,
      originalUrl,
    });

    return res.status(200).json({
      success: true,
      message: "SHORT URL GENERATED",
      data: shortId,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Some error while generating short URL",
    });
  }
}
module.exports = { generateNewShortUrl };
