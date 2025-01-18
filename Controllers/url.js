const { nanoid } = require("nanoid-cjs");
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
    return res.render("Home", {
      id: shortId,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Some error while generating short URL",
    });
  }
}

async function getoriginalsite(req, res) {
  const shortId = req.params.id;
  if (!shortId) {
    return res.status(400).json({
      success: false,
      message: "Invalid Short Id",
    });
  }
  const url = await URL.findOne({ shortId });
  if (!url) {
    return res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
  url.totalVisits++;
  await url.save();
  return res.status(301).redirect(url.originalUrl);
}
const HomePage = (req, res) => {
  console.log("Hello");
  return res.render("Home");
};
module.exports = { generateNewShortUrl, getoriginalsite, HomePage };
