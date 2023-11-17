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

const fetchUnits = async () => {
  try {
    const response = await axios.get(url + "units", config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchUnits;
