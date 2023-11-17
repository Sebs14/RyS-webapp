"use client";

import axios from "axios";

// axios.defaults.baseURL = "https://rys.up.railway.app/";
axios.defaults.baseURL = process.env.BASE_URL;

const params = new URLSearchParams();




const login = (email, password) => {
  params.append("identifier", email);
  params.append("password", password);

  return axios.post("auth/signin", params).then((response) => {
    var cadena = JSON.stringify(response.data.token).replace(/['"]+/g, "");
    localStorage.setItem("Correo", email);
    localStorage.setItem("token", cadena);
    if (response.status === 201) {
      params.delete("identifier");
      params.delete("password");
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("Correo");
};

const getCurrentUser = () => {
  return typeof window !== "undefined" ? localStorage.getItem("token") : false;
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;
