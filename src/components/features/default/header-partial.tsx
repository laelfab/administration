import React from "react";

const HeaderPartial = async () => {
  return (
    <div className="w-full h-[50px] flex flex-row items-center px-4">
      <div className="flex-1"></div>
      <div className="flex items-center gap-x-2">
        {/* <div className="size-[35px] rounded-full mx-2 border border-stone-300 bg-white" /> */}
      </div>
    </div>
  );
};

export default HeaderPartial;
