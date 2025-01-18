const express = require("express");
const router = express.Router();
const {
  generateNewShortUrl,
  getoriginalsite,
  HomePage,
} = require("../Controllers/url");

router.post("/generateNewUrl", generateNewShortUrl);

router.get("/test", HomePage);
router.get("/url/:id", getoriginalsite); 

module.exports = router;
