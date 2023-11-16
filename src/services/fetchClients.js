"use client";
import axios from "axios";

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

const url = process.env.BASE_URL;

const fetchClients = async () => {
  try {
    const response = await axios.get(url + `clients`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchClients;
