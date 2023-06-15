import Image from 'next/image'
import React from 'react'

const table = () => {
  return (
    <div class="bg-white px-4 rounded-md w-full ">
	    <div class=" flex items-center justify-between pb-6">
            <div className='relative ' >
                <h2 class="text-gray-600 font-semibold font-rubik">Historial de rutas</h2>
                <div className='bg-[#4C3175] mt-2 flex w-[41px] h-[1px] absolute -left-8'/>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex bg-gray-50 items-center p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                    <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
            </div>
            </div>
		</div>
		<div className=''>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 scroll-smooth lg:scroll-auto">
				<div class="inline-block min-w-full shadow rounded-lg  overflow-hidden">
					<table class="min-w-full leading-normal ">
						<thead className='font-rubik'>
							<tr>
								<th
									class="px-5 py-3 border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
									ID Unidad
								</th>
								<th
									class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
									Conductor
								</th>
								<th
									class="flex px-5 py-4  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
									<div className='flex flex-col justify-center items-center mt-2'>
                                        <span>
                                            Distancia/
                                        </span>
                                        <span>KM</span>
                                    </div>
								</th>
								<th
									class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
									Fecha
								</th>
								<th
									class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
									Hora
								</th>
                                <th
									class="px-5 py-3  border-gray-200 bg-white text-left text-xs font-semibold text-gray-600  tracking-wider">
									Estado
								</th>		
							</tr>

						</thead>
						<tbody>
                            <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
												353436
												</p>
											</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Juan Hernandez</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-5 py-5">
								<p class="text-green-950 flex justify-center py-1 bg-green-200 rounded-sm font-semibold">
									43
								</p>
								</div>	
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 text-gray-900 leading-tight">
									<span class="relative">13:30</span>
									</span>
								</td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-3 py-3">
								<p class="text-green-500 rounded-md border-gray-400 border-2 flex justify-center py-1-sm">
									Activo
								</p>
								</div>	
								</td>
							</tr>
                            <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
												353436
												</p>
											</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Juan Hernandez</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-5 py-5">
								<p class="text-green-950 flex justify-center py-1 bg-green-200 rounded-sm font-semibold">
									43
								</p>
								</div>	
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 text-gray-900 leading-tight">
									<span class="relative">13:30</span>
									</span>
								</td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-3 py-3">
								<p class=" rounded-md border-gray-400 border-2 text-sky-300 flex justify-center py-1-sm">
									En Progreso
								</p>
								</div>	
								</td>
							</tr>
                            <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
												353436
												</p>
											</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Juan Hernandez</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-5 py-5">
								<p class="text-green-950 flex justify-center py-1 bg-green-200 rounded-sm font-semibold">
									43
								</p>
								</div>	
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 text-gray-900 leading-tight">
									<span class="relative">13:30</span>
									</span>
								</td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-3 py-3">
								<p class=" rounded-md border-gray-400 border-2 text-red-500 flex justify-center py-1-sm">
									Incompleto
								</p>
								</div>	
								</td>
							</tr>
                            <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
												353436
												</p>
											</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Juan Hernandez</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-5 py-5">
								<p class="text-green-950 flex justify-center py-1 bg-green-200 rounded-sm font-semibold">
									43
								</p>
								</div>	
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 21, 2020
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 text-gray-900 leading-tight">
									<span class="relative">13:30</span>
									</span>
								</td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
								<div class="px-3 py-3">
								<p class=" rounded-md border-gray-400 border-2 text-green-950 flex justify-center py-1-sm">
									Pendiente
								</p>
								</div>	
								</td>
							</tr>
						</tbody>
					</table>
					<div
						class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
						<div class="inline-flex mt-2 xs:mt-0">
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default table