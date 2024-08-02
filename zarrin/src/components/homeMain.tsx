import React from "react";
import Image from "next/image";
import Link from "next/link";
const homeMain = () => {
  return (
    <div className=" bg-primary_color text-white min-h-screen max-w-screen  flex-auto place-content-center  px-[24px] sm:px-[73px] xl:px-[102px]">
      <div className="sm:flex sm:justify-between sm:flex-row flex flex-col place-content-between relative gap-5">
        <div className="flex flex-col place-content-between  ">
          <h1 className="text-[11px] xl:text-base font-bold mt-4 sm:mt-0">Featured post</h1>
          <div className="text-[36px] sm:text-[45px] xl:text-[64px] font-bold max-w-[289] sm:max-w-[400px] xl:max-w-[580px]">
            How AI will Change the Future
          </div>
          <p className="mb-4 md:mb-0 text-[11px] xl:text-base max-w-[298px] xl:max-w-[416px]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <Link href="/blogs/1" className="mb-3 sm:mb-0 mt-3 sm:mt-0 text-black font-bold rounded-lg bg-white text-[10px] xl:text-[14px] px-[34px] py-[11px] xl:px-[48px] xl:py-[16px] w-fit">
            Read more
          </Link>
        </div>

        <div className=" sm:flex sm:flex-col sm:h-auto mb-4 sm:mb-0 rounded-2xl xl:w-[650px] xl:h-[480px] md:w-[520px] md:h-[400px] h-[350px] w-full  container relative">
          <Image src="/Image Placeholder.png" alt="ai" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default homeMain;
