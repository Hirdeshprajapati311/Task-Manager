import { NavLinkProps } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, icon, children }: NavLinkProps) => {

  const pathname = usePathname();
  const isActive = pathname === href
  
  return(
    <Link className={`flex items-center py-0 md:py-1 lg:py-2 md:px-2 lg:px-8  gap-2 text-secondary/300 ${isActive?"bg-primary rounded-lg text-black":""}`} scroll={false} href={href} >
    <span>
      {icon}
    </span>
    {children}
  </Link>
)}

export default NavLink;
