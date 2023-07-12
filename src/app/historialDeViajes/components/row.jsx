import React from 'react'

const row = ({ idFreight, placa, tonage, conductor, fecha }) => {
  return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {idFreight}
                            </p>
                        </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {placa}
                            </p>
                        </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="px-5 py-5">
                    <p className="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
                        {tonage}
                    </p>
                </div>	
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{conductor}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {fecha}
                </p>
            </td>
        </tr>
  )
}

export default row