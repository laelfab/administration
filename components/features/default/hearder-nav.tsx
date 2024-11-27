import React from "react";
import ProfileUser from "@/components/features/default/profile-user";
import { auth } from "@/auth";

const HearderNav = async () => {
  const session = await auth();
  return (
    <div className="w-full h-[50px] flex flex-row items-center px-4">
      <div className="flex-1"></div>
      <div className="flex items-center gap-x-2">
        {/* <div className="size-[35px] rounded-full mx-2 border border-stone-300 bg-white" /> */}
        <ProfileUser
          image="/user-profile.png"
          name={session?.user.name as string}
          profile="risk manager"
          role="admin"
        />
      </div>
    </div>
  );
};

export default HearderNav;
