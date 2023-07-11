import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

const params = new URLSearchParams();

const login = (email, password) => {
  params.append("identifier", email);
  params.append("password", password);

  return axios.post("auth/signin", params).then((response) => {
    var cadena = JSON.stringify(response.data.token).replace(/['"]+/g, "");

    localStorage.setItem("Correo", email);
    localStorage.setItem("token", cadena);
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return localStorage.getItem("token");
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;
