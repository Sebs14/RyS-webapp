"use client";
import React, { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Table from "./components/table";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("hola");
    if (typeof window !== "undefined") {
      if (
        localStorage.getItem("rol") === "admin" ||
        localStorage.getItem("rol") === "dev"
      ) {
        router.push("/historialDeViajes");
      } else {
        router.push("/user/historialDeViajes");
      }
    }
  }, []);
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-screen">
        <Sidebar historialPage={true} createUserPage={false} />
        <div className=" w-full justify-center items-center  bg-[#FFF8F0]">
          <div className="flex ml-6 mr-28 mt-8 bg-white rounded-3xl justify-center p-8 border border-gray-100 h-fit shadow-xl">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
