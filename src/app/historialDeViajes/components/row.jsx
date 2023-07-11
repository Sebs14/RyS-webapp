import React from 'react'

const row = ({ idFreight, placa, tonage, conductor, fecha }) => {
  return (
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                        <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                            {idFreight}
                            </p>
                        </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                        <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                            {placa}
                            </p>
                        </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="px-5 py-5">
                    <p class="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
                        {tonage}
                    </p>
                </div>	
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{conductor}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {fecha}
                </p>
            </td>
        </tr>
  )
}

export default row