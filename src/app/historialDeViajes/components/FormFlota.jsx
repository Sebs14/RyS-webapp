import { dateFormat } from "@/services/dateFormater";
import getAllUsers from "@/services/getAllUsers";
import React, { useEffect, useState } from "react";
import moment from "moment";
import postEmpFreight from "@/services/postEmpFreight";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormFlota = ({ idFreight }) => {
  const [value, setValue] = useState("selecciona un empleado");

  const notify = () =>
    toast.success("Empleado agregado con exito!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
    });

  const addEmployeeToFreight = async (e) => {
    e.preventDefault();
    const form = e.target;
    let data = {
      idFreight: idFreight,
      employee: form[1].value,
      position: form[2].value,
      pay: form[3].value,
      viatic: form[4].value,
      extraPay: form[5].value,
      date: moment(form[6].value).utc().format("YYYY/MM/DD"),
    };
    postEmpFreight(data).then((res) => {
      if (res === 201) {
        notify();
        form.reset();
        let data = {
          idFreight: idFreight,
          employee: "",
          position: "",
          pay: "",
          viatic: "",
          extraPay: "",
          date: "",
        };
      }
    });
  };

  useEffect(() => {
    getAllUsers().then((res) => {
      res.map((item) => {
        const option = document.createElement("option");
        option.text = item.name;
        option.value = item.dui;
        document.getElementById("employee").appendChild(option);
      });
    });
  }, []);
  return (
    <form
      onSubmit={addEmployeeToFreight}
      className=" grid grid-cols-2 gap-x-20 gap-y-3 rounded-lg items-center w-full px-20 py-8 bg-black/10"
    >
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Flete
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          readOnly={true}
          value={idFreight}
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Empleado/DUI
        </label>
        <select
          id="employee"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="Jhon Doe..."
        ></select>
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Puesto
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="Ayudante..."
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Pago
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="15..."
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Viático
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="3..."
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Pago extra
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="2..."
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Fecha
        </label>
        <input
          type="date"
          className="focus:outline-none ring-offset-2  focus:ring-2 p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="py-4 mt-2 text-center w-full font-medium font-rubik text-white bg-[#FF8811] rounded-lg hover:bg-black/70 hover:text-[#FF8811] transition duration-500 ease-in-out"
      >
        Agregar empleado
      </button>
      <ToastContainer />
    </form>
  );
};

export default FormFlota;
