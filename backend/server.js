const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS to allow frontend access

const topUsers = [
  { "id": 1, "name": "Naveen", "postCount": 120 },
  { "id": 2, "name": "Babu", "postCount": 110 },
  { "id": 3, "name": "ramu", "postCount": 105 },
  { "id": 4, "name": "vaishi", "postCount": 98 },
  { "id": 5, "name": "nithesha", "postCount": 95 }
];

const posts = [
  { id: 1, title: "Post A", comments: 50 },
  { id: 2, title: "Post B", comments: 75 },
  { id: 3, title: "Post C", comments: 75 },
  { id: 4, title: "Post D", comments: 40 },
];

// Get trending posts (posts with the highest comment count)
app.get("/api/trending-posts", (req, res) => {
  const maxComments = Math.max(...posts.map(post => post.comments));
  const trendingPosts = posts.filter(post => post.comments === maxComments);
  res.json(trendingPosts);
});

app.get("/api/top-users", (req, res) => {
  res.json(topUsers);
});

const PORT =  process.env.PORT ||5100;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
