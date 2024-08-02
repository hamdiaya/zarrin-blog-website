import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogCard = ({
  imgUrl,
  type,
  date,
  title,
  content,
  id,
}: {
  imgUrl: string;
  type: string;
  date: string;
  title: string;
  content: string;
  id:string
}) => {
  return (
    <div className="xl:max-w-[400px] sm:max-w-[287px] max-w-full " id={id}>
      <div className="rounded-lg xl:max-w-[400px] xl:h-[360px] md:max-w-[300px] md:h-[280px] sm:max-w-[287px] sm:h-[258px] max-w-full h-[258px] relative mb-[20px]">
        <Image src={imgUrl} alt="blog" fill={true} />
      </div>
      <div>
        <div className="xl:text-[12px] text-[8px] flex gap-2">
          <h1 className="font-bold">{type}</h1>
          <h1 className="text-text_gray font-medium">{date}</h1>
        </div>
        <h6 className=" mb-2mt-4 sm:mt-0 text-[22px]  font-bold  xl:text-[32px] text-justify">
         {title}
        </h6>
        <p className=" line-clamp-3 mb-4 sm:mb-0 mt-4 sm:mt-0  xl:text-base sm:text-[11px]  text-justify">
          {content}
        </p>
        <Link href={`/blogs/${id}`} className="underline font-bold text-primary_color xl:text-[18px] text-[12px]">
          Read More ...
        </Link>
      </div>
    </div>
  );
};

export default blogCard;
