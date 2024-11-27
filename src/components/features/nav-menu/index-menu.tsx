import React from "react";
import HeaderNavComponent from "./header-nav-component";
import NavComponent from "./nav-component";

export default function MenuIndex() {
  return (
    <nav className="h-full pl-[50px] w-64 z-20 fixed">
      <HeaderNavComponent name={"Artworks international"} />
      <NavComponent />
    </nav>
  );
}
