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

const getFreights = async () => {
  try {
    const response = await axios.get(url + `freights`, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default getFreights;
