import { Header } from '@/components';
import React, { ReactNode } from 'react';

const MessageLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='px-10 py-6 border-b-2 border-primary sticky top-0 bg-secondary '>
        <Header header_Text='Message' />
      </div>
      <div className='flex-1 overflow-hidden'>
        {
          children
        }
      </div>
      
    </div>
  );
}

export default MessageLayout;
