import Image from "next/image";
import React from "react";

const mainRecentPost = () => {
  return (
    <div className="sm:flex  sm:gap-10  ">
      <div className="mb-4 sm:mb-0 w-full min-h-[200px] sm:w-[511px] sm:h-[327px] xl:w-[712px] xl:h-[456px] container relative ">
        <Image src="/Image Placeholder (1).png" alt="reent post" fill={true} />
      </div>
      <div className=" flex flex-col justify-between">
        <div className="xl:text-[12px] text-[8px] flex gap-2">
          <h1 className="font-bold">DEVELOPMENT</h1>
          <h1 className="text-text_gray font-medium">16 March 2023</h1>
        </div>
        <h6 className="mt-4 sm:mt-0 text-[22px] max-w-full font-bold sm:max-w-[450px] xl:text-[32px] xl:max-w-[464px] text-justify">
          How to make a Game look more attractive with New VR & AI Technology
        </h6>
        <p className="mb-4 sm:mb-0 mt-4 sm:mt-0 xl:max-w-[464px] xl:text-base sm:max-w-[450px] sm:text-[11px] max-w-full  text-justify">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <button className=" text-primary_color  border border-primary_color font-bold rounded-lg bg-white text-[10px] xl:text-[14px] px-[20px] py-[6px] xl:px-[28px] xl:py-[9px] w-fit">
            Read more
          </button>
      </div>
    </div>
  );
};

export default mainRecentPost;
