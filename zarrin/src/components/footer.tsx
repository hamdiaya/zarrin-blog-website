import React from "react";
import Image from "next/image";
import Link from "next/link";
const footer = () => {
  return (
    <div className="xl:text-base text-[12px] flex flex-col place-items-center">
      <div className="xl:mb-[40px] mb-[28px] flex gap-4 py-0">
        <Image src="/logo.png" alt="logo" width={31.49} height={31.45} />
        <div className="xl:text-[33px] text-[24px] font-extrabold">Zarrin</div>
      </div>
      <div className="xl:mb-[40px] mb-[28px] flex xl:gap-11 gap-8 ">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="flex xl:mb-[40px] mb-[28px] xl:gap-4 gap-3">
        <Link
          href="#"
          className="bg-primary_color w-fit text-white rounded-full font-bold p-3 text-center"
        >
          <div>FB</div>
        </Link>
        <Link
          href="#"
          className="bg-primary_color w-fit text-white rounded-full font-bold p-3 text-center"
        >
          <div>IG</div>
        </Link>
        <Link
          href="#"
          className="bg-primary_color w-fit text-white rounded-full font-bold p-3 text-center"
        >
          <div>LN</div>
        </Link>
        <Link
          href="#"
          className="bg-primary_color w-fit text-white rounded-full font-bold p-3 text-center"
        >
          <div>YT</div>
        </Link>
      </div>
      <div className="w-full px-[24px] sm:px-[73px] xl:px-[102px]">
      <hr className="my-4 border-primary_color w-full " />
      </div>
      <div className="xl:py-[40px] py-[28px] text-center">
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </div>
    </div>
  );
};

export default footer;
