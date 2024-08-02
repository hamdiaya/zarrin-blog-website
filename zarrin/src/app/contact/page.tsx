import ContactCard from "@/components/contactCard";
import ContactForm from "@/components/contactForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main >
      <div className="text-center md:px-[200px] xl:px-[350px] px-[29px] xl:pt-[77px] md:pt-[45px] pt-[39px]">
        <h5 className="xl:leading-[64px] xl:text-[48px] sm:text-[33px] text-[24px] font-bold text-center xl:pb-[25px] sm:pb-[17px] pb-[12px]">
          Get in Touch
        </h5>
        <p className="text-text_gray2">
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </p>
      </div>
      <div className=" mt-10 sm:grid sm:grid-cols-3 grid gap-10 xl:px-[104px] sm:px-[72px] px-[24px]">
        <ContactCard type="Office" address="Victoria Street, London, UK" />
        <ContactCard type="Email" address="hello@zarrin.com" />
        <ContactCard type="Phone" address="(001) 2342 3451" />
      </div>
      <div >
        <div className="  hidden sm:block xl:mt-[50px] sm:mt-[30px] mt-[20px] sm:mb-0  sm:h-[327px]   xl:h-[456px] w-full relative ">
          <Image src="/Rectangle 1086.png" alt="map" fill={true} />
        </div>
        <div className="sm:hidden xl:mt-[50px] sm:mt-[30px] mt-[20px] sm:mb-0 min-h-[300px]  xl:h-[456px] w-full relative ">
          <Image src="/Rectangle 1086 (1).png" alt="map" fill={true} />
        </div>
        <div className="mt-10 xl:px-[104px] sm:px-[72px] px-[24px]  ">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default page;
