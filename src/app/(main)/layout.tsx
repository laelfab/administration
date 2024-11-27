import HeaderPartial from "@/components/features/default/header-partial";
import ModuleIndex from "@/components/features/modules/index-module";
import MenuIndex from "@/components/features/nav-menu/index-menu";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full bg-slate-100">
      <ModuleIndex />
      <MenuIndex />
      <section className="pl-[256px] h-full">
        <HeaderPartial />
        <div className="py-8 px-6 bg-white border rounded-tl-2xl  h-[calc(100vh-50px)]">
          {children}
        </div>
      </section>
    </main>
  );
}
