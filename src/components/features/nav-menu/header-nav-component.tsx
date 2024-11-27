import { Separator } from "@/components/ui/separator";
import React from "react";
interface HeaderNavProps {
  name: string;
}
function HeaderNavComponent({ name }: HeaderNavProps) {
  return (
    <header className="w-full h-[50px] p-1 flex flex-col items-start justify-center">
      <h4 className="font-thin text-xs p-0">{name}</h4>
      <div className="text-[8px] text-xs">
        <span className="font-semibold uppercase">digital-pmco</span>
        <span className="mx-1">|</span>
        <span className="font-extralight uppercase">
          diagnotic de vulnérabilité
        </span>
      </div>
    </header>
  );
}

export default HeaderNavComponent;
