import React, { useState, useEffect } from "react";
import IncrementCountButton from "./IncrementCountButton.jsx";

const UserList = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://api.example.com/users", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(err => {
        console.error(err);
      })

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <IncrementCountButton />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
