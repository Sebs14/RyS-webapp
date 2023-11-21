const axios = require("axios");

const config = {
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined" ? localStorage.getItem("token") : false
    }`,
  },
};

const params = new URLSearchParams();

const url = process.env.BASE_URL;

const postEmpFreight = async (data) => {
  params.append("freight", data.idFreight);
  params.append("user", data.employee);
  params.append("position", data.position);
  params.append("payment", data.pay);
  params.append("viatic", data.viatic);
  params.append("extraPayment", data.extraPay);
  params.append("freightdate", data.date);

  try {
    const response = await axios.post(url + `empfreight`, params, config);
    params.delete("freight");
    params.delete("user");
    params.delete("position");
    params.delete("payment");
    params.delete("viatic");
    params.delete("extraPayment");
    params.delete("freightdate");

    return response.status;
  } catch (error) {
    params.delete("freight");
    params.delete("user");
    params.delete("position");
    params.delete("payment");
    params.delete("viatic");
    params.delete("extraPayment");
    params.delete("freightdate");
    console.error("Error posting empfreight:", error);
    throw error;
  }
};

export default postEmpFreight;
