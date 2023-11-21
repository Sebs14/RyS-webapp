import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import deleteEmpFreight from "@/services/deleteEmpFreights";
import getEmpFreightById from "@/services/getEmpFreightById";
import { ToastContainer, toast } from "react-toastify";

const TableFloat = ({ idFreight }) => {
  const [employees, setEmployees] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteEmp = async (id) => {
    const status = await deleteEmpFreight(id);
    if (status === 200) {
      notify();
      setIsDeleted(!isDeleted);
    }
  };

  const notify = () => {
    toast.success("Empleado eliminado con exito!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
    });
  };

  useEffect(() => {
    getEmpFreightById(idFreight).then((res) => {
      setEmployees(res);
    });
  }, [isDeleted]);
  return (
    <div className="flex w-full items-start justify-center max-h-[450px] min-h-[450px]">
      <div className="w-full overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className=" block max-h-[450px] w-full overflow-y-scroll text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs w-full text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="w-full sticky top-0 left-0 right-0 bg-white">
                <th scope="col" className="py-3 px-6 w-[20%]">
                  DUI
                </th>
                <th scope="col" className="py-3 px-6 w-[50%]">
                  Empleado
                </th>
                <th scope="col" className="py-3 px-6 w-[50%]">
                  Pago
                </th>
                <th scope="col" className="py-3 px-6 w-[20%]">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                <>
                  {employees.map((employee) => {
                    return (
                      <tr
                        key={employee.idEmployeeFreight}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="py-4 px-6">{employee.user.dui}</td>
                        <td className="py-4 px-6">{employee.user.name}</td>
                        <td className="py-4 px-6">
                          ${employee.extraPayment +
                            employee.payment +
                            employee.viatic}
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => {
                              deleteEmp(employee.idEmployeeFreight);
                            }}
                            className="text-indigo-50/70 hover:text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold  rounded p-1"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 text-lg">
                              <FontAwesomeIcon icon={faTrash} />
                            </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="w-full">
                    No cuenta con ningun empleado en esta flota
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TableFloat;
