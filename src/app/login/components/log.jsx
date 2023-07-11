"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthService from "../../../services/auth.service"

const Log = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          router.push("/historialDeViajes");
        },
        (error) => {
          console.log("error1".error);
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article className="flex min-h-screen items-center justify-between">
      <div className="flex flex-col items-center justify-center w-[50%]">
        <Image width={512} height={512} src={"/logIn.jpg"} alt="logIn"/>
        <h1 className=" text-4xl font-rubik font-bold">R y S Transportes</h1>
      </div>
      <div className="flex flex-col items-start pl-40 justify-center w-[50%] bg-[#9DD9D2] min-h-screen">
        <h2 className="font-bold text-[#3E4856] font-rubik text-4xl text-left pb-12">
          Inicia sesión
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center w-[50%]">
          <label className=" font-medium pb-4">Correo</label>
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="example@email.com"
          ></input>
          <label className=" font-medium pt-8 pb-4">Contraseña</label>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" rounded-lg py-2 px-2 w-full"
            placeholder="password"
          ></input>
          <button type="submit"  className="mt-20 py-4 text-center w-full font-medium font-rubik text-white bg-[#FF8811] rounded-lg">
            Inicia sesión
          </button>
        </form>
      </div>
    </article>
  );
};

export default Log;
