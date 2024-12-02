const {
  getUrlAnalytics,
  getTopicAnalytics,
  getOverallAnalytics,
} = require("../services/analytics.service");

exports.getAnalytics = async (req, res) => {
  const { alias } = req.params;

  try {
    const analytics = await getUrlAnalytics(alias);
    return res.json(analytics);
  } catch (error) {
    next(error);
  }
};
exports.getOverallAnalyticsController = async (req, res, next) => {
  try {
    const userId = req?.user?.id;
    const analytics = await getOverallAnalytics(userId);
    res.status(200).json(analytics);
  } catch (error) {
    next(error);
  }
};

exports.getTopicAnalyticsController = async (req, res, next) => {
  try {
    const { topic } = req.params;
    console.log(topic);
    const analytics = await getTopicAnalytics(topic);
    res.status(200).json(analytics);
  } catch (error) {
    next(error);
  }
};
