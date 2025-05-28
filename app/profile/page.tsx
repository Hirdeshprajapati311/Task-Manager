'use client'
import { useProfileStore } from '@/context';
import Image from 'next/image';
import React, { useState } from 'react';

const Profile = () => {

  const { name, gender, phone, photo,setProfile } = useProfileStore()
  const [isEditing, setIsEditing] = useState(false)

  

   const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const [tempName, setTempName] = useState<string>(name)
  const [tempGender, setTempGender] = useState<"Male"|"Female"|"Other"|"N/A">(gender)
  const [tempPhone, setTempPhone] = useState<number>(phone);
  const [tempProfilePhoto, setTempProfilePhoto] = useState(photo)


  const handlePhotoupload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
      
    }
  }
 

  const handleProfileEdit = () => {
    if (isEditing) {
      setProfile({
        name: tempName,
        gender: tempGender,
        phone: tempPhone,
        photo:tempProfilePhoto || '/images/avatar.jpg'
      })
      console.log("saving changes..",{name,gender,phone})
    }
    setIsEditing(!isEditing)
  }
  return (
    <div className='bg-primary h-full overflow-y-auto scrollbar-hide p-6'>

      <div className='bg-secondary w-full rounded-xl min-w-[300px] p-6'>

        <span className='font-semibold block md:text-base text-sm w-full border-b-2 border-primary'>Profile</span>


        <div className='flex flex-row w-full justify-between'>
          <div className='flex mt-4 flex-col gap-2'>

            <div className='flex flex-col items-center mb-4'>
              <Image src={tempProfilePhoto || '/images/avatar.jpg'} alt="Profile photo" height={56} width={28} className='w-24 h-24 rounded-full object-cover border-white shadow-md' />
              
                  <input ref={fileInputRef} type='file' accept='image/*' className='hidden' onChange={handlePhotoupload} />
                


            </div>

            <div className='flex flex-row gap-2 items-center'>
              <label className='font-semibold md:text-sm text-xs'>Username:</label>
              {
                isEditing ? (<input className='bg-white text-black px-2 py-1 rounded-md text-sm outline-none border border-primary' type='text' value={tempName} onChange={(e)=>setTempName(e.target.value)} />): (<span className = 'font-semibold text-gray-500 md:text-sm text-xs'>{ name }</span>)
              }
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <label className='font-semibold md:text-sm text-xs'>Gender:</label>
              {isEditing ? (<select className='bg-white text-black px-2 py-1 rounded-md text-sm outline-none border border-primary' value={tempGender} onChange={(e)=>setTempGender(e.target.value as "Male" | "Female" | "Other"|"N/A")} >
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Other" >Other</option>
                <option value="N/A" >N/A</option>

              </select>): (<span className = 'font-semibold text-gray-500 md:text-sm text-xs'>{ gender }</span>)}
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <label className='font-semibold  md:text-sm text-xs'>Phone number:</label>
              {isEditing ? (<input className='bg-white text-black px-2 py-1 rounded-md text-sm outline-none border border-primary' type='number' value={tempPhone} onChange={(e) => setTempPhone(Number(e.target.value))} />): (<span className = 'font-semibold text-gray-500 md:text-sm text-xs'>{ phone }</span>)}
            </div>

          </div>

          <button onClick={handleProfileEdit} className='self-end px-8 py-3 bg-primary/500 rounded-lg text-white font-semibold'>{isEditing ? "Save" :"Edit Profile"}</button>
          
      </div>



      </div>

      <button onClick={()=>fileInputRef.current?.click()} className='self-end px-8 py-3 mt-4 bg-primary/500 rounded-lg text-white font-semibold'>Change Photo</button>


      
    </div>
  );
}

export default Profile;



