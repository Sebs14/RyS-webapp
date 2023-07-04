"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

const NewRoute = () => {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

   function redirectUser() {
     router.push("http://localhost:3000/historialConductor/");
     closeModal();
   }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setTimeout(redirectUser, 5000)
  }

  return (
    <article className="flex min-h-screen items-center justify-between bg-[#FFF8F0]">
      <div className="flex flex-col items-start pl-60 justify-center w-[50%] bg-[#9DD9D2] min-h-screen">
        <h4 className="font-bold text-[#3E4856] font-rubik text-2xl text-left pb-16 justify-center w-[50%]">
          Inicia tu viaje
        </h4>
        <form className="flex flex-col items-start justify-center w-[50%] pt-8">
          <p className="font-bold text-[#3E4856] font-rubik text-1x1 text-left pb-8">
            Datos de viaje
          </p>
          <label className=" font-medium pb-4">Destino</label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <label className=" font-medium pt-4 pb-4">Unidad a conducir</label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <div className="flex justify-between gap-2 py-4 items-center">
            <div>
              <label className=" font-medium pt-4 pb-4">Fecha de salida</label>
              <input
                type={"date"}
                className=" rounded-lg py-2 px-2 w-full"
                placeholder="DD/MM/AAAA"
              ></input>
            </div>
            <div>
              <label className=" font-medium pt-4 pb-4">Fecha de Llegada</label>
              <input
                type={"date"}
                className=" rounded-lg py-2 px-2 w-full"
                placeholder="DD/MM/AAAA"
              ></input>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2 py-4">
            <input
              type="checkbox"
              className="border-gray-300 rounded h-8 w-8"
            ></input>
            <span className="font-rubik text-md font-semibold">
              Iniciar ruta al instante
            </span>
          </div>
          <p className="font-rubik text-xs text-center">
            Si no inicias tu ruta al instante, quedará en estado PENDIENTE e
            iniciará en la <span className="font-bold">fecha de salida</span>{" "}
            que hayas seleccionada
          </p>
          
        </form>
          <button
            onClick={openModal}
            className="mt-20 py-4 text-center w-[50%] font-medium font-rubik text-white bg-[#FF8811] rounded-lg"
          >
            Registrar nuevo viaje
          </button>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] pb-16">
        <img width={700} src={"/driver.png"} alt="driverHand" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[674px] h-full max-h-[735px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-center font-bold font-rubik text-2xl leading-6 text-gray-900"
                  >
                    Ruta creada con éxito
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col">
                    
                    
                  </div>

                  <div className="mt-4 flex items-center justify-center">
                   
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

export default NewRoute;
