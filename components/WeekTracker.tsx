"use client"
import { addDays, format, isSameDay, startOfWeek } from 'date-fns';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const WeekTracker = () => {

  const [currentDate, setCurentDate] = useState<Date>(new Date());

  const getWeekDates = (date:Date) => {
    const start = startOfWeek(date, { weekStartsOn: 0 });
    return [...Array(7)].map((_, i) => addDays(start, i));
  }

  const weekDates = getWeekDates(currentDate);

  const handlePrevClick = () => setCurentDate(addDays(currentDate, -7))
  const handleNextClick = () => setCurentDate(addDays(currentDate, 7))
  

  return (
    <div className="bg-secondary min-w-[200px] md:min-w-[240px] lg:min-w-[280px] rounded-xl shadow-md p-4 mx-auto w-fit">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevClick}><MdKeyboardArrowLeft className="text-3xl" /></button>
        <h2 className="font-semibold">{format(currentDate,"MMMM yyyy")}</h2>
        <button onClick={handleNextClick}><MdKeyboardArrowRight className="text-3xl" /></button>
      </div>

      {/* Days */}
      <div className=' justify-between grid grid-cols-7 items-center gap-2 text-[10px] sm:text-xs md:text-sm lg:text-base' >
        {weekDates.map((date, idx) => {
          const isToday = isSameDay(date, new Date());
          return (
            <div key={idx} className={`p-1 text-[10px] md:text-xs lg:text-sm ${isToday?"bg-black rounded-full  justify-center items-center text-white":""}flex flex-col items-center`}>
              <span className={`text-sm flex justify-center mb-2  ${isToday ? "text-white" :"text-gray-500"}`}>
                {
                  format(date,"E").charAt(0)
                }
              </span>
              <div className={`w-4 md:w-6 h-4 lg:w-8 md:h-6 lg:h-8  text-[10px] md:text-xs lg:text-sm flex items-center justify-center rounded-full ${isToday ? "bg-primary/500 text-white" : "bg-gray-100 text-gray-800"}`}>
                {
                  format(date,"d")
                }

              </div>
            </div>
          )
        })

        }

      </div>
    </div>
  )
}

export default WeekTracker;
