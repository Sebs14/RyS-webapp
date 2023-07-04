
import React from 'react'
import Link from 'next/link';

const table = () => {
  return (
    <div class="bg-white px-4 rounded-md w-full ">
	    <div class=" flex items-center justify-between pb-6">
            <div className='relative ' >
                <h2 class="text-gray-600 font-semibold font-rubik">Historial de viajes</h2>
                <div className='bg-[#4C3175] mt-2 flex w-[41px] h-[1px] absolute -left-8'/>
            </div>
            <div class="flex items-center justify-between">
			<Link href="/historialConductor/newRoute" className="w-[188px] h-[39px] px-[38.10px] py-[13.10px] bg-orange-500 rounded-lg justify-center items-center gap-[11.91px] inline-flex hover:bg-orange-600">
				<span className="font-rubik font-semibold text-white text-md ">Agregar Ruta</span>
			</Link>
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
									ID Ruta
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
										<p class="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
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
										<p class="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
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
										<p class="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
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
										<p class="text-green-500 flex py-1 px-4 w-fit  bg-[#d1fae5] rounded font-semibold">
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
						</tbody>
					</table>
					<div
						class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<div class="inline-flex w-full justify-between items-center mt-2 xs:mt-0">
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							<span class="text-xs xs:text-sm text-gray-900">
                            Pagina 1
                        	</span> 
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