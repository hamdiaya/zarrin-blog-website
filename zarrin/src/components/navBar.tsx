import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function navBar() {
  return (
    <div className="sm:block hidden">
      <div className="bg-white w-full flex justify-between  xl:px-[102px] xl:py-[27px] place-items-center px-[74px] py-[15px] ">
        <Link href="/" className="flex gap-4 py-0">
          <Image src="/logo.png" alt="logo" width={31.49} height={31.45} />
          <div className="xl:text-[33px] text-[24px] font-extrabold">
            Zarrin
          </div>
        </Link>

        <nav className="flex xl:gap-14 gap-10 py-0 xl:text-base text-[11px]">
          <div className="flex xl:gap-14 gap-10 place-items-center">
            <Link href="/blogs">Blog</Link>
            <Link href="/about">About</Link>
          </div>
          <Link
            href="/contact"
            className="bg-primary_color text-white xl:px-[48px] xl:py-[16px] px-[34px] py-[11px] rounded-lg"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
