const externalApiService = require("../services/externalApiService");

exports.getFeed = async (req, res, next) => {
  try {
    // Fetch all posts from the external API
    const posts = await externalApiService.fetchPosts();
    
    // Sort posts by ID (assuming the highest ID is the latest post)
    posts.sort((a, b) => b.id - a.id);

    res.json(posts);
  } catch (error) {
    next(error);
  }
};
