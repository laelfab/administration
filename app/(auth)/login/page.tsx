import FormLogin from "@/components/features/auth/form-login-component";
import React from "react";

export default function LoginPage() {
  return (
    <div className=" bg-stone-50 h-full flex justify-center">
      <div className="w-full px-10 md:w-3/6 lg:w-2/6 flex flex-col justify-center items-center">
        <div className="bg-red-200 size-12"></div>
        <h4 className="text-2xl uppercase font-extrabold font-sans pt-6 ">
          digital pmco
        </h4>
        <p className="text-muted-foreground text-sm pt-1 pb-10 ">
          Votre plateforme de gestion des risques, BIA,{" "}
        </p>
        <FormLogin />
      </div>
    </div>
  );
}
