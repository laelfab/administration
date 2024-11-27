import React from "react";
import { ProfileEnterprise } from "./profile-enterprise";
import NavItem from "@/components/features/menu/nav";

const Navigation = () => {
  return (
    <nav className="h-full pl-16 w-64 fixed z-20 flex flex-col  py-1">
      {/*PROFILE ENTERPRISE*/}
      <ProfileEnterprise>
        <button className="outline-none">
          <div className="h-[50px] flex flex-col items-start justify-center">
            <h4 className="text-sm capitalize font-sans font-semibold">
              artwork international
            </h4>
            <div className="text-[10px]  font-sans">
              <span className="uppercase font-bold text-muted-foreground">
                digital - pmco
              </span>{" "}
              |{" "}
              <span className="capitalize font-extralight text-red-600">
                gestion du bia
              </span>
            </div>
          </div>
        </button>
      </ProfileEnterprise>

      {/*LISTING MENU BY MODULE*/}
      <div className="flex-1 w-full py-4 ">
        <NavItem />
      </div>
    </nav>
  );
};

export default Navigation;
