"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const NewConductor = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)

  function redirectUser(){
    router.push("http://localhost:3000/conductores/");
  }

  function submitNewConductor(){
    setIsOpen(true)
    
  }

  function closeModal() {
    setIsOpen(false)
    setTimeout(redirectUser, 500)
  }

  return (
    <article className="flex min-h-screen items-center justify-between bg-[#FFF8F0]">
      <div className="flex flex-col items-start pl-60 justify-center w-[50%] bg-[#9DD9D2] min-h-screen">
        <h4 className="font-bold text-[#3E4856] font-rubik text-2xl text-left pb-16 justify-center w-[50%]">
          Localiza a tus conductores al instante con nosotros
        </h4>
        <form className="flex flex-col items-start justify-center w-[50%] pt-8">
          <p className="font-bold text-[#3E4856] font-rubik text-1x1 text-left pb-8">
            Ingresa los datos
          </p>
          <label className=" font-medium pb-4">Nombres</label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <label className=" font-medium pt-4 pb-4">Apellidos</label>
          <input type={"text"} className=" rounded-lg py-2 px-2 w-full"></input>
          <label className=" font-medium pt-4 pb-4">Correo electrónico</label>
          <input
            type={"email"}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="example@email.com"
          ></input>
          <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="font-medium">Contraseña</label>
              <div class="mt-4">
                <input
                  type={"password"}
                  placeholder="Password"
                  class="rounded-lg py-2 px-2 w-full"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="text-sm font-medium">Confirma tu contraseña</label>
              <div class="mt-4">
                <input
                  type={"password"}
                  placeholder="Password"
                  class="rounded-lg py-2 px-2 w-full"
                />
              </div>
            </div>
          </div>
        </form>
        <button
            onClick={submitNewConductor}
            className="mt-20 py-4 text-center w-[50%] font-medium font-rubik text-white bg-[#FF8811] rounded-lg"
          >
            Registrar conductor
          </button>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] pb-16">
        <img width={700} src={"/driver.png"} alt="driverHand" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative rounded-lg z-10" onClose={closeModal}>
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
                   Conductor agregado con éxito
                  </Dialog.Title>
                  <span className="px-4 py-4 inline-flex items-center justify-center text-lg"><FontAwesomeIcon className="text-green-500 h-12 w-12" icon={faCircleCheck}/></span>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 text-center">
                    No olvides compartir los datos de acceso a tu nuevo conductor
                    </p>
                  </div>
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
