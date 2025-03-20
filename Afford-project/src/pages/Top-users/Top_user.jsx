import React from 'react'
import { useState , useEffect } from 'react';

export default function Top_user() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/api/top-users") 
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="">Top 5 Users</h2>
      <ul className="">
        {users.map((user, index) => (
          <li key={user.id} className="">
            <span className="">{index + 1}. {user.name}</span>
            <span className="">{user.postCount} posts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

