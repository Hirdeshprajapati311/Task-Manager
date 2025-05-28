'use client'
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { day: 'S', activity: 1 },
  { day: 'M', activity: 2 },
  { day: 'T', activity: 1.5 },
  { day: 'W', activity: 3 },
  { day: 'T', activity: 2 },
  { day: 'F', activity: 2.5 },
  { day: 'S', activity: 2.2 },
];

const ActivityGraph = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-1 bg-primary rounded-xl min-w-48 overflow-hidden'>
      <div className='flex w-full px-8 py-4 flex-row justify-between text-xs md:text-sm lg:text-base'>
        <span>Activity</span>
        <button> This Week <span>▼</span></button>
      </div>

      <div className='w-[90%] bg-secondary rounded-lg h-28 md:h-32 px-6'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey='day' axisLine={false} tickLine={false} />
            <YAxis domain={[1, 3]} hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="activity"
              stroke="#00000033"
              strokeWidth={6}
              dot={false}
            />
            <Line
              type='monotone'
              dataKey="activity"
              stroke="#000"
              strokeWidth={3}
              dot={false}
              activeDot={{r:4}}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
      
    </div>
  );
}

export default ActivityGraph;
