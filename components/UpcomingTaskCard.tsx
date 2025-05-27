import { UpcomingTaskProp } from '@/types';
import Image from 'next/image';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';

const UpcomingTaskCard = ({src,taskName,task,progress,daysLeft}:UpcomingTaskProp) => {
  return (
    <div className='p-4 mb-6 min-w-[280px]  md:min-w-[350px] bg-secondary flex flex-col gap-4 rounded-lg min-w'>
      <Image src={src} className="object-contain" width={320} height={0}  alt="taskimages" />
      <div className=" flex flex-col">
        <span className="font-bold">
          {taskName}
        </span>
        <p className="text-gray-500">{task}</p>
      </div>

      <div className="w-full flex flex-col ">
        <div className="flex flex-row mb-1 justify-between">
          <span className="font-semibold">Progress</span>
          <span className="text-primary/500">{progress}%</span>
        </div>

        <div className="w-full h-2 rounded-md bg-primary/500 mb-2"></div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-1">
            <MdAccessTime />
            <span>{daysLeft} DaysLeft</span>
          </div>

          <div className="flex flex-row">
            <BsPersonCircle />
            <BsPersonCircle />
            <BsPersonCircle />
            <BsPersonCircle />
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default UpcomingTaskCard;
