"use client";
import React, { useState } from "react";
import moment from "moment";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogAdd from "./dialog";
import deleteFreights from "@/services/deleteFreights";
import { toast, ToastContainer } from "react-toastify";
const Row = ({
  idFreight,
  client,
  destination,
  plate,
  date,
  setIsDeleted,
  isDeleted,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const addFloat = () => {
    setIsOpen(true);
  };

  const deleteFreight = async () => {
    const status = await deleteFreights(idFreight);
    if (status === 200) {
      notify();
      setIsDeleted(!isDeleted);
    }
  };
  const notify = () => {
    toast.success("Flete eliminado con exito!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[10%] max-w-[10%]">
          <p className="text-gray-900 whitespace-no-wrap">{idFreight}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[30%] max-w-[30%]">
          <p className="text-gray-900 whitespace-no-wrap">{client}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
          <p className="text-gray-900 whitespace-no-wrap">{destination}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[10%] max-w-[10%]">
          <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
            {plate}
          </p>
        </td>
        <td className="px-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
          <p className="text-gray-900 whitespace-no-wrap">
            {moment(date).utc().format("YYYY-MM-DD")}
          </p>
        </td>
        <td className=" border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
          <button
            onClick={addFloat}
            className="text-indigo-50/70 hover:text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold  rounded p-1"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 text-lg">
              <FontAwesomeIcon icon={faPencil} />
            </span>
          </button>
        </td>
        <td className="  border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
          <button
            onClick={deleteFreight}
            className="text-indigo-50/70 hover:text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold  rounded p-1"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 text-lg">
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </button>
        </td>
      </tr>
      <DialogAdd isOpen={isOpen} setIsOpen={setIsOpen} idFreight={idFreight} />
      <ToastContainer />
    </>
  );
};

export default Row;
