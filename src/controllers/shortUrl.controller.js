const Task = require("../model/task.model.js");
// Create a new task
exports.createShortUrl = async (req, res, next) => {
  try {
    res.status(201).json("createShortUrl");
  } catch (error) {
    next(error);
  }
};
