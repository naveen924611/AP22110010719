import React, { useEffect, useState } from 'react';

export default function TrendingPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5100/api/trending-posts") 
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching trending posts:", error));
    }, []);

    return (
      <div>
        <h2>Trending Posts</h2>
        <hr />
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong> - {post.comments} comments
            </li>
          ))}
        </ul>
        
      </div>
    );
}
