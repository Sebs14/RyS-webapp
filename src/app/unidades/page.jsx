"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Navbar from '../../components/Navbar'
import Sidebar from "@/components/Sidebar";
import { faFileLines, faMap } from "@fortawesome/free-regular-svg-icons";
import { Progress, Typography } from "@/components/ExportFile";
import {
  faArrowsRotate,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from 'next/link';

const Page = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // <Navbar />
  return (
    <div>
      <div className="flex">
        <Sidebar
          historialPage={false}
          unidadesPage={true}
          conductoresPage={false}
        />
        <div className=" flex flex-col w-full pl-20 pr-28 pt-8 gap-10  bg-[#FFF8F0]">
          <div className="flex gap-9">
            <div className="w-[255px] h-[178px] p-4 flex flex-col justify-between items-start  bg-white rounded-2xl shadow">
              <FontAwesomeIcon icon={faFileLines} size="2x" />
              <h1 className=" text-3xl font-rubik font-bold">C1045</h1>
              <p className=" font-semibold text-sm">ID de Unidad</p>
              <p className=" text-black/50 font-rubik text-sm">
                unidad rastreada
              </p>
            </div>
            <div className="w-[255px] h-[178px] p-4 flex flex-col justify-between items-start gap-2 bg-white rounded-2xl shadow">
              <FontAwesomeIcon icon={faArrowsRotate} size="2x" />
              <h1 className=" text-3xl font-rubik flex flex-col font-bold">
                <span>Juan</span>
                <span>Martinez</span>
              </h1>
              <p className=" text-black/50 font-rubik text-sm">
                Conductor designado de la unidad
              </p>
            </div>
            <div className="w-[255px] h-[178px] p-4 flex flex-col justify-between items-start  bg-white rounded-2xl shadow">
              <FontAwesomeIcon icon={faArrowTrendUp} size="2x" />
              <h1 className=" text-3xl font-rubik flex flex-col font-bold">
                <span>5</span>
              </h1>
              <p className=" text-black/50 font-rubik text-sm">
                Viajes realizados por unidad
              </p>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="w-[255px] h-[178px] p-4 flex flex-col items-center justify-end gap-3 bg-white rounded-2xl shadow hover:transform hover:scale-105 hover:duration-200"
            >
              <div className="flex items-center w-[41px] h-[41px] justify-center rounded-full  bg-yellow-400">
                <span className="font-rubik font-medium text-2xl">+</span>
              </div>
              <h2 className="font-rubik text-lg text-center font-medium">
                Editar
              </h2>
              <p className=" text-black/50 font-rubik text-sm text-center">
                Editar información de la ruta
              </p>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-rubik text-2xl font-semibold">
              Ubicación
            </label>
            <Link
              href={"/unidades/Mapa"}
              className="w-[255px] h-[178px] p-4 flex font-bold font-rubik flex-col items-center justify-center gap-3 bg-white rounded-2xl shadow hover:transform hover:scale-105 hover:duration-200"
            >
              <FontAwesomeIcon icon={faMap} size="2x" />
                Ver mapa de la ruta
            </Link>
          </div>
          <div className="flex gap-9">
            <div className="w-[402px] h-[190px] p-6 flex flex-col gap-1 bg-white rounded-2xl shadow">
              <div className="w-full h-fit pb-2 border-b-2 border-black/10">
                <h2 className="text-black/60 font-rubik text-start font-medium">
                  Ruta total
                </h2>
              </div>
              <h1 className="font-bold text-[#3E4856] text-2xl font-rubik ">
                {" "}
                100{" "}
              </h1>
              <div>
                <Progress size="lg" color="amber" value={45} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mt-2 gap-4 mb-2">
                  <div className="flex gap-1 items-center justify-center">
                    <div className="w-[20px] h-1 bg-amber-600 rounded-full " />
                    <Typography color="amber" variant="h6">
                      Tramo recorrido
                    </Typography>
                  </div>
                  <div className="flex gap-1 items-center justify-center">
                    <div className="w-[20px] h-1 bg-black/10 rounded-full " />
                    <Typography color="teal" variant="h6">
                      Tramo total
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-center font-rubik font-medium">
                    20 kilometros
                  </h3>
                  <h3 className="text-center font-rubik font-medium">
                    80 kilometros
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[402px] h-[190px] p-4 flex flex-col bg-white rounded-2xl shadow">
              <div className="w-full h-fit pb-2 border-b-2 border-black/10">
                <h2 className="text-black/60 font-rubik text-start font-medium">
                  Estado de la entrega
                </h2>
              </div>
              <div className="flex pt-2">
                <div className="flex gap-2 flex-col justify-center items-center">
                  <h2 className="text-start font-rubik font-light ">
                    El estado actual de la ruta #R38682
                  </h2>
                  <button className="flex items-center justify-center rounded-lg w-[122px] h-[30px] text-xs text-green-400 border border-green-400 hover:bg-green-400 hover:text-white hover:font-bold">
                    Completo
                  </button>
                  <button className="flex items-center justify-center rounded-lg w-[122px] h-[30px] text-xs text-red-400 border border-red-400 hover:bg-red-400 hover:text-white hover:font-bold">
                    Incompleto
                  </button>
                </div>
                <Image
                  src={"/Delivery-rafiki.jpg"}
                  height={110}
                  width={110}
                  alt="rafiki"
                ></Image>
              </div>
            </div>
          </div>
        </div>
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
                    Ruta #38582
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col">
                    <p className="text-xl font-rubik font-semibold text-start text-gray-500">
                      Ingresa los siguientes datos:
                    </p>
                    <form className="mt-4 flex flex-col gap-4">
                      <label className="font-rubik font-semibold text-lg text-start">
                        Conductor
                      </label>
                      <input
                        type={"name"}
                        className=" rounded-lg py-2 px-2 w-full"
                        placeholder="Juan Martinez *"
                      ></input>
                      <label className="font-rubik font-semibold text-lg text-start">
                        Destino
                      </label>
                      <input
                        type={"place"}
                        className=" rounded-lg py-2 px-2 w-full"
                        placeholder="San Juan Opico"
                      ></input>
                      <label className="font-rubik font-semibold text-lg text-start">
                        Estado del viaje
                      </label>
                      <button className="flex items-center justify-center rounded-lg w-[122px] h-[30px] text-xs text-green-400 border border-green-400 hover:bg-green-400 hover:text-white hover:font-bold">
                        Completo
                      </button>
                      <button className="flex items-center justify-center rounded-lg w-[122px] h-[30px] text-xs text-red-400 border border-red-400 hover:bg-red-400 hover:text-white hover:font-bold">
                        Incompleto
                      </button>
                    </form>
                  </div>

                  <div className="mt-4 flex items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Guardar cambios
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Page;
