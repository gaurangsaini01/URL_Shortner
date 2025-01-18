const express = require("express");
const router = express.Router();
const { generateNewShortUrl, getoriginalsite } = require("../Controllers/url");

router.post("/generateNewUrl", generateNewShortUrl);
router.get("/:id", getoriginalsite);

module.exports = router;
