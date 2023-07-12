"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import getFreights from "../../../services/fetchFreights";
import moment from "moment";
import Lottie from 'lottie-react';
import Squirtle from '../../../../public/squirtle.json'

const table = () => {
  const [freights, setFreights] = useState();
  const [length, setLength] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [c, setC] = useState(2);
  const [d, setD] = useState(3);
  
  // const a = 0;
  // const b = 1;
  // const c = 2;
  // const d = 3;

  const fetchFreights = async () => {
    const response = await getFreights();
    setFreights(response);
    setLength(response.data.length)
  };

  const prevButton = () => {
    setNumPage(numPage - 1)
    setA(a-4)
    setB(b-4)
    setC(c-4)
    setD(d-4)
  }
  const nextButton = () => {
    setA(a+4)
    setB(b+4)
    setC(c+4)
    setD(d+4)
    setNumPage(numPage + 1)
  }

  const cambioATrue = () => {
    setIsLoaded(true)
   
  }

  useEffect(() => {
    fetchFreights();
    setTimeout(cambioATrue, 4000)
    
  }, []);

  useEffect(() => {
    
  }, [numPage]);

  


  // freights.data.map((f) => {
  //   return (
  //     <tr key={f.idFreight}>
  //       <td className="flex items-center ml-3 px-5 py-5 border-b border-gray-200 bg-white text-sm">
  //         <p className="text-gray-900 whitespace-no-wrap">
  //         {f.idFreight}
  //         </p>
  //       </td>
  //       <td className="ml-3 flex items-center px-5 py-5 border-b border-gray-200 bg-white text-sm">
  //         <p className="text-gray-900 whitespace-no-wrap">
  //         {f.destination}
  //         </p>
  //       </td>
  //       <td className="px-10 py-10 border-b border-gray-200 bg-white text-sm">
  //         <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
  //             {f.tonage}
  //         </p>
  //       </td>
  //       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  //           <p className="text-gray-900 whitespace-no-wrap">
  //               {f.date}
  //           </p>
  //       </td>
  //   </tr>
  //   )
  // })
  
  return (
    <div className="bg-white px-4 rounded-md w-full ">
      <div className=" flex items-center justify-between pb-6">
        <div className="relative ">
          <h2 className="text-gray-600 font-semibold font-rubik">
            Historial de rutas
          </h2>
          <div className="bg-[#4C3175] mt-2 flex w-[41px] h-[1px] absolute -left-8" />
        </div>
      </div>
      <div className="">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 scroll-smooth lg:scroll-auto">
          <div className="inline-block min-w-full  rounded-lg  overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead className="font-rubik">
                <tr>
                  <th className="px-5 py-3 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    ID Flete
                  </th>
                  <th className="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    Destino
                  </th>
                  <th className="flex px-5 py-4  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    <div className="flex flex-col justify-center items-center mt-2">
                      <span>Toneladas</span>
                    </div>
                  </th>
                  <th className="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              
              {isLoaded === true ? 
              (
                <tbody>
                  {length > 0 ? 
                    (
                      <>
                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[a].idFreight}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[a].destination}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
                              {freights.data[a].tonage}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {moment(freights.data[a].date).utc().format('YYYY-MM-DD')}
                            </p>
                        </td>
                        </tr>
                        <tr >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[b].idFreight}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[b].destination}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%]  max-w-[25%]">
                          <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
                              {freights.data[b].tonage}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {moment(freights.data[b].date).utc().format('YYYY-MM-DD')}
                            </p>
                        </td>
                        </tr>
                        <tr >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[c].idFreight}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[c].destination}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
                              {freights.data[c].tonage}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {moment(freights.data[c].date).utc().format('YYYY-MM-DD')}
                            </p>
                        </td>
                        </tr>
                        <tr >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[d].idFreight}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-gray-900 whitespace-no-wrap">
                          {freights.data[d].destination}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                          <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
                              {freights.data[d].tonage}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm min-w-[25%] max-w-[25%]">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {moment(freights.data[d].date).utc().format('YYYY-MM-DD')}
                            </p>
                        </td>
                        </tr>
                      </>
                    ) 
                    :
                    ( 
                      <tbody>
                        <tr>
                          <td>NO HAY DATOS QUE MOSTRAR</td>
                        </tr>
                      </tbody>
                      )
                  }
                </tbody>
              ) :
              (
                  <div className="flex absolute left-0 w-full items-center justify-center font-bold font-rubik">
                    <h1>SE ESTAN CARGANDO LOS DATOS</h1>
                    <div className="flex flex-col h-screen justify-center items-center">
                      <Lottie animationData={Squirtle} />
                    </div>
                  </div>
              )
              }
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <div className="inline-flex w-full justify-between items-center mt-2 xs:mt-0">
                { a === 0 ? (
                    <button disabled className=" disabled:opacity-25 text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l" onClick={prevButton}>
                      Prev
                    </button>
                ) : (<button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l" onClick={prevButton}>
                      Prev
                    </button>)

                }
                
                <span className="text-xs xs:text-sm text-gray-900">Pagina {numPage}</span>
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r" onClick={nextButton}>
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
