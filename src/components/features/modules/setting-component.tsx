import TooltipAction from "@/components/core/tooltip-action";
import React from "react";
interface ButtonActionProps {
  children: React.ReactNode;
  label: string;
}

const SettngComponent = ({ children, label }: ButtonActionProps) => {
  return (
    <TooltipAction side="right" align="center" label={label}>
      <button>
        <div className="size-[40px] mx-2 border border-slate-200 flex items-center justify-center rounded-full bg-white">
          {children}
        </div>
      </button>
    </TooltipAction>
  );
};

export default SettngComponent;
