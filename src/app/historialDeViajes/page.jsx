"use client";
import React from "react";
// import Navbar from '../../components/Navbar'
import Sidebar from "@/components/Sidebar";
import Table from "./components/table";
import Link from "next/link";

// <Navbar/>
const page = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="flex ">
        <Sidebar
          historialPage={true}
          unidadesPage={false}
          conductoresPage={false}
        />
        <div className=" w-full justify-center items-center  bg-[#FFF8F0]">
          <div className="flex ml-6 mr-28 mt-8 bg-white rounded-3xl justify-center p-8 border border-gray-100 h-fit shadow-xl">
            <Table />
          </div>
        </div>
        <div className="relative">
          <div className="absolute rounded-lg bottom-28 right-28 w-40 h-16 overflow-hidden">
            <Link href="/historialDeViajes/nuevoViaje" className="">
              <div className="flex items-center justify-center h-full w-full bg-indigo-600 text-white/70 hover:text-white hover:bg-indigo-800 transition duration-500 ease-in-out font-bold font-rubik">
                <p>NUEVO VIAJE</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
