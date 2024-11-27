import React from "react";
import ActionTooltip from "@/components/features/actions/action-tooltip";
interface ButtonActionProps {
  children: React.ReactNode;
  label: string;
}

const ButtonActionComponent = ({ children, label }: ButtonActionProps) => {
  return (
    <ActionTooltip side="right" align="center" label={label}>
      <button>
        <div className="size-[35px] mx-2 border border-stone-300 flex items-center justify-center rounded-full bg-stone-200">
          {children}
        </div>
      </button>
    </ActionTooltip>
  );
};

export default ButtonActionComponent;
