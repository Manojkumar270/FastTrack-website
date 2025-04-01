import React, { useState } from "react";
import { register } from "./auth";
import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const validation = () => {
    const newError = {};
    if (!form.username) newError.username = "invalid username";
    if (!form.email) newError.email = "invalid email";
    else {
      if (!/\S+@\S+\.\S+/.test(form.email)) newError.email = "invalid email";

      if (!form.password) newError.password = "invaild password";
      else {
        if (form.password.length < 6)
          newError.password = "password must be in less than 6 characters";
        if (!/[A-Z]/.test(form.password))
          newError.password = "must contain one Uppercase";
        if (!/[a-z]/.test(form.password))
          newError.password = "must contain one Lowercase";
        if (!/[!@#$%&*?]/.test(form.password)) {
          newError.password = "must contain one special character";
        }
      }
    }
    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validation();

    if (Object.keys(validationError).length === 0) {
      console.log("form valid", form);
      window.href = "/";
      setForm({
        username: " ",
        email: " ",
        password: " ",
      });
      setError({});
      console.log(Object.keys(validationError));

      try {
        await register(form.username, form.password, form.email);
        alert("Registration successful");
        console.log("Registration successful");
        window.location.href = "/login";
      } catch (error) {
        console.log("Registration failed");
        alert("Registration failed");
      }
    } else {
      setError(validation());
      console.log(Object.keys(validationError));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <div class="register-container">
        <h1>Register</h1>
        <br />
        <form class="register-form" onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {error.username && <p class="error">{error.username}</p>}

          <label>Email</label>

          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {error.email && <p class="error">{error.email}</p>}

          <label>Password</label>

          <input
            type="text"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {error.password && <p class="error">{error.password}</p>}

          <button type="submit">Submit</button>
          <p>
            Don't have an account <a href="/login">login</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
