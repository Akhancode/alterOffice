const Url = require("../model/urls.model");
const Analytics = require("../model/analytics.model");
const geoip = require("geoip-lite");
const requestIp = require("request-ip");

const redirectShortUrlService = async (alias, req) => {
  const urlRecord = await Url.findOne({ shortUrl: alias });

  if (!urlRecord) {
    throw new Error("Short URL not found");
  }

  const userIp = requestIp.getClientIp(req);
  const geo = geoip.lookup(userIp);

  const analyticsData = new Analytics({
    shortUrl: alias,
    userAgent: req.headers["user-agent"],
    ipAddress: userIp,
    geoLocation: geo
      ? {
          country: geo.country,
          region: geo.region,
          city: geo.city,
        }
      : {},
  });

  // Save the analytics data to the database
  await analyticsData.save();

  // Return the long URL for the redirection
  return urlRecord.longUrl;
};

module.exports = { redirectShortUrlService };
