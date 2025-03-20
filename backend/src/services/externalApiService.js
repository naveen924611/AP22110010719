const axios = require("axios");
require("dotenv").config();

const API_URL = process.env.EXTERNAL_API_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`, 
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from external API");
  }
};

module.exports = {
  fetchUsers: async () => {
    const usersData = await fetchData(`${API_URL}/users`);
    return usersData.users; 
  },

  fetchUserPosts: async (userId) => {
    const userPostsData = await fetchData(`${API_URL}/users/${userId}/posts`);
    return userPostsData.posts; 
  },

  fetchPostComments: async (postId) => {
    const postCommentsData = await fetchData(`${API_URL}/posts/${postId}/comments`);
    return postCommentsData.comments; 
  },
};
