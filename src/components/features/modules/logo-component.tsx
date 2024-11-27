import Image from "next/image";
import React from "react";
interface LogoProps {
  pathImage?: string;
  letter: string;
}
function LogoComponent({ pathImage, letter }: LogoProps) {
  return (
    <div className="w-full h-[50px] px-4 flex justify-center items-center">
      {pathImage ? (
        <Image
          src={pathImage}
          alt={pathImage}
          width={50}
          height={50}
          className="rounded-[16px] object-cover"
        />
      ) : (
        <span className="font-black text-2xl text-center block uppercase">
          {letter}
        </span>
      )}
    </div>
  );
}

export default LogoComponent;
