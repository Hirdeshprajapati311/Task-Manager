import { MentorCardProps } from '@/types';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { TbNotes } from 'react-icons/tb';
import { TiStarFullOutline } from 'react-icons/ti';

const MentorCard = ({isDetails,name,role,rating,reviews,tasks,selfIntro}:MentorCardProps) => {
  return (
        <div className='px-8 mb-6 md:min-w-[280px] cursor-pointer  min-w-[240px] lg:min-w-[350px] py-4 bg-secondary flex flex-col gap-2 rounded-lg min-w'>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <BsPersonCircle className="text-4xl" />
              <div className="flex flex-col">
            <span className="font-semibold flex flex-row text-xs md:text-sm lg:text-base">
              {name}
                </span>
            <p className="text-gray-500 text-xs md:text-sm lg:text-base">{ role}</p>
            </div>
            </div>
            <button className="text-primary/500 flex flex-row text-xs md:text-sm lg:text-base">
              + Follow
            </button>
      </div>


      {
        isDetails && (
          <div>
            <p className='p-2 max-w-[90%] line-clamp-3 max-h-[120%] text-[10px] lg:text-sm md:text-xs text-gray-600'>{selfIntro}</p>
          </div>
        )
      }
    
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <TbNotes className="text-gray-500 lg:text-2xl md:text-xl text-lg" />
          <span className="text-gray-500 font-semibold text-xs md:text-sm lg:text-base">{tasks}</span>
            </div>
    
            <div className="flex flex-row gap-1 items-center">
              <TiStarFullOutline className="md:text-base lg:text-lg text-sm text-yellow/100 " />
          <p className="md:text-sm text-xs lg:text-base">{rating}</p>
          <p className="md:text-sm text-xs lg:text-base">({reviews})</p>
    
            </div>
    
          </div>
        </div>
  );
}

export default MentorCard;
