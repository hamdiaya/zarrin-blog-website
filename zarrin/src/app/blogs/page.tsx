import BlogCard from "@/components/blogCard";
import React from "react";

const page = () => {
    const blogs = [
        {
          id: "1",
          imgUrl: "/Image Placeholder.png",
          type: "DEVELOPMENT",
          date: "23 March 2023",
          title: "How AI will Change the Future",
          content:
            "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
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
    
  return (
    <main>
      <div className="xl:text-base text-[11px] text-center md:px-[234px] xl:px-[350px] px-[29px] xl:pt-[77px] md:pt-[45px] pt-[39px] ">
        <h1 className="xl:text-base text-[11px] uppercase font-bold  text-gray-700 tracking-wider xl:pb-[25px] sm:pb-[17px] pb-[12px] ">
          OUR BLOGS
        </h1>
        <h5 className="xl:text-[48px] sm:text-[33px] text-[24px] font-bold text-center xl:pb-[25px] sm:pb-[17px] pb-[12px]">
          Find our all blogs from here
        </h5>
        <p className="text-text_gray2">
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 gap-10 px-[24px] sm:px-[73px] xl:px-[102px] ">
      {blogs.map((blog) => {
          return (
            <BlogCard
              id={blog.id}
              imgUrl={blog.imgUrl}
              title={blog.title}
              type={blog.type}
              date={blog.date}
              content={blog.content}
            />
          );
        })}
      </div>
    </main>
  );
};

export default page;
