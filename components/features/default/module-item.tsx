import React from "react";
import ActionTooltip from "@/components/features/actions/action-tooltip";
import { cn } from "@/lib/utils";
interface ModuleItemProps {
  name: string;
}
const ModuleItem = ({ name }: ModuleItemProps) => {
  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-red-500 rounded-r-full transition-all w-[2px] h-[20px]"
          )}
        />
        <div className="size-[40px] relative  mx-2 border border-stone-300 flex items-center justify-center rounded-[16px] bg-white"></div>
      </button>
    </ActionTooltip>
  );
};

export default ModuleItem;
