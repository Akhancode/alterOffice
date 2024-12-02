const shortid = require("shortid");
const URL = require("../model/urls.model");

const createShortUrlService = async (longUrl, customAlias, topic) => {
  if (!longUrl || !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(longUrl)) {
    throw new Error("Invalid URL format");
  }

  const shortUrl = customAlias || shortid.generate();

  const existingUrl = await URL.findOne({ shortUrl });
  if (existingUrl) {
    throw new Error("Alias already taken, please choose another one.");
  }

  const newUrl = new URL({
    longUrl,
    shortUrl,
    topic,
    createdAt: new Date(),
  });

  await newUrl.save();

  return {
    shortUrl: `${process.env.BASE_URL}/${shortUrl}`,
    createdAt: newUrl.createdAt,
  };
};

module.exports = { createShortUrlService };
