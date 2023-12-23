import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      fetch(`https://dummyjson.com/users/${storedUser.id}`)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error("Authentication Problem");
          }
        })
        .then((data) => {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((error) => {
          setError("Authentication Problem");
        });
    }
  }, []);

  return (
    <div
      style={{
        background: "white",
        padding: "200px",
        width: "200px",
        border: "2px solid",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      {error && <p>{error}</p>}
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
