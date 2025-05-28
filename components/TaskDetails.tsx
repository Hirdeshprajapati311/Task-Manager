import React from 'react';

const TaskDetails = ({ srno, task }: { srno?: number, task: string }) => {
  return (
    <div className="mt-6 flex flex-grow flex-col ">
      <div className="flex flex-row gap-2  items-center">
        <span className="px-6 py-4 bg-primary/200 rounded-lg text-xs md:text-sm lg:text-base">{srno}</span>
        <span>{task}</span>
      </div>

    </div>
  )
}

export default TaskDetails;
