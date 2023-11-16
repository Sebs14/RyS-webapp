"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import postFreights from "@/services/postFreights";
import fetchUnits from "@/services/fetchUnits";
import fetchClients from "@/services/fetchClients";
import { dateFormat } from "@/services/dateFormater";
import Link from "next/link";

const NewConductor = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("selecciona una unidad");
  const [valueClient, setValueClient] = useState("selecciona una unidad");

  function redirectUser() {
    router.push("/historialDeViajes");
  }

  function submitNewConductor() {
    setIsOpen(true);
  }

  const newFreight = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      units: form[0].value,
      date: dateFormat(form[1].value, "yyyy/MM/dd"),
      clients: form[2].value,
      destination: form[3].value,
      tonage: form[4].value,
      type: form[5].value,
      shipment: form[6].value,
      comments: form[7].value,
    };

    const response = await postFreights(data).then(() => {
      submitNewConductor();
      console.log(data);
    });
  };

  function closeModal() {
    setIsOpen(false);
    setTimeout(redirectUser, 500);
  }

  useEffect(() => {
    fetchUnits().then((data) => {
      data.map((unit) => {
        const option = document.createElement("option");
        option.value = unit.plate;
        option.text = unit.plate;
        if (option.value === "undefined")
          option.value = "selecciona una unidad";
        document.getElementById("unit").appendChild(option);
      });
    });
    fetchClients().then((data) => {
      data.map((client) => {
        const option = document.createElement("option");
        option.value = client.idClient;
        option.text = client.name;
        if (option.value === "undefined")
          option.value = "selecciona una unidad";
        document.getElementById("client").appendChild(option);
      });
    });
  }, []);

  return (
    <article className="flex min-h-screen items-center justify-between bg-[#FFF8F0]">
      <div className="flex flex-col items-start pl-60 justify-center w-[50%] bg-[#9DD9D2] min-h-screen">
        <form
          onSubmit={newFreight}
          className="flex flex-col items-center justify-center w-[50%] pt-8"
        >
          <p className="font-bold text-[#3E4856] font-rubik text-1x1 text-left pb-8">
            Ingresa los datos del nuevo viaje
          </p>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Unidad
          </label>
          <select
            id="unit"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className=" rounded-lg py-2 px-2 w-full"
          ></select>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Fecha
          </label>
          <input type={"date"} className=" rounded-lg py-2 px-2 w-full"></input>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Cliente
          </label>
          <select
            id="client"
            value={valueClient}
            onChange={(e) => setValueClient(e.target.value)}
            className=" rounded-lg py-2 px-2 w-full"
          ></select>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Destino
          </label>
          <input
            type={"text"}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="San Juan Opico"
          ></input>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Tonelaje
          </label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <label className=" font-bold w-full text-start pt-4 pb-1">Tipo</label>
          <input
            type={"text"}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="cargo, traslado, camión"
          ></input>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Número de embarque
          </label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <label className=" font-bold w-full text-start pt-4 pb-1">
            Comentarios
          </label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <button
            type="submit"
            className="mt-16 py-4 text-center w-[120%] mb-5 font-medium font-rubik text-white bg-[#FF8811] rounded-lg hover:bg-[#FF8811]/70 hover:text-black transition duration-500 ease-in-out"
          >
            Registrar viaje
          </button>
        </form>
      </div>
      <div className="relative flex flex-col min-h-screen items-center justify-center w-[50%] pb-16">
        <img width={700} src={"/driver.png"} alt="driverHand" />
        <div className="absolute rounded-lg top-0 right-0 w-40 h-16 overflow-hidden">
          <Link href="/historialDeViajes">
            <div className="flex items-center justify-center h-full w-full text-black/50 hover:text-black  transition duration-500 ease-in-out font-bold font-rubik">
              <p>CANCELAR</p>
            </div>
          </Link>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative rounded-lg z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="flex justify-center items-center fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex justify-center items-center flex-col w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" mt-4 text-lg font-medium leading-6 text-gray-700 font-rubik"
                  >
                    Viaje agregado con éxito
                  </Dialog.Title>
                  <span className="px-4 py-4 inline-flex items-center justify-center text-lg">
                    <FontAwesomeIcon
                      className="text-green-500 h-12 w-12"
                      icon={faCircleCheck}
                    />
                  </span>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Aceptar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </article>
  );
};

export default NewConductor;
