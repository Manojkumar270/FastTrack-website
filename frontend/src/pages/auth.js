import axios from "axios";
const API_URL = "http://localhost:5001";

export const register = async (username, password, email) => {
  try {
    await axios.post(`${API_URL}/register`, { username, password, email });
  } catch (error) {
    console.log(
      "error during registration",
      error.response ? error.response.data : error.message
    );
    throw new Error("registration failed");
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    const token =await response.data.token;
    return token;
  } catch (error) {
    console.log(
      "Error during login",
      error.response ? error.response.data : error.message
    );
    throw new Error("login failed");
  }
};

export const gettoken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
