"use client";
import { settingNavItems } from "@/lib/configs/menu/settings";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavComponent() {
  const pathname = usePathname();
  const [isRoute, setIsRoute] = useState<string>(pathname);
  useEffect(() => {
    setIsRoute(pathname);
  }, [pathname]);
  return (
    <section className="w-full flex-1 p-4">
      {settingNavItems.map((nav, index) => (
        <div className="w-full mb-1" key={index}>
          <ul className="flex flex-col gap-y-1">
            {nav.items.map((item, indexItem) => {
              const isActive = isRoute === item.route ? true : false;
              return (
                <li
                  className={cn(
                    "text-sm p-2 transition hover:text-blue-600 text-slate-800",
                    isActive && "bg-white text-blue-600 hover:opacity-100"
                  )}
                  key={indexItem}
                >
                  <Link href={item.route}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default NavComponent;
