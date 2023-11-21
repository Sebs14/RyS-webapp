"use client";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import FormCreateUser from "./components/FormCreateUser";
import Sidebar from "@/components/Sidebar";
import DialogUsers from "./components/dialog";
import getAllUsers from "@/services/getAllUsers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  let [categories] = useState({
    "Crear usuario": [],
    "Ver usuarios": [data],
  });

  useEffect(() => {
    getAllUsers().then((res) => {
      setData(res);
    });
  }, [isCreated]);
  return (
    <div className="flex max-h-screen">
      <Sidebar
        historialPage={false}
        createUserPage={true}
      />
      <div className="w-full flex flex-col px-2 py-5">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-lg font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white font-rubik font-bold text-blue-700 shadow"
                      : "text-black font-rubik font-bold hover:bg-whizzte/[0.12] hover:text-black/70"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white/60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-0 "
                )}
              >
                {posts.length > 0 ? (
                  <ul>
                    {data.map((post) => (
                      <li
                        key={post.dui}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.name}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.dui}</li>
                          <li>&middot;</li>
                          <li>puesto: {post.rol}</li>
                          <li>&middot;</li>
                          <li>{post.email}</li>
                          <li>&middot;</li>
                          <li>{post.address}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-4xl font-rubik font-bold text-gray-500">
                      Rellena el siguiente formulario
                    </h1>
                    <p className="text-lg font-rubik font-bold text-gray-500">
                      para crear un nuevo usuario
                    </p>
                    <FormCreateUser setIsOpen={setIsOpen} isCreated={isCreated} setIsCreated={setIsCreated} />
                    <DialogUsers isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default page;
