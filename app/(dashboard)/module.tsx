import React from "react";
import { PlusCircle, Settings } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ButtonActionComponent from "@/components/features/default/button-action";
import ModuleItem from "@/components/features/default/module-item";

export default function ModuleLayout() {
  return (
    <div className="h-full w-[55px] z-30 fixed inset-y-0">
      <div className="h-full w-full py-1 space-y-4 flex flex-col items-center">
        {/**--- BUTTON ADD NEW MODULE ---**/}
        <div className="w-full h-[50px] flex flex-col justify-center items-center">
          <ButtonActionComponent label="Nouveau module">
            <PlusCircle className="text-red-500" size={18} />
          </ButtonActionComponent>
        </div>
        {/**--- END BUTTON ADD NEW MODULE ---**/}
        {/**--- LIST DES MODULES ---**/}
        <ScrollArea className="flex-1 w-full">
          <ModuleItem name="Gestion du BIA" />
        </ScrollArea>
        {/**--- END LIST DES MODULES ---**/}

        <div className="mt-auto flex flex-col gap-y-2 pb-5">
          <ButtonActionComponent label="Paramètres">
            <Settings className="text-black hover:text-red-500" size={18} />
          </ButtonActionComponent>
        </div>
      </div>
    </div>
  );
}
