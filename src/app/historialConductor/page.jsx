import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Table from './components/table'


const page = () => {
  return (
    <div className='max-h-screen overflow-hidden'>
        <Navbar/>
        <div className='flex'>
            <Sidebar historialPage={false} unidadesPage={false} conductoresPage={false} user="conductor"/>
            <div className=' w-full justify-center items-center  bg-[#FFF8F0]'>
                <div className='flex ml-6 mr-28 mt-8 bg-white rounded-3xl justify-center p-8 border border-gray-100 h-fit shadow-xl'>
                  <Table/>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default page