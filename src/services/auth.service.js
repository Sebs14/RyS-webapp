"use client";

import axios from "axios";

// axios.defaults.baseURL = "https://rys.up.railway.app/";
axios.defaults.baseURL = process.env.BASE_URL;

const params = new URLSearchParams();

const deleteAll = () => {
  params.delete("identifier");
  params.delete("password");
};

const getCurrentUsers = async (config) => {
  try {
    const response = await axios.get("user/me", config);
    return response.data;
  } catch (error) {
    console.error("Error retrieving current user:", error);
    return error.request.status;
  }
};

const login = (email, password) => {
  params.append("identifier", email);
  params.append("password", password);

  return axios.post("auth/signin", params).then((response) => {
    var cadena = JSON.stringify(response.data.token).replace(/['"]+/g, "");
    localStorage.setItem("Correo", email);
    localStorage.setItem("token", cadena);

    const config = {
      headers: {
        Authorization: `Bearer ${cadena}`,
      },
    };

    var user = getCurrentUsers(config)
    deleteAll();
    return { response, user };
  });
};



const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("Correo");
  deleteAll();
};

const getCurrentUser = () => {
  return typeof window !== "undefined" ? localStorage.getItem("token") : false;
};

const authService = {
  deleteAll,
  login,
  logout,
  getCurrentUser,
};

export default authService;
