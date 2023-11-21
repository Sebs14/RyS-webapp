"use client";
import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("token") : false
    }`,
  },
};

const url = process.env.BASE_URL;

const deleteFreights = async (idFreight) => {
  try {
    const response = await axios.delete(url + `freights/${idFreight}`, config);
    return response.status;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteFreights;
