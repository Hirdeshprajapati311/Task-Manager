'use client'
import React, { useState } from 'react';



const Notification = () => {
  return (
    <div className='bg-secondary p-8 min-w-[320px] rounded-b-lg'>
          <div className='flex flex-col gap-y-6'>
        <Toggle title='Message' />
        <Toggle title='Task Update' />
        <Toggle title='Task Deadline' />
        <Toggle title='Mentor Help' />

        <button className='w-[210px] mt-16 outline-none border-none text-white font-semibold flex justify-center items-center bg-primary/500 py-3 rounded-lg '>Save Changes</button>
    
          </div>
        </div>
  );
}

export default Notification;


 const Toggle = ({title}:{title:string}) => {
  
  const [enabled, setEnabled] = useState(false);

  return (
    <div className='flex flex-row gap-4 items-center'>
      <button onClick={() => setEnabled(!enabled)} aria-label={`${enabled?'Disable':'Enable'} ${title}`}  className={`cursor-pointer flex flex-row rounded-2xl items-center border-2 border-primary w-16 p-1`}>
        <div className={`relative inline-flex h-6 w-6 items-center rounded-full transition-colors duration-300 ${enabled ? 'bg-primary/500 translate-x-[30px]' : 'bg-gray-500 translate-x-0'}`}></div>
      </button>
      <span className='font-semibold'>{title}</span>
    </div>
  )
}
