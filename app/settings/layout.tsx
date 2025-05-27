'use client'
import { Header } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';


const tabs = [
  {
    name:"General",href:"/settings"
  },
  {
    name:"Notification",href:"/settings/notification"
  }
]

const SettingLayout = ({ children }: {
  children:ReactNode
}) => {

  const pathname = usePathname();


  return (
    <div>
      <div>
        <div className='px-10 py-6 sticky top-0 bg-secondary'>
          <Header header_Text='Settings' />
        </div>
        <div className='bg-primary h-screen p-6'>
          <div className='w-full rounded-t-md min-w-[320px] bg-secondary px-8 border-b-2 border-primary pt-10 flex flex-row gap-4'>
            {
              tabs.map((tab) => {
                const isActive = tab.href === '/settings'?pathname === "/settings":pathname.startsWith(tab.href)
                return (
                  <Link key={tab.href} href={tab.href} className={`text-lg font-medium transition-colors`} scroll={false}>
                    <div className={`flex flex-col ${isActive ? "text-gray-900" : "text-gray-500"}`}>
                      <span>{tab.name}</span>
                      {
                        isActive && (
                          <div className='h-[2px] w-full bg-primary/500 mt-2 rounded-sm'></div>
                        )
                      }
                    </div>
                  </Link>
                )
              })
            }

          </div>
          {children}
        </div>
      </div>
    
      
    </div>
  );
}

export default SettingLayout;
