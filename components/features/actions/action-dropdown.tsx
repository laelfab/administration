"use client";
import { logoutAction } from "@/actions/auth.actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
interface ActionDropdownProps {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
}

const ActionDropdown = ({
  children,
  side,
  align,
  className,
}: ActionDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className={className} side={side} align={align}>
        <DropdownMenuItem>Mon Profil</DropdownMenuItem>
        <DropdownMenuItem onClick={() => logoutAction()}>
          Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionDropdown;
