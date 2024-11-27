import React from "react";
import TooltipAction from "./tooltip-action";
import { cn } from "@/lib/utils";
interface ModuleItemProps {
  label: string;
  children: React.ReactNode;
}
function ModuleItem({ label, children }: ModuleItemProps) {
  return (
    <TooltipAction label={label} side="right" align="center">
      <button className="relative flex item-center justify-center mb-4">
        {/* <div
          className={cn(
            "absolute left-0 bg-red-500  transition-all w-[2px] h-[20px]"
          )}
        ></div> */}
        <div className="size-[40px] relative mx-2  border border-slate-200 flex items-center justify-center rounded-full bg-white">
          {children}
        </div>
      </button>
    </TooltipAction>
  );
}

export default ModuleItem;
