import React from "react";
import LogoComponent from "./logo-component";
import ModuleComponent from "./module-component";
import SettngComponent from "./setting-component";
import { SettingsIcon } from "lucide-react";

export default function ModuleIndex() {
  return (
    <aside className="h-full w-[50px] z-30 fixed inset-y-0">
      <div className="h-full w-full flex flex-col">
        {/**--- IMAGE LOGO ---**/}
        <LogoComponent letter={"a"} />
        {/*****--- END IMAGE LOGO ---*****/}
        {/**--- LIST MODULE ---**/}
        <ModuleComponent />
        {/*****--- END LIST MODULE  ---*****/}

        {/**--- LIST MODULE ---**/}
        <SettngComponent label="Paramètres">
          <SettingsIcon size={18} />
        </SettngComponent>
        {/*****--- END LIST MODULE  ---*****/}
      </div>
    </aside>
  );
}
