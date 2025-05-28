import Image from 'next/image';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';
import TaskDetails from './TaskDetails';

const TodaysTask = ({ src }: { src: string }) => {
  return (
    <div className='p-6  mb-6 min-w-[200px] md:min-w-[240px]  lg:min-w-[350px] bg-secondary flex flex-col gap-4 rounded-lg '>
      <span className="font-bold text-xs md:text-sm lg:text-base" >Task Today</span>
      <Image src={src} className="object-contain " width={360} height={0} alt="taskimages" />
      <div className=" flex flex-col">
        <span className="font-bold text-xs md:text-sm lg:text-base">
          Creating Mobile App Design
        </span>
        <p className="text-gray-500  text-xs md:text-sm lg:text-base">UI UX Design</p>
      </div>

      <div className="w-full flex flex-col ">
        <div className="flex flex-row mb-1 justify-between">
          <span className="font-semibold text-xs md:text-sm lg:text-base">Progress</span>
          <span className="text-primary/500 text-xs md:text-sm lg:text-base">75%</span>
        </div>

        <div className="w-full h-2 rounded-md bg-primary/500 mb-2"></div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-1">
            <MdAccessTime />
            <span className='text-[10px] md:text-xs lg:text-sm'>3 DaysLeft</span>
          </div>
          <div className="flex flex-row">
            <BsPersonCircle />
            <BsPersonCircle />
            <BsPersonCircle />
            <BsPersonCircle />
          </div>
        </div>

        <div className="w-full h-1 my-8 rounded-md bg-primary/200"></div>

        {/* Detail Task */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="font-bold text-xs md:text-sm lg:text-base">Detail Task</span>
            <p className="text-gray-500 text-xs md:text-sm lg:text-base">UI/UX Designer</p>
          </div>

          {
            ["Understanding the tools in Figma", "Understand the basics of making designs", "Design a mobile application with figma"].map((task, i) => (
              <TaskDetails key={i} task={task} srno={i + 1} />
            ))
          }

          <button className="rounded-xl bg-primary/500 text-white mt-8 py-4 text-xs md:text-sm lg:text-base" > Go To Detail</button>

        </div>



      </div>

    </div>
  )
}
export default TodaysTask;
