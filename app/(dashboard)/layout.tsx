import React from "react";
import ModuleLayout from "./module";
//import { auth } from "@/auth";
import Navigation from "@/components/features/default/navigation";
import HearderNav from "@/components/features/default/hearder-nav";

interface PmcoLayoutProps {
  children: React.ReactNode;
}
export default async function PmcoLayout({ children }: PmcoLayoutProps) {
  return (
    <main className="h-full bg-stone-100">
      <ModuleLayout />
      <Navigation />
      <section className="pl-[256px] h-full">
        <HearderNav />
        <div className="bg-white border rounded-tl-2xl  h-[calc(100vh-50px)]">
          {children}
        </div>
      </section>
    </main>
  );
}
