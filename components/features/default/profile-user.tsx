import React from "react";
import Image from "next/image";
import ActionDropdown from "@/components/features/actions/action-dropdown";
interface ProfileUserProps {
  image: string | null;
  name: string;
  profile: string;
  role: string;
}
const ProfileUser = ({ image, name, profile, role }: ProfileUserProps) => {
  return (
    <ActionDropdown side="bottom" align="end" className="w-52">
      <button className="outline-none flex flex-row items-center gap-x-2 relative">
        <div className="size-[40px] rounded-[16px] p-[2px] flex flex-row justify-center items-center  border border-stone-300 bg-white overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={image}
              width={50}
              height={50}
              className="rounded-[16px] object-cover"
            />
          ) : (
            <span className="font-sans text-2xl  font-extrabold text-red-700">
              {" "}
              {name.charAt(0).toLocaleUpperCase()}{" "}
            </span>
          )}
        </div>
        {/*INFO (profile name) USER*/}
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-sm capitalize font-sans font-semibold">{name}</h4>
          <div className="text-[10px]  font-sans">
            <span className="uppercase font-bold text-muted-foreground">
              {profile}
            </span>{" "}
            |{" "}
            <span className="capitalize font-extralight text-red-600">
              {role}
            </span>
          </div>
        </div>
      </button>
    </ActionDropdown>
  );
};

export default ProfileUser;
