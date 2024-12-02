const Task = require("../model/task.model.js");
const { createShortUrlService } = require("../services/url.service.js");

exports.createShortUrl = async (req, res, next) => {
  try {
    const { longUrl, customAlias, topic } = req.body;
    const result = await createShortUrlService(longUrl, customAlias, topic);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
