"use client";
import React, { useState, Fragment } from "react";
import createUser from "@/services/createUser";
import { dateFormat } from "@/services/dateFormater";

const FormCreateUser = (setIsOpen) => {
  const newUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    let data = {
      name: form[0].value,
      dui: form[1].value,
      nit: form[2].value,
      rol: form[3].value,
      phone: form[4].value,
      email: form[5].value,
      address: form[6].value,
      password: form[7].value,
    };

    const response = await createUser(data);

    if (response === 201) {
      setIsOpen(true);
      data = {
        name: "",
        dui: "",
        nit: "",
        rol: "",
        phone: "",
        email: "",
        address: "",
        password: "",
      };
    }
  };
  return (
    <form
      onSubmit={newUser}
      className=" grid grid-cols-2 gap-x-20 gap-y-3 rounded-lg items-center w-4/5 px-20 py-8 bg-black/10"
    >
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Nombre
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          DUI
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="xxxxxxxx-x"
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          NIT
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="xxxx-xxxxxx-xxx-x"
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Rol
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="admin,driver,dev..."
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Telefono
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="72xx-xxxx"
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Correo electronico
        </label>
        <input
          className="focus:outline-none ring-offset-2 focus:ring-2 p-2 rounded-md "
          placeholder="JohnDoe@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Dirección
        </label>
        <input
          className="focus:outline-none ring-offset-2  focus:ring-2 p-2 rounded-md"
          placeholder="75 av. norte, #23, San Salvador ..."
        />
      </div>
      <div className="flex flex-col">
        <label className="w-full text-start font-rubik font-bold text-black">
          Contraseña
        </label>
        <input
          className="focus:outline-none ring-offset-2  focus:ring-2 p-2 rounded-md"
          placeholder="Password"
        />
      </div>
      <button className="py-4 mt-2 text-center w-full font-medium font-rubik text-white bg-[#FF8811] rounded-lg hover:bg-black/70 hover:text-[#FF8811] transition duration-500 ease-in-out">
        CREAR NUEVO USUARIO
      </button>
    </form>
  );
};

export default FormCreateUser;
