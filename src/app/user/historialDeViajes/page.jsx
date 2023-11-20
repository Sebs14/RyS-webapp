"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Table from "./components/table";

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
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default page;
