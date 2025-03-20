const externalApiService = require("../services/externalApiService");

exports.getTrendingPosts = async (req, res, next) => {
  try {
    const posts = await externalApiService.fetchPosts();
    const postCommentCounts = [];

    for (const post of posts) {
      const comments = await externalApiService.fetchPostComments(post.id);
      postCommentCounts.push({ postId: post.id, commentCount: comments.length });
    }

    const maxCommentCount = Math.max(...postCommentCounts.map(post => post.commentCount));

    const trendingPosts = postCommentCounts.filter(post => post.commentCount === maxCommentCount);

    res.json(trendingPosts);
  } catch (error) {
    next(error);
  }
};
