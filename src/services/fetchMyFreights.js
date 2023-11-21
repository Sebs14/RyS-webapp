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

const getMyFreights = async (page, limit) => {
  try {
    const response = await axios.get(
      url + `empfreight/me/pageable?page=${page}&limit=${limit}`,
      config
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export default getMyFreights;
