'use client'
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';


const General = () => {

  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(!isSelected);
  }


  return (
    <div className='bg-secondary p-8 min-w-[320px] rounded-b-lg'>
      <div className='flex flex-col gap-y-4 '>
        <span className='font-semibold text-gray-700 text-lg'>Language</span>

        <div className='flex flex-row py-2 md:py-3 mb-2 px-1  md:px-6 rounded-lg border  border-primary max-w-[400px] items-center justify-between'><button className=''>English(Default)</button><FaAngleDown /></div>

        <span className='font-semibold text-gray-700 text-lg'>Timezone</span>

        <div className='flex flex-row mb-2 py-3 px-2 md:px-6 rounded-lg border border-primary max-w-[400px] items-center justify-between'><button className=''>English(Default)</button><FaAngleDown /></div>


        <span className='font-semibold text-gray-700 text-lg'>Timezone</span>

        <div className='flex flex-row max-w-[400px] justify-between items-center gap-4 mb-14'>
          <div onClick={handleClick} className={`min-w-[120px]  md:min-w-[180px] border-2  rounded-lg flex-row ${isSelected?"border-primary/500":"border-gray-600"}`}>
            <label className='w-full px-2 md:px-4 py-2 md:py-4 flex flex-row justify-between items-center'>
              <span className='md:text-base text-sm'>24 Hours</span>
              <input type="radio" name='option' value='one' className='form-radio text-lg text-primary/500' />
            </label>
          </div>

          <div onClick={handleClick} className={` min-w-[120px] md:min-w-[180px] border-2  rounded-lg flex-row ${isSelected ? "border-primary/500" : "border-gray-600"}`}>
            <label className='w-full px-2 md:px-4 py-2 md:py-4 flex flex-row justify-between items-center'>
              <span className='md:text-base text-sm'>12 Hours</span>
              <input type="radio" name='option' value='one' className='form-radio text-lg text-primary/500' />
            </label>
          </div>
        </div>

        <button className='w-[210px] outline-none border-none text-white font-semibold flex justify-center items-center bg-primary/500 py-3 rounded-lg '>Save Changes</button>

      </div>
    </div>
  );
}

export default General;
