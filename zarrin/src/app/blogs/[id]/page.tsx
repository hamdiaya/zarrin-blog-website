"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PopularPost from "@/components/popularPost";
const Page = () => {
  const blogs = [
    {
      id: "1",
      imgUrl: "/Image Placeholder.png",
      type: "DEVELOPMENT",
      date: "23 March 2023",
      title: "How AI will Change the Future",
      content:
        "The choice between a train or bus journey depends The choice between a train or bus journey depends  The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends vvvvvThe choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends vvvThe choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    },
    {
      id: "2",
      imgUrl: "/Image Placeholder (1).png",
      type: "DEVELOPMENT",
      date: "23 March 2023",
      title: "Train Or Bus Journey?Which one suits?",
      content:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    },
    {
      id: "3",
      imgUrl: "/Image Placeholder (1).png",
      type: "DEVELOPMENT",
      date: "23 March 2023",
      title: "Train Or Bus Journey?Which one suits?",
      content:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    },
    {
      id: "4",
      imgUrl: "/Image Placeholder (1).png",
      type: "DEVELOPMENT",
      date: "23 March 2023",
      title: "Train Or Bus Journey?Which one suits?",
      content:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    },
    {
      id: "5",
      imgUrl: "/Image Placeholder (1).png",
      type: "DEVELOPMENT",
      date: "23 March 2023",
      title: "Train Or Bus Journey?Which one suits?",
      content:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    },
  ];

  const path = usePathname();
  const id = path.split("/")[2];

  const blog = blogs.map((blog) => {
    if (blog.id == id) {
      return blog;
    } else {
      return null;
    }
  });
  const index = parseInt(id) - 1;
  return (
    <main>
      <div className="flex flex-col ">
        <div className=" xl:px-[206px] sm:px-[74px] px-[24px] xl:mt-[84px] sm:mt-[23px] mt-[48px]  ">
          <div className=" xl:text-[12px] text-[8px] flex gap-2 xl:mb-[33px] sm:mb-[27px] mb-[19px] ">
            <h1 className="font-bold">
              {blog != null ? blog[index]?.type : ""}
            </h1>
            <h1 className="text-text_gray font-medium">
              {blog != null ? blog[index]?.date : ""}
            </h1>
          </div>
          <h6 className=" mb-2mt-4 sm:mt-0 text-[22px]  font-bold  xl:text-[32px] text-justify">
            {blog[index]?.title}
          </h6>
        </div>

        {blog != null ? (
          <div className="xl:mt-[50px] sm:mt-[30px] mt-[20px] sm:mb-0 min-h-[200px] w-full sm:h-[327px]  xl:h-[456px]  relative ">
            <Image
              className="xl:px-[206px] sm:px-[74px] px-[24px] rounded-lg "
              src={blog[index]!.imgUrl}
              alt="post"
              fill={true}
            />
          </div>
        ) : (
          <div></div>
        )}
        <p className=" xl:mt-[60px] sm:mt-[40px] mt-[25px] xl:text-base text-[13px] text-start xl:px-[206px] sm:px-[74px] px-[24px]">
          {blog[index]?.content}
        </p>
      </div>
      <section>
        <PopularPost />
      </section>
    </main>
  );
};

export default Page;
