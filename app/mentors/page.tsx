'use client'
import { MentorCard } from '@/components';
import { useScrollStore } from '@/context';
import { mentorData } from '@/db/data';
import React, { useEffect, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Mentor = () => {

  const scrollRef = useRef<HTMLDivElement | null>(null)

  const { handlePrev, handleNext } = useScrollStore();
  


  return (
    <div className='bg-primary overflow-y-auto  p-8 flex flex-col '>
      {/* Recent Mentor */}
      <div className='flex flex-col w-full mr-4'>
        <div className='flex flex-row justify-between mb-4'>
          <div className="font-semibold md:text-lg text-base">Recent Mentors</div>
          <div className="flex flex-row gap-2 text-2xl">
            <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={() => handlePrev(scrollRef)}><MdKeyboardArrowLeft className="text-gray-400" /></button>
            <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={() => handleNext(scrollRef)}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex flex-row overflow-x-auto scrollbar-hide gap-12">
          {mentorData.map((mentor) => (<MentorCard name={mentor.name} key={mentor.id} role={mentor.role} tasks={mentor.tasks} rating={mentor.rating} reviews={mentor.reviews} />))}
        </div>
      </div>

      {/* Mentors */}
      <div className='flex flex-col  h-full w-full mr-4'>
        <div className='flex flex-row justify-start mb-4 font-semibold md:text-lg'>
        Mentors
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12">
          {[...mentorData].sort(() => Math.random() - 0.5).map((mentor) => (<MentorCard key={mentor.id} isDetails role={mentor.role} reviews={mentor.reviews} rating={mentor.rating} selfIntro={mentor.selfIntro} name={mentor.name} tasks={mentor.tasks} id={mentor.id} />))}
        </div>
      </div>
    </div>
  );
}

export default Mentor;
