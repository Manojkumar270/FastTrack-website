import React, { useState } from "react";
import { login } from "./auth";
import "./Login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const login = login(username, password);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const token = await login(username, password);
      console.log("login successfull");
      console.log("Token : ", token);
      alert("login successfull");
      setError("");
      window.location.href = "/";
    } catch (error) {
      console.log("login err", error);
      setError("login failed");
    }
  };

  return (
    <>
      <div class="login-container">
        <h1>Login</h1>
        <form class="login-form" onSubmit={handlesubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>Invalid credentials</p>}
          <button type="submit">Login</button>
          <p>
            Don't have an account <a href="/form">register</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
