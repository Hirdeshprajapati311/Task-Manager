import { MentorCardProps } from '@/types';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { TbNotes } from 'react-icons/tb';
import { TiStarFullOutline } from 'react-icons/ti';

const MentorCard = ({isDetails,name,role,rating,reviews,tasks,selfIntro}:MentorCardProps) => {
  return (
        <div className='px-8 mb-6 min-w-[280px] cursor-pointer md:min-w-[350px] py-4 bg-secondary flex flex-col gap-2 rounded-lg min-w'>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <BsPersonCircle className="text-4xl" />
              <div className="flex flex-col">
            <span className="font-semibold flex flex-row md:text-base text-xs">
              {name}
                </span>
            <p className="text-gray-500 md:text-base text-xs">{ role}</p>
            </div>
            </div>
            <button className="text-primary/500 flex flex-row md:text-base text-xs">
              + Follow
            </button>
      </div>


      {
        isDetails && (
          <div>
            <p className='p-2 max-w-[90%] line-clamp-3 max-h-[120%] md:text-sm text-xs text-gray-600'>{selfIntro}</p>
          </div>
        )
      }
    
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <TbNotes className="text-gray-500 text-2xl" />
          <span className="text-gray-500 font-semibold md:text-base text-xs">{tasks}</span>
            </div>
    
            <div className="flex flex-row gap-1 items-center">
              <TiStarFullOutline className="md:text-lg  text-base text-yellow/100 " />
          <p className="md:text-base text-xs">{rating}</p>
              <p className="md:text-base text-xs">({reviews})</p>
    
            </div>
    
          </div>
        </div>
  );
}

export default MentorCard;
