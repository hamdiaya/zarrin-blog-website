'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
const mobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <div className="block sm:hidden relative">
      <div className="w-full bg-white flex justify-between px-[30px] py-[20px] ">
        <div className="flex gap-4 py-0">
          <Image src="/logo.png" alt="logo" width={31.49} height={31.45} />
          <div className="xl:text-[33px] text-[24px] font-extrabold">
            Zarrin
          </div>
        </div>
        <nav className="text-[34px]">
        <LuMenu onClick={toggleMenu} />
        </nav>
       
      </div>
      <div className={` ${isOpen ? 'block' : 'hidden'} bg-white  sticky   `}>
          <Link href="/" className="block px-4 py-2 " onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="block px-4 py-2" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="block px-4 py-2" onClick={toggleMenu}>Contact</Link>
          <Link href="/blogs" className="block px-4 py-2" onClick={toggleMenu}>Blog</Link>
        </div>
    </div>
  );
};

export default mobileNavBar;
