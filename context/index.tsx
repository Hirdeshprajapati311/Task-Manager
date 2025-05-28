'use client'
import { ProfileStoreProps, ScrollStoreProps, SidebarStoreProps } from '@/types';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';



export const useSidebarStore = create<SidebarStoreProps>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen:(val)=>set({isOpen:val}),
}))

export const useScrollStore = create<ScrollStoreProps>((set) => ({
  handlePrev: (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -300,
        behavior: "smooth"
      })
    }
  },
  handleNext: (ref) => {
    if (ref.current) {
      ref.current.scrollBy({left:300,behavior:'smooth'})
    }
  }
}))

export const useProfileStore = create<ProfileStoreProps>(
  persist((set) => ({
    name: 'User',
    gender: 'N/A',
    phone: 0,
    photo: '',
    comma:', ',
    setProfile: ({ name, gender, phone, photo }) => set({ name, gender, phone, photo })
  }),
    {
    name:'profile-store'
  }
  ) as StateCreator<ProfileStoreProps, [] , [], ProfileStoreProps>
)





