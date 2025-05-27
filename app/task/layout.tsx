import { Header } from '@/components';
import React, { ReactNode } from 'react';

const TaskLayout = ({ children }: {
  children:ReactNode
}) => {
  return (
    <div>
      <div className='sticky top-0 bg-secondary px-8 py-4'>
        <Header header_Text='Explore Task' showComponent placeholder='Search Task..'/>
      </div>
      {children}
      
    </div>
  );
}

export default TaskLayout;
