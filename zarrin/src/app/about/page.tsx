import React from "react";
import Image from "next/image";
import StrategyCard from "@/components/strategyCard";
const page = () => {
  return (
    <main className="flex flex-col place-items-center  ">
      <div className="xl:text-base text-[11px] text-center md:px-[200px] xl:px-[350px] px-[29px] xl:pt-[77px] md:pt-[45px] pt-[39px] ">
        <h1 className="xl:text-base text-[11px] uppercase font-bold  text-gray-700 tracking-wider xl:pb-[25px] sm:pb-[17px] pb-[12px] ">
          ABOUT US
        </h1>
        <h5 className="xl:leading-[64px] xl:text-[48px] sm:text-[33px] text-[24px] font-bold text-center xl:pb-[25px] sm:pb-[17px] pb-[12px]">
          Creative Blog Writting and publishing site
        </h5>
        <p className="text-text_gray2">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </div>
    <div className=" xl:mt-[50px] sm:mt-[30px] mt-[20px] sm:mb-0 min-h-[200px] sm:h-[327px]   xl:h-[456px] w-full relative ">
    <Image className="xl:px-[104px] sm:px-[72px] px-[24px]" src="/Image Placeholder (3).png" alt="about" fill={true}/>
    </div>
   <div className=" w-full xl:px-[104px] sm:px-[72px] px-[24px] ">
   <h1 className="  xl:text-base text-[11px] uppercase font-bold  text-gray-700 tracking-wider xl:pb-[32px] sm:pb-[23px] pb-[12px] xl:mt-[70px] sm:mt-[40px] mt-[20px] text-start w-full">How we work?</h1>
   <h2 className="xl:leading-[64px] xl:text-[48px] sm:text-[33px] text-[24px] font-bold text-start xl:pb-[25px] sm:pb-[17px] pb-[12px]">I will show you how our team works:</h2>
   </div>
   <div className="sm:grid sm:grid-cols-3 gap-10 xl:px-[104px] sm:px-[72px] px-[24px]">
    <StrategyCard number="01" strategy="Brainstorming" desc="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated"/>
    <StrategyCard number="02" strategy="Analysing" desc="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line."/>
    <StrategyCard number="03" strategy="News Publishing" desc="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."/>
   </div>
    </main>
  );
};

export default page;
