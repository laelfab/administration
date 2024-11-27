import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { menuItems } from ".";

export default function NavItem() {
  return (
    <nav>
      {menuItems.map((data, i) => (
        <div className="w-full mb-1" key={i}>
          <ul className="flex flex-col space-y-1">
            {data.items.map((item, k) => (
              <li key={k}>
                {item?.name !== undefined && (
                  <Link href={`${item.href}`} className="text-sm">
                    {item.name}
                  </Link>
                )}
                {item?.children !== undefined && (
                  <div className="">
                    <div className="w-full flex items-center justify-between pr-2 inset-y-0 left-0">
                      {item?.title !== undefined && (
                        <>
                          <span className="inline-block text-sm">
                            {item.title}
                          </span>
                          <button className="size-4 p-[2px] outline-none bg-white rounded-full border border-stone-300 flex justify-center items-center flex-row">
                            <PlusIcon className="size-3" />
                          </button>
                        </>
                      )}
                    </div>
                    <div className="pt-2 w-full">
                      <ul className="flex flex-col border-l space-y-2 border-stone-300">
                        {item.children.map((child, q) => (
                          <li key={q}>
                            <div className="flex flex-row space-x-2 justify-start items-center">
                              <Separator className="h-[2px] w-2" />
                              <Link href={child.href} className="text-sm">
                                {child.name}
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
