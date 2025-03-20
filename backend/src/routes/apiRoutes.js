const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const postsController = require("../controllers/postsController");
const feedController = require("../controllers/feedController");

router.get("/top-users", userController.getTopUsers);
router.get("/trending-posts", postsController.getTrendingPosts);
router.get("/feed", feedController.getFeed);

module.exports = router;
