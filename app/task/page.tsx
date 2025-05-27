'use client'

import { UpcomingTaskCard } from '@/components';
import { useScrollStore } from '@/context';
import { upcomingTask } from '@/db/data';
import React, { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Task = () => {

  const upcomingScrollRef = useRef<HTMLDivElement | null>(null)
  const upcomingScrollRef1 = useRef<HTMLDivElement | null>(null)

  const {handlePrev,handleNext} = useScrollStore();

  return (
    <div className='overflow-y-auto p-8 flex flex-col bg-primary'>
      <div className='flex flex-col w-full mr-4'>
                    <div className='flex flex-row justify-between mb-4'>
                      <div className="font-semibold text-gray-600 md:text-lg text-base">Time Limit</div>
                      <div className="flex flex-row gap-2 text-2xl">
                        <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handlePrev(upcomingScrollRef)}><MdKeyboardArrowLeft className="text-gray-400" /></button>
                        <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handleNext(upcomingScrollRef)}>
                          <MdKeyboardArrowRight />
                        </button>
                      </div>
                    </div>
        <div ref={upcomingScrollRef} className="flex flex-row overflow-x-auto scrollbar-hide gap-12">
          {upcomingTask.map((task)=>(<UpcomingTaskCard id={task.id} src={task.src} taskName = {task.taskName} key={task.id} progress={task.progress} daysLeft={task.daysLeft} task={task.task} />))}
                              </div>
      </div>

      <div className='flex flex-col w-full mr-4'>
        <div className='flex flex-row justify-between mb-4'>
          <div className="font-semibold md:text-lg text-base text-gray-600">New Task</div>
          <div className="flex flex-row gap-2 text-2xl">
            <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={() => handlePrev(upcomingScrollRef1)}><MdKeyboardArrowLeft className="text-gray-400" /></button>
            <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handleNext(upcomingScrollRef1)}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div ref={upcomingScrollRef1} className="flex flex-row overflow-x-auto scrollbar-hide gap-12">
          {[...upcomingTask].sort(()=>Math.random()-0.5).map((task)=>(<UpcomingTaskCard id={task.id} key={task.id} task={task.task} taskName={task.taskName} progress={task.progress} daysLeft={task.daysLeft} src={task.src} />))}

        </div>
      </div>
      

    </div>
  );
}

export default Task;
