import React from "react";

const NewConductor = () => {
  return (
    <article className="flex min-h-screen items-center justify-between bg-[#FFF8F0]">
      <div className="flex flex-col items-start pl-60 justify-center w-[50%] bg-[#9DD9D2] min-h-screen">
        <h4 className="font-bold text-[#3E4856] font-rubik text-2xl text-left pb-16 justify-center w-[50%]">
          Localiza a tus conductores al instante con nosotros
        </h4>
        <form className="flex flex-col items-start justify-center w-[50%] pt-8">
          <p className="font-bold text-[#3E4856] font-rubik text-1x1 text-left pb-8">Ingresa los datos</p>
          <label className=" font-medium pb-4">Nombres</label>
          <input
            type={"text"}
            className=" rounded-lg py-2 px-2 w-full"
          ></input>
          <label className=" font-medium pt-4 pb-4">Apellidos</label>
          <input
            type={"text"}
            className=" rounded-lg py-2 px-2 w-full"
          ></input>
          <label className=" font-medium pt-4 pb-4">Correo electrónico</label>
          <input
            type={"email"}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="example@email.com"
          ></input>
          <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="font-medium">Contraseña</label>
              <div class="mt-4">
                <input type={"password"} placeholder="Password" class="rounded-lg py-2 px-2 w-full"/>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="text-sm font-medium">Confirma tu contraseña</label>
              <div class="mt-4">
                <input type={"password"} placeholder="Password" class="rounded-lg py-2 px-2 w-full"/>
              </div>
            </div>
          </div>

          <button className="mt-20 py-4 text-center w-full font-medium font-rubik text-white bg-[#FF8811] rounded-lg">
            Registrar conductor
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] pb-16">
        <img width={700} src={"/driver.png"} alt="driverHand"/>
      </div>
    </article>
  );
};

export default NewConductor;
