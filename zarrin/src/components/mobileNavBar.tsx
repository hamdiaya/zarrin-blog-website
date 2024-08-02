import React from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
const mobileNavBar = () => {
  return (
    <div className="block sm:hidden">
      <div className="w-full bg-white flex justify-between px-[30px] py-[20px]">
        <div className="flex gap-4 py-0">
          <Image src="/logo.png" alt="logo" width={31.49} height={31.45} />
          <div className="xl:text-[33px] text-[24px] font-extrabold">
            Zarrin
          </div>
        </div>
        <nav className="text-[34px]">
        <LuMenu />
        </nav>
      </div>
    </div>
  );
};

export default mobileNavBar;
