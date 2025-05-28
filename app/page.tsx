"use client"
import { ActivityGraph, CircularProgress, Header, MentorCard, TodaysTask, UpcomingTaskCard, WeekTracker } from "@/components";
import { useScrollStore } from "@/context";
import { mentorData, upcomingTask } from "@/db/data";
import { useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";



export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const upcomingScrollRef = useRef<HTMLDivElement | null>(null);
  
  const { handlePrev, handleNext } = useScrollStore();

  const TOTAL_TASK: number = 100
  const progress:number = 45

  return (
    <main className="p-0 m-0 bg-primary/200 flex-col  flex md:flex-row h-[100dvh] w-full overflow-hidden">

      <div className="flex-1 overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
        {/* Mid Screen */}
        <div className=" w-full md:overflow-y-auto md:scrollbar-hide md:w-[60%] p-1 md:p-6 ">
          <div className="px-8 ">
            <Header header_Text="Hi" text="Let's finish your task today" showName backgroundColor="bg-primary/200" />
          </div>
          
          <div className='w-full px-8'>
            {/* Card and Graph */}
            <div className='flex md:flex-row gap-6 md:gap-8 flex-col py-6 justify-around items-stretch'>

              {/* Card */}
              <div className=' bg-secondary/500  py-6 px-6  flex md:flex-col justify-around md:justify-center md:items-center flex-row rounded-xl'>
                <div className='text-white flex flex-col md:gap-2 lg:gap-4'>
                  <span className="text-xs md:text-sm lg:text-base">Running Task</span>
                  <span className='lg:text-2xl font-semibold text-lg md:text-xl'>{TOTAL_TASK-progress}</span>
                </div>

                <div className='flex flex-row gap-2 items-center text-xs md:text-sm lg:text-base'>
                  <CircularProgress progress={45} />
                  <div className='flex font-semibold text-white flex-col '>
                    <span>{TOTAL_TASK}</span>
                    <span>Task</span>
                  </div>
                </div>
              </div>

              {/* Graph */}
              <div className='flex flex-col flex-1 bg-primary rounded-xl min-w-52 overflow-hidden'>
                
                <div className='flex justify-center items-center '>
                  <ActivityGraph/>
                </div>
              </div>
            </div>

            {/* Monthly Mentors */}
            <div className='flex flex-col w-full mr-4'>
              <div className='flex flex-row justify-between mb-4'>
                <div className="font-bold md:text-base text-sm">Monthly Mentors</div>
                <div className="flex flex-row gap-2 text-2xl">
                  <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handlePrev(scrollRef)}><MdKeyboardArrowLeft className="text-gray-400" /></button>
                  <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handleNext(scrollRef)}>
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
              <div ref={scrollRef} className="flex flex-row overflow-x-auto scrollbar-hide gap-12">
                {mentorData.map((mentor) => (<MentorCard key={mentor.id} role={mentor.role} rating={mentor.rating} reviews={mentor.reviews} name={mentor.name} tasks={mentor.tasks} />))}
              </div>
            </div>

            {/**Upcoming Task */}
            <div className='flex flex-col w-full mr-4'>
              <div className='flex flex-row justify-between mb-4'>
                <div className="font-bold md:text-base text-sm">Upcomming Task</div>
                <div className="flex flex-row gap-2 text-2xl">
                  <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handlePrev(upcomingScrollRef)}><MdKeyboardArrowLeft className="text-gray-400" /></button>
                  <button className="hover:bg-gray-300 flex justify-center items-center h-8 w-8 rounded-full" onClick={()=>handleNext(upcomingScrollRef)}>
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
              <div ref={upcomingScrollRef} className="flex flex-row overflow-x-auto scrollbar-hide gap-12">
                {upcomingTask.map((task) => {
                  const filename = task.src.split('/').pop();
                  const updatedSrc = `/images/${filename}`
                  return(<UpcomingTaskCard key={task.id} src={updatedSrc} taskName={task.taskName} task={task.task} progress={task.progress} daysLeft={task.daysLeft} id={task.id} />)
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" w-full md:w-[40%] md:overflow-y-auto md:scrollbar-hide  md:h-screen bg-primary p-4 mt-4 md:p-6 flex flex-col gap-8 items-center">
          <WeekTracker />
          <TodaysTask src="/images/image.png"/>

        </div>
      </div>
    </main>
  );
}













