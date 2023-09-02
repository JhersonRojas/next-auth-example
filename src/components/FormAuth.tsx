"use client"

// Paquetes de Next y React
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";

type FormValues = {
  user: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.user ? values : {},
    errors: !values.user
      ? {
        user: {
          type: "required",
          message: "El usuario es obligatorio",
        }
      }
      : {},
  };
};

export default function FormAuth() {
  const { register, handleSubmit } = useForm<FormValues>({ resolver });

  const [error, setError] = useState("");

  const router = useRouter();

  const handleAuth = async (formdata: FormValues) => {

    const ressponse = await signIn("credentials-auth", {
      user: formdata.user,
      password: formdata.password,
      redirect: false
    });

    if (ressponse?.error)
      return setError(ressponse.error as string);

    if (ressponse?.ok)
      return router.push("/dashboard");
  };

  const handleGoogle = async () => {
    await signIn("google", {
      callbackUrl: "/dashboard",
      redirect: false
    });
  };

  return (
    <div
      className="bg-slate-900 w-min h-min p-10 rounded"
    >
      <form
        onSubmit={handleSubmit(handleAuth)}
        className="w-min h-min"
      >
        {
          error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
        }
        <h1 className="text-3xl font-bold mb-7">
          Inicio de sesión
        </h1>

        <label className="text-white">
          Usuario
        </label>
        <input
          required
          type="text"
          {...register("user")}
          placeholder="usuario01"
          className="bg-zinc-600 px-4 py-2 mt-1 mb-4 rounded"
        />

        <label className="text-white">
          Contraseña
        </label>
        <input
          required
          type="password"
          {...register("password")}
          placeholder="*******"
          className="bg-zinc-600 px-4 py-2 mt-1 rounded"
        />

        <button className="transition-all bg-zinc-700 hover:bg-zinc-800 text-white w-full p-3 mt-4 rounded">
          Ingresar
        </button>
      </form>
      <button onClick={handleGoogle} className="transition-all bg-white hover:bg-gray-200 text-black w-full p-4 mt-4 rounded">
        Acceder con Google
      </button>
    </div>
  )
}
