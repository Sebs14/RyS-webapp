"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import getFreights from "../../../services/fetchFreights";
import moment from "moment";
import Lottie from "lottie-react";
import Squirtle from "../../../../public/squirtle.json";
import Row from "./row";
import authService from "@/services/auth.service";
import { useRouter } from "next/navigation";

const table = () => {
  const router = useRouter();
  const [freights, setFreights] = useState();
  const [status, setStatus] = useState();
  const [length, setLength] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [token, setToken] = useState("");
  const limit = 6;

  const cambioATrue = () => {
    setIsLoaded(true);
  };

  const fetchFreights = async () => {
    const page = numPage - 1;
    const response = await getFreights(page, limit);
    setStatus(response.status);
    setFreights(response);
    setLength(response.data.length);
  };

  const prevButton = () => {
    setNumPage(numPage - 1);
  };
  const nextButton = () => {
    setNumPage(numPage + 1);
  };

  useEffect(() => {
    if (authService.getCurrentUser()) {
      fetchFreights();
    } else {
      router.push("/login", { shallow: false });
    }
  }, []);

  useEffect(() => {
    fetchFreights();
  }, [numPage, isDeleted]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const tokens = localStorage.getItem("token");
      setToken(tokens);
    }
  }, []);

  useEffect(() => {
    if (status === 200) {
      cambioATrue();
    } else if (status === 403 && typeof window !== "undefined") {
      window.location.reload();
    }
  }, [status]);

  return (
    <div className="bg-white px-4 rounded-md w-full ">
      <div className=" flex items-center justify-between pb-6">
        <div className="relative w-full">
          <h2 className="text-gray-600 font-semibold font-rubik">
            Historial de rutas
          </h2>
          <div className="absolute right-0 top-0">
            <Link href="/historialDeViajes/nuevoViaje" className="">
              <div className="flex items-center justify-center h-full w-full p-1 rounded-r-lg rounded-b-md bg-indigo-600 text-white/70 hover:text-white hover:bg-indigo-800 transition duration-500 ease-in-out font-bold font-rubik">
                <p>NUEVO VIAJE</p>
              </div>
            </Link>
          </div>
          <div className="bg-[#4C3175] mt-2 flex w-[41px] h-[1px] absolute -left-8" />
        </div>
      </div>
      <div className="">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 scroll-smooth lg:scroll-auto">
          <div className="inline-block min-w-full  rounded-lg  overflow-hidden">
            {isLoaded ? (
              <table className="min-w-full leading-normal ">
                <thead className="font-rubik">
                  <tr>
                    <th className="px-5 py-3 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                      ID Flete
                    </th>
                    <th className="px-5 py-3 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                      Cliente
                    </th>
                    <th className="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                      Destino
                    </th>
                    <th className="flex px-5 py-4  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                      <div className="flex flex-col justify-center items-center">
                        <span>Placa</span>
                      </div>
                    </th>
                    <th className="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                      Fecha
                    </th>
                    <th className="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {length > 0 ? (
                    <>
                      {freights.data.map((freight) => {
                        return (
                          <Row
                            key={freight.idFreight}
                            idFreight={freight.idFreight}
                            client={freight.clients.name}
                            destination={freight.destination}
                            plate={freight.units.plate}
                            date={moment(freight.date)
                              .utc()
                              .format("YYYY-MM-DD")}
                            setIsDeleted={setIsDeleted}
                            isDeleted={isDeleted}
                          />
                        );
                      })}
                    </>
                  ) : (
                    <tbody>
                      <tr>
                        <td>NO HAY DATOS QUE MOSTRAR</td>
                      </tr>
                    </tbody>
                  )}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col absolute left-0 w-full items-center justify-center font-bold font-rubik">
                <div className="flex flex-col h-screen justify-center items-center">
                  <span>Cargando información</span>
                  <Lottie animationData={Squirtle} />
                </div>
              </div>
            )}
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <div className="inline-flex w-full justify-between items-center mt-2 xs:mt-0">
                {numPage === 1 ? (
                  <button
                    disabled
                    className=" disabled:opacity-25 text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                    onClick={prevButton}
                  >
                    Prev
                  </button>
                ) : (
                  <button
                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                    onClick={prevButton}
                  >
                    Prev
                  </button>
                )}

                <span className="text-xs xs:text-sm text-gray-900">
                  Pagina {numPage}
                </span>
                <button
                  className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                  onClick={nextButton}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default table;
