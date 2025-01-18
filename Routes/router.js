const express = require("express");
const router = express.Router();
const { generateNewShortUrl } = require("../Controllers/generateUrl");

router.post("/generateNewUrl", generateNewShortUrl);

module.exports = router;