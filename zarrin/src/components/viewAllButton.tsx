import React from 'react'
import Link from 'next/link'
const viewAllButton = () => {
  return (
    <Link href="/blogs" className=" text-white font-bold rounded-lg bg-primary_color text-[10px] xl:text-[14px] px-[34px] py-[11px] xl:px-[48px] xl:py-[16px] w-fit h-fit">
    View All
  </Link>
  )
}

export default viewAllButton