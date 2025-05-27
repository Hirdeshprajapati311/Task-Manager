import { CircularProgressProps } from '@/types';
import React from 'react';

const CircularProgress = ({ progress, size = 88, strokeWidth = 6, primaryColor = "#3B82F6", secondaryColor = '#1E293B' }: CircularProgressProps) => {
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI*radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <svg width={size} height={size} className='transform -rotate-90'>
      <circle cx={size/2} cy={size/2} r={radius}  stroke={secondaryColor} strokeWidth={strokeWidth} fill='none'>
      </circle>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke={primaryColor} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' fill='none'>
        
      </circle>
      <text
        x="50%"
        y='50%'
        dominantBaseline="middle"
        fill='white'
        textAnchor='middle'
        fontSize='18'
        fontWeight='bold'
        transform={`rotate(90,${size/2},${size/2})`}
      >
        {`${progress}%`}
      </text>
      
    </svg>
  );
}

export default CircularProgress;
