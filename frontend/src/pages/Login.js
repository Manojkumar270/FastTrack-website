import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <label>Username</label>
          <input type="text" placeholder="username" name="username" />
          <label>Password</label>
          <input type="text" placeholder="password" name="password" />
        </form>
      </div>
    </>
  );
};

export default Login;
