'use client'
import { HeaderProps } from '@/types';
import Link from 'next/link';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineCircleNotifications } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { TbCategoryMinus } from "react-icons/tb";
import { CgSortAz } from "react-icons/cg";
import { IoOptionsOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useProfileStore, useSidebarStore } from '@/context';
import Image from 'next/image';

const Header = ({ backgroundColor = "", header_Text, text, showComponent, placeholder, sortText,showName }: HeaderProps) => {
  

  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)
  const { name, photo,comma } = useProfileStore()
  const username = name || 'User'
  const profilePic = photo || '/avatar.jpg' 

  return (

      <header className =  {`flex flex-col shadow-m w-full ${backgroundColor}`}>
        <div className='flex mt-2 mb-4 justify-between w-full '>
        <div className='flex flex-col gap-2'>
          <div className='md:hidden border-2 border-primary rounded-full w-8 h-8 items-center flex justify-center'><button onClick={toggleSidebar}><IoReorderThreeOutline/></button></div>
          <h1 className='font-bold text-md md:text-lg '>{header_Text}{showName && comma} {showName && username}</h1>
          <p className='text-gray-500 text-xs md:text-sm'>{text}</p>
          </div>
          <div className='flex mt-4  flex-row items-center gap-6'>
            <Link href="/notification" className='text-2xl md:text-3xl' >
              <div className=''></div>
              <MdOutlineCircleNotifications />
            </Link>
            <Link className='text-2xl  md:text-3xl' href="/profile">
            <div className='relative w-[50px] h-[50px] rounded-full overflow-hidden'>
              <Image src={profilePic} alt='Profile' fill className='object-cover' />
            </div>

            </Link>
          </div>
      </div>
      {
        showComponent && (
          <div className='flex items-center w-full flex-row justify-between  mb-2 min-w-[260px]'>
            {/* Search */}
            <div className='flex flex-row items-center'>
              <div className='border-primary border-2 rounded-md flex flex-row items-center px-2 md:gap-20'>
                <input className='p-2 px-0 md:px-6 outline-none text-sm md:text-base ' type="text" placeholder={placeholder} />
                <CiSearch className='text-2xl text-gray-400' />
              </div>
            </div>

            <div className='flex flex-row items-center gap-4'>
              <div className='hidden md:flex gap-1 items-center border-2 border-primary rounded-md md:p-2 text-sm md:text-base '>
                <TbCategoryMinus />
                <span>Category</span>
              </div>
              <div className='hidden md:flex flex-row gap-1 items-center border-2 border-primary rounded-md md:p-2 text-sm md:text-base'>
                <CgSortAz />
                <button>SortBy:<span>{sortText}Popular</span></button>
              </div>
              <div className='
              flex md:hidden border-2 border-primary items-center rounded-md p-[10px] text-sm'>
                <IoOptionsOutline/>
              </div>
            </div>
          </div>
        )
      }
      
      </header>

    
  );
}

export default Header;
