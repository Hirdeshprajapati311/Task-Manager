'use client'
import { PersonChatProps } from '@/types';
import React, { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { dummyChats } from '../../db/data'
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiVideoOnAiLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { RiAttachmentLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";

const Message = () => {

  const [selectedChat, setSelectedChat] = useState<PersonChatProps | null>(dummyChats[0])

  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[])


  useEffect(() => {
    if (isClient && windowWidth >= 768 && !selectedChat) {
      setSelectedChat(dummyChats[0]);
    }
  },[windowWidth])



  return (
    <div className='w-full flex flex-row h-full'>
      {/* Left Chat Side View */}
      {
        (isClient && windowWidth >= 768) || !selectedChat? (
          <div className='w-full min-w-[320px] overflow-y-auto scrollbar-hide  md:w-[450px]  bg-secondary p-4'>
            <Search />

            <div>
              {dummyChats.map((chats) => (<AllChat key={chats.id} chatName={chats.chatName} message={chats.message} timestamps={chats.timestamps} read={chats.read} onClick={() => setSelectedChat(chats)} />))}
            </div>
          </div>
        ):null
      }
      {/* Right side Chat view */}
      {
        selectedChat && (
          <div className=' overflow-y-hide bg-primary w-full'><PersonChat onBack={()=>setSelectedChat(null)} chatName={selectedChat.chatName} read={selectedChat.read} /></div>
        )
      }
      
      
    </div>
  );
}

export default Message;


const Search = () => {
  
  return (
    <div className='flex flex-row items-center w-full mb-2'>
      <div className='border-primary w-full border-2 rounded-md flex flex-row items-center px-2 justify-between'>
        <input className='p-2 px-0 md:px-6 outline-none text-sm md:text-base ' type="text" placeholder="Search" />
        <CiSearch className='text-2xl text-gray-400' />
      </div>
    </div>
    
  )
}

interface AllChatProps extends PersonChatProps{
  onClick:()=>void
}

const AllChat = ({ chatName, message, timestamps, read,onClick }: AllChatProps) => {
  

  return (
    <div className='flex flex-row items-center p-2 overflow-y-auto justify-between w-full  border-b-2 border-primary cursor-pointer'  onClick={onClick}>
      <div className='flex flex-row items-center  gap-4'>
        <div className='text-4xl'><BsPersonCircle /></div>
        <div className='flex flex-col gap-1'>
          <span className='font-semibold text-sm'>{chatName}</span>
          <p className='font-light text-[12px] max-w-[150px] truncate'>{message}</p>
        </div>
      </div>
      <div className='flex flex-col justify-between gap-2 items-end'>
        <div className='text-[12px] text-gray-500'>{timestamps}</div>
        <div>{read ? (<div className='text-primary/500'><IoCheckmarkDoneSharp /></div>) : (<div className='h-2 w-2 rounded-full bg-red-600'></div>)}
          
        </div>
      </div>
      
    </div>
  )
  
}




const PersonChat = ({chatName,read,onBack}:PersonChatProps) => {
  return (
    <div className='border-l-2 border-primary flex flex-col justify-between h-full w-full'>
      {/* Chat header */}
      <div className='w-full bg-secondary flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2 w-full p-4'>
          {
            onBack && (
              <button onClick={onBack}><IoIosArrowRoundBack className='text-3xl md:hidden cursor-pointer' /></button >
            )
          }
          <BsPersonCircle className='text-5xl' />
          <div className='flex flex-col gap-1'>
            <span className='font-semibold md:text-base text-sm'>{chatName}</span>
            <div className='flex flex-row gap-2 items-center'>
              {
                read ? (<div className='h-2 w-2 rounded-full bg-green-400'></div>) : (<div className='h-2 w-2 rounded-full bg-red-500'></div>)
              }
              <p className='md:text-base text-sm'>{read?"Online":"Offline"}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-center gap-6 p-8'>
          <button className='rounded-full border-2 border-primary p-2 cursor-pointer'>
            <RiVideoOnAiLine className='text-xl md:text-2xl ' />
          </button>
          <button className='rounded-full border-2 border-primary p-2 cursor-pointer'><IoCallOutline className='text-xl md:text-2xl' /></button>
          
        </div>
      </div>

      {/* Chat messages Space */}
      <div className='overflow-y-auto flex-col flex-1 flex p-6 scrollbar-hide'>
      
        <div className='text-center text-gray-500 text-sm my-4 gap-6'>Today</div>

        {/* Sample messages - will exceed screen height */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-lg p-3 ${i % 2 === 0 ? 'bg-blue-100 self-start' : 'bg-green-100 self-end'}`}
          >
            <div className='font-medium'>{i % 2 === 0 ? 'Friend' : 'You'}</div>
            <p className='p-1'>Message #{i + 1} - Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='text-xs text-gray-500 mt-1 text-right'>
              {new Date(Date.now() - (i * 60000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>))}
        

      </div>

      {/* Chat Window */}
      <div className='flex w-full flex-row p-4 px-8 md:px-16 bg-secondary'>
        <input type="text" placeholder='Send your message' className='w-full outline-none border-none'  />
        <div className=' flex flex-row gap-4 '>
          <button className='cursor-pointer'><RiAttachmentLine className='text-gray-600 text-2xl' /></button>
          <button className='bg-primary/500 p-2 rounded-xl cursor-pointer'><RiSendPlaneFill className='text-white text-2xl' /></button>
        </div>
      </div>



    </div>
  )
}