"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import {
  faArrowTrendUp,
  faCaravan,
  faPersonRunning,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import authService from "@/services/auth.service";
import { useRouter } from "next/navigation";

const Sidebar = ({
  historialPage,
  unidadesPage,
  conductoresPage,
  createUserPage,
}) => {
  const router = useRouter();
  const [rol, setRol] = useState("");

  function redirectUser() {
    router.push("/login");
  }

  const logOut = () => {
    authService.logout();
    redirectUser();
  };

  useEffect(() => {
    setRol(localStorage.getItem("rol"));
  }, []);
  return (
    <div className="relative w-64">
      <aside className=" fixed top-0 left-0 bottom-0 flex flex-col  h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l shadow-md">
        <div className=" flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              {rol !== "dev" && rol !== "admin" ? (
                <>
                  {historialPage === false ? (
                    <a
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700"
                      href="/user/historialDeViajes"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                        <FontAwesomeIcon
                          className="text-indigo-950"
                          icon={faCaravan}
                        />
                      </span>
                      <span className="mx-2 text-sm font-medium">
                        Historial de viajes
                      </span>
                    </a>
                  ) : (
                    <a
                      className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700"
                      href="/user/historialDeViajes"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                        <FontAwesomeIcon
                          className="text-indigo-950"
                          icon={faCaravan}
                        />
                      </span>
                      <span className="mx-2 text-sm font-medium">
                        Historial de viajes
                      </span>
                    </a>
                  )}
                </>
              ) : (
                <>
                  {createUserPage === false ? (
                    <a
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700"
                      href="/adminUsers"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                        <FontAwesomeIcon
                          className="text-indigo-950"
                          icon={faUser}
                        />
                      </span>
                      <span className="mx-2 text-sm font-medium">Usuarios</span>
                    </a>
                  ) : (
                    <a
                      className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700"
                      href="/historialDeViajes"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                        <FontAwesomeIcon
                          className="text-indigo-950"
                          icon={faUser}
                        />
                      </span>
                      <span className="mx-2 text-sm font-medium">Usuarios</span>
                    </a>
                  )}
                  {historialPage === false ? (
                    <a
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700"
                      href="/historialDeViajes"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                        <FontAwesomeIcon
                          className="text-indigo-950"
                          icon={faArrowTrendUp}
                        />
                      </span>
                      <span className="mx-2 text-sm font-medium">
                        Historial de viajes
                      </span>
                    </a>
                  ) : (
                    <a
                      className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg  bg-gray-100  text-gray-700"
                      href="/historialDeViajes"
                    >
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                        <FontAwesomeIcon
                          className="text-indigo-950"
                          icon={faArrowTrendUp}
                        />
                      </span>
                      <span className="mx-2 text-sm font-medium">
                        Historial de viajes
                      </span>
                    </a>
                  )}
                </>
              )}
            </div>
          </nav>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="border border-[#4C3175] rounded-full overflow-hidden bg-[#F2EBD8] p-1 border-spacing-3">
              <Image
                alt="companyImg"
                src="/company.jpg"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <button
              onClick={logOut}
              className=" font-rubik font-bold text-black hover:text-black/70 cursor-pointer"
            >
              LogOut
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
