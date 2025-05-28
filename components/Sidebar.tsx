'use client'
import { useSidebarStore } from '@/context';
import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';
import { PiBookOpenTextBold } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { MdCancel } from "react-icons/md";
import NavLink from './NavLink';

const Sidebar = () => {


  const isOpen = useSidebarStore((state) => state.isOpen);

  const toggleSidebar  = useSidebarStore((state)=>state.toggleSidebar)

  

  return (
    <div className={`${isOpen? "block w-full":"hidden"} sticky inset-0 z-50 h-screen w-[13.5%] min-w-[180px] bg-secondary shadow-md md:block`}>
      <div className='flex flex-col h-full p-4 md:p-6'>

        <button className='md:hidden flex justify-end ' onClick={toggleSidebar}><MdCancel /></button>

        {/* Logo */}
        <div className='flex justify-center mt-2 mb-8 w-full md:w-[180px]'>
          <Link href='/'>
            <Image src='/logo.png' alt='/images/Logo.png' width={180} height={180} className='w-full h-auto' />
          </Link>

          
        </div>

        {/* NavLinks */}
        <div className='flex flex-grow w-full  flex-col items-center md:items-start justify-between md:text-base lg:text-lg'>
          <div className='pr-6 md:pr-0 space-y-6 flex-col flex  md:pl-2'>
            <NavLink icon={<RxDashboard/>} href='/'>Overview</NavLink>
            <NavLink href='/task' icon={<PiBookOpenTextBold></PiBookOpenTextBold>}>Task</NavLink>
            <NavLink href='/mentors' icon={<CgProfile/>}>Mentors</NavLink>
            <NavLink href='/message' icon={<LuMessageSquareMore/>}>Message</NavLink>
            <NavLink href='/settings' icon={<IoSettingsOutline/>}>Settings</NavLink>


          </div>


          <HelpCard/>
        </div>

      </div>
      
    </div>
  );
}



const HelpCard = () => (

  <div className='mb-16 max-w-44 full h-44 md:h-50 lg:52 '>

    {/* Question Mark Bubble */}
    <div className='w-full flex justify-center '>
      <div className='bg-white h-11 w-11 rounded-full flex justify-center items-center z-20 absolute'>
        <div className='bg-black rounded-full h-9 w-9 flex justify-center items-center text-2xl text-white'>
          ?
        </div>
      </div>

      {/* Card Content */}
      <div className='w-full flex flex-col items-center mt-4 md:mt-6 lg:mt-8 rounded-md bg-gray-900 h-full'>
        <div className='text-white pt-8 pb-2 md:pb-3 lg:pb-4  text-xs md:text-sm  lg:text-base'>
          Help Center
        </div>
        <p className='text-white mb-2 md:mb-3 lg:mb-4 px-1 md-px-2 lg:px-4 md:text-xs lg:text-sm text-[10px] text-center'>
          Having trouble in learning? Please contact us for more questions
        </p>
        <Link href="/help" className='rounded-md bg-white py-2 px-4 md:py-2 md:px-1 lg:px-2 text-[10px] md:text-xs lg:text-sm mb-2  md:mb-6'>
          Go To Help Center
        
        </Link>


      </div>

    </div>

  </div>
);

export default Sidebar;
