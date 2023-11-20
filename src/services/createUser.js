"use client";
import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("token") : false
    }`,
  },
};

const params = new URLSearchParams();

const url = process.env.BASE_URL;

const createUser = async (userInfo) => {
  params.append("dui", userInfo.dui);
  params.append("name", userInfo.name);
  params.append("password", userInfo.password);
  params.append("nit", userInfo.nit);
  params.append("rol", userInfo.rol);
  params.append("phone", userInfo.phone);
  params.append("email", userInfo.email);
  params.append("address", userInfo.address);

  try {
    const response = await axios.post(url + `auth/signup`, params, config);
    if (response.status === 201) {
      params.delete("dui");
      params.delete("name");
      params.delete("password");
      params.delete("nit");
      params.delete("rol");
      params.delete("phone");
      params.delete("email");
      params.delete("address");
    }
    return response.status;
  } catch (error) {
    alert("Error al crear el usuario");
    console.error(error);
    params.delete("dui");
    params.delete("name");
    params.delete("password");
    params.delete("nit");
    params.delete("rol");
    params.delete("phone");
    params.delete("email");
    params.delete("address");
  }
};

export default createUser;
