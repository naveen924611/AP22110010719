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
        <div className='out-post'>
            <div>

            <h2>Trending Posts</h2>

            {posts.length === 0 ? (
                <p>No trending posts available.</p>
            ) : (
                <div className='t-posts'>
                    {posts.map((post) => (
                        <div key={post.id} className="posts">
                            <div className="img">
                                <img src="data:image/jpeg;base64,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" alt={post.title} />
                            </div>
                            <div>
                                <strong>{post.title}</strong> - {post.comments} comments
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
}
