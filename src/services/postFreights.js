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

const postFreights = async (freightData) => {
  params.append("units", freightData.units);
  params.append("date", freightData.date);
  params.append("clients", freightData.clients);
  params.append("destination", freightData.destination);
  params.append("tonage", freightData.tonage);
  params.append("type", freightData.type);
  params.append("shipment", freightData.shipment);
  params.append("comments", freightData.comments);

  try {
    const response = await axios.post(url + `freights`, params, config);
    if (response.status === 201) {
      params.delete("units");
      params.delete("date");
      params.delete("clients");
      params.delete("destination");
      params.delete("tonage");
      params.delete("type");
      params.delete("shipment");
      params.delete("comments");
    }
    return response.status;
  } catch (error) {
    alert("Error al crear el flete");
    console.error(error);
  }
};

export default postFreights;
