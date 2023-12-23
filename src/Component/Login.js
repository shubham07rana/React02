import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/profile";
      })
      .catch((error) => {
        // Show error message
      });
  };

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
      <label>username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
