import { Header } from '@/components';
import React, { ReactNode } from 'react';

const ProfileLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-screen'>
      <div className="p-8 bg-secondary sticky top-0">
        <Header header_Text="Hi" text="What's the update?" showName backgroundColor="bg-secondary" />
      </div>
      {children}
    </div>
  );
}

export default ProfileLayout;
