const externalApiService = require("../services/externalApiService");

exports.getData = async (req, res, next) => {
  try {
    res.json({ message: "This endpoint is a placeholder." });
  } catch (error) {
    next(error);
  }
};
