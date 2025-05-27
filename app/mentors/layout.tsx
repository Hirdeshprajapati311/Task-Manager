import { Header } from '@/components';
import React, { ReactNode } from 'react';

const MentorLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <div className='sticky top-0 bg-secondary px-8 py-4'>
        <Header header_Text='Explore Mentor' showComponent placeholder='Search Mentor...'/>

      </div>
      {children}
      
    </div>
  );
}

export default MentorLayout;
