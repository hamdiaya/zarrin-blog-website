import React from 'react'
import BlogCard from './blogCard'
import ViewAllButton from './viewAllButton'


const popularPost = () => {
  const blogs=[
    {
      id:"1",
      imgUrl:'/Image Placeholder (1).png',
      type:"DEVELOPMENT",
      date:"23 March 2023",
      title:"Train Or Bus Journey?Which one suits?",
      content:"The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person "
    },
    {
      id:"2",
      imgUrl:'/Image Placeholder (1).png',
      type:"DEVELOPMENT",
      date:"23 March 2023",
      title:"Train Or Bus Journey?Which one suits?",
      content:"The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person "
    },
    {
      id:"3",
      imgUrl:'/Image Placeholder (1).png',
      type:"DEVELOPMENT",
      date:"23 March 2023",
      title:"Train Or Bus Journey?Which one suits?",
      content:"The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person "
    },
    {
      id:"4",
      imgUrl:'/Image Placeholder (1).png',
      type:"DEVELOPMENT",
      date:"23 March 2023",
      title:"Train Or Bus Journey?Which one suits?",
      content:"The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person "
    },
    {
      id:"5",
      imgUrl:'/Image Placeholder (1).png',
      type:"DEVELOPMENT",
      date:"23 March 2023",
      title:"Train Or Bus Journey?Which one suits?",
      content:"The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person "
    }
  ]
    return (
        <section className='px-[24px] sm:px-[73px] xl:px-[102px]   '>
         <div className='mt-4 mb-4 text-[20px] sm:text-[34px] xl:text-[48px] font-bold flex justify-between place-items-center'>
          <h1>Popular Post </h1>
          <ViewAllButton/>
         </div>
          
      <div className='mt-10 grid md:grid-cols-3 sm:grid-cols-2 gap-10 '>
      {blogs.map(blog=>{
              return <BlogCard id={blog.id} imgUrl={blog.imgUrl} title={blog.title} type={blog.type} date={blog.date} content={blog.content} />
      })}
      
      </div>
        </section>
       )
}

export default popularPost