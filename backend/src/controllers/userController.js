const externalApiService = require("../services/externalApiService");

exports.getTopUsers = async (req, res, next) => {
  try {

    const users = await externalApiService.fetchUsers();
    const userPostCounts = [];

    for (const userId in users) {
      const posts = await externalApiService.fetchUserPosts(userId);
      userPostCounts.push({ userId, postCount: posts.length });
    }

    userPostCounts.sort((a, b) => b.postCount - a.postCount);

    const topUsers = userPostCounts.slice(0, 5);

    const formattedUsers = topUsers.map(user => ({
      userId: user.userId,
      postCount: user.postCount,
    }));

    res.json(formattedUsers);
  } catch (error) {
    next(error);
  }
};
