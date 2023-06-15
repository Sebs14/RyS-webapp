"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { Progress, Typography } from "@/components/ExportFile";
import { faArrowsRotate, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar historialPage={false} unidadesPage={true} conductoresPage={false}/>
            <div className=' flex flex-col w-full pl-20 pr-28 pt-8 gap-10  bg-[#FFF8F0]'>
                <div className='flex gap-9'>
                    <div className='w-[255px] h-[178px] p-4 flex flex-col justify-between items-start  bg-white rounded-2xl shadow'>
                        <FontAwesomeIcon icon={faFileLines} size='2x'/>
                        <h1 className=' text-3xl font-rubik font-bold'>C1045</h1>
                        <p className=' font-semibold text-sm'>ID de Unidad</p>
                        <p className=' text-black/50 font-rubik text-sm'>unidad rastreada</p>
                    </div>
                    <div className='w-[255px] h-[178px] p-4 flex flex-col justify-between items-start gap-2 bg-white rounded-2xl shadow'>
                        <FontAwesomeIcon icon={faArrowsRotate} size='2x'/>
                        <h1 className=' text-3xl font-rubik flex flex-col font-bold'>
                            <span>Juan</span>
                            <span>Martinez</span>
                        </h1>
                        <p className=' text-black/50 font-rubik text-sm'>Conductor designado de la unidad</p>
                    </div>
                    <div className='w-[255px] h-[178px] p-4 flex flex-col justify-between items-start  bg-white rounded-2xl shadow'>
                        <FontAwesomeIcon icon={faArrowTrendUp} size='2x'/>
                        <h1 className=' text-3xl font-rubik flex flex-col font-bold'>
                            <span>5</span>
                        </h1>
                        <p className=' text-black/50 font-rubik text-sm'>Viajes realizados por unidad</p>
                    </div>
                    <button className='w-[255px] h-[178px] p-4 flex flex-col items-center justify-end gap-3 bg-white rounded-2xl shadow hover:transform hover:scale-105 hover:duration-200'>
                        <div className='flex items-center w-[41px] h-[41px] justify-center rounded-full  bg-yellow-400'>
                            <span className='font-rubik font-medium text-2xl'>+</span>
                        </div>
                        <h2 className='font-rubik text-lg text-center font-medium'>Editar</h2>
                        <p className=' text-black/50 font-rubik text-sm text-center'>Editar información de la ruta</p>
                    </button>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-rubik text-2xl font-semibold'>Ubicación</label>
                    <div className='w-[830px] h-[386px] p-4 flex justify-center items-center bg-white rounded-2xl shadow'>
                        <h1 className='text-4xl font-rubik font-bold'> MAPA </h1>
                    </div>
                </div>
                <div className='flex gap-9'>
                    <div className='w-[402px] h-[190px] p-6 flex flex-col bg-white rounded-2xl shadow'>
                        <div className='w-full h-fit pb-2 border-b-2 border-black/10'>
                            <h2 className='text-black/60 font-rubik text-start font-medium'>Ruta total</h2>
                        </div>
                        <h1 className='font-bold text-[#3E4856] text-2xl font-rubik p-2 pt-4'> 100 </h1>
                        <Progress size='lg' color='amber' value={40}/>
                        <div className='flex flex-col'>
                            <div className="flex items-center justify-between mt-2 gap-4 mb-2">
                                <div className='flex gap-1 items-center justify-center'>
                                    <div className='w-[20px] h-1 bg-amber-600 rounded-full '/>
                                    <Typography color="amber" variant="h6">Tramo recorrido</Typography>
                                </div>
                                <div className='flex gap-1 items-center justify-center'>
                                    <div className='w-[20px] h-1 bg-black/10 rounded-full '/>
                                    <Typography color="teal" variant="h6">Tramo total</Typography>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                                <h3 className='text-center font-rubik font-medium'>20 kilometros</h3>
                                <h3 className='text-center font-rubik font-medium'>80 kilometros</h3>
                            </div> 
                        </div>
                    </div>
                    <div className='w-[402px] h-[190px] p-4 flex flex-col bg-white rounded-2xl shadow'>
                        <div className='w-full h-fit pb-2 border-b-2 border-black/10'>
                            <h2 className='text-black/60 font-rubik text-start font-medium'>Estado de la entrega</h2>
                        </div>
                        <div className='flex pt-2'>
                            <div className='flex gap-2 flex-col justify-center items-center'>
                                <h2 className='text-start font-rubik font-light '>El estado actual de la ruta #R38682</h2>
                                <button className='flex items-center justify-center rounded-lg w-[122px] h-[30px] text-xs text-green-400 border border-green-400 hover:bg-green-400 hover:text-white hover:font-bold'>
                                    Completo
                                </button>
                                <button className='flex items-center justify-center rounded-lg w-[122px] h-[30px] text-xs text-red-400 border border-red-400 hover:bg-red-400 hover:text-white hover:font-bold'>
                                    Incompleto
                                </button>
                            </div>
                                <Image src={"/Delivery-rafiki.jpg"} height={110} width={110}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page