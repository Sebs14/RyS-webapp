import React from "react";
import Image from "next/image";
import Link from "next/link";

const Log = () => {
  return (
    <article className="flex min-h-screen items-center justify-between">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <Image width={512} height={512} src={"/logIn.jpg"} alt="logIn" />
        <h1 className=" text-4xl font-rubik font-bold">R y S Transportes</h1>
      </div>
      <div className="flex flex-col items-start pl-40 justify-center w-[50%] bg-[#9DD9D2] min-h-screen">
        <h2 className="font-bold text-[#3E4856] font-rubik text-4xl text-left pb-12">
          Inicia sesión
        </h2>
        <form className="flex flex-col items-start justify-center w-[50%]">
          <label className=" font-medium pb-4">Correo</label>
          <input
            type={"email"}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="example@email.com"
          ></input>
          <label className=" font-medium pt-8 pb-4">Contraseña</label>
          <input
            type={"password"}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="password"
          ></input>
          <button className="mt-20 py-4 text-center w-full font-medium font-rubik text-white bg-[#FF8811] rounded-lg">
            Inicia sesión
          </button>
          <Link
            href="/logIn"
            className="mt-4 w-full text-center font-medium font-rubik"
          >
            olvide mi contraseña
          </Link>
        </form>
      </div>
    </article>
  );
};

export default Log;
