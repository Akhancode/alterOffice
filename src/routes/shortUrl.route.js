const express = require("express");
const router = express.Router();
const shortUrlController = require("../controllers/shortUrl.controller")
// router.get("/", getHabits);
router.post("/", shortUrlController.createShortUrl);
module.exports = router;
