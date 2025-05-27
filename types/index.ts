import React, { ReactNode } from "react";


export interface NavLinkProps{
  href: string;
  icon: ReactNode;
  children: ReactNode;
}


export interface HeaderProps{
  backgroundColor?: string;
  header_Text: string;
  text?: string;
  showComponent?: boolean;
  placeholder?: string;
  sortText?: "Popular" | "Recent" | "Top";
  showName?:boolean
}

export interface UpcomingTaskProp{
  id: number
  taskName: string
  task: string
  progress: number
  daysLeft:number
  src: string

  
}

export interface SidebarStoreProps{
  isOpen: boolean;
  toggleSidebar: () => void;
  setIsOpen:(val:boolean)=>void
}

export interface ScrollStoreProps {
  handlePrev: (ref: React.RefObject<HTMLDivElement | null>) => void
  handleNext: (ref: React.RefObject<HTMLDivElement |null>) => void
  
}

export interface PersonChatProps{
  id?:number
  chatName: string,
  message?: string,
  timestamps?: string,
  read: boolean
  onBack?: () => void
}

export interface MentorCardProps{
  id?:number
  isDetails?: boolean
  name: string
  role: string
  tasks: number
  rating: number
  reviews: number
  selfIntro?:string
}


export interface CircularProgressProps{
  progress: number
  size?: number
  strokeWidth?: number
  primaryColor?: string
  secondaryColor?:string
  
}

type Gender = "Male" | "Female"|"Other" | "N/A"



export interface ProfileStoreProps   {
  name: string
  gender: Gender
  phone: number
  photo: string
  comma:', '
  setProfile: (data: { name: string; gender: Gender; phone: number; photo:string})=>void
}