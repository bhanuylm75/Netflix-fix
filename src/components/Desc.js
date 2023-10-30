import React from 'react'
import { Play,More } from './Utils'
import "./list.css"


const Desc = ({title,desc}) => {
  return (
    <div className='absolute top-[10%] md: pt-[15%] pl-28  text-white' >
      <h1 className="  md:text-4xl pb-4 font-bold">{title}</h1>

      <p className=' hidden md:inline-block text-white w-1/3 text-lg font-normal font-xs  '>
      {desc}
      </p>
      <div className='flex'>
        <button className='hidden md:flex justify-center items-center border-0 bg-white rounded-lg pt-2 pb-2 text-black text-sm  mr-2 w-28  md:m-0   '>
          <span className='mr-1'>{Play}</span>
          Play

        </button>

        <button className='hidden md:flex justify-center items-center text-center opacity-50 rounded-lg text-sm   bg-gray-600  text-white w-28 '>
        <span className='mr-1'>{More}</span>
          More Info
        </button>

      </div>
      
    </div>
  )
}

export default Desc
