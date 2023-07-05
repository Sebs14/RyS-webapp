import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow-md sm:items-baseline w-full border-b-2">
        <div class="mb-2 sm:mb-0"></div>
        <div className="flex gap-2 justify-center items-center">
          <div className="border border-[#4C3175] rounded-full overflow-hidden bg-[#F2EBD8] p-1 border-spacing-3">
            <Image
              src="/company.jpg"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <p className="font-rubik font-semibold">Nombre de Usuario</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
