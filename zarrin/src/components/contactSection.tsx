import React from "react";

const contactSection = () => {
  return (
    <div className="xl:mt-[191px] xl:mb-[51px] sm:mt-[137px] sm:mb-[37px] mt-[96px] mb-[30px] bg-primary_color xl:px-[300px] md:px-[100px] sm:px-[60px] px-[46px] xl:py-[100px] sm:py-[80px] py-[70px] ">
      <div className="xl:mb-10 sm:mb-5 mb-2 text-white font-bold xl:text-[52px] sm:text-[37px] text-[24px] text-center">
        Get our stories delivered From us to your inbox weekly.
      </div>
      <div className="xl:mb-10 sm:mb-5  mb-2 sm:flex sm:flex-row flex flex-col place-content-center  gap-2 justify-center">
        <div className="">
          <input
            type="text"
            placeholder="Your Email"
            className="h-full text-text_gray xl:py-[19px] xl:pl-[23px] sm:py-[12px] sm:pl-[16px] py-[11px] pl-[16px] sm:text-[11px] xl:text-base text-[10px] rounded-md w-full"
          />
        </div>
        <button className="border rounded-md text-white xl:text-[18px] sm:text-[12px] text-[11px] xl:px-[32px] xl:py-[15px] sm:px-[22px] sm:py-[9px] px-[21px] py-[8px] font-bold ">
          Get Started
        </button>
      </div>
      <div className="xl:text-base text-[11px] text-gray-300 text-center">
        Get a response tomorrow if you submit by 9pm today. If we received after
        9pm will get a reponse the following day.
      </div>
    </div>
  );
};

export default contactSection;
