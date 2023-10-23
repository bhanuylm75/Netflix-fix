import React from 'react'
import { Play,More } from './Utils'


const Desc = () => {
  return (
    <div className='absolute top-1/2 pl-28'>
      <p className='text-white w-1/4 text-lg font-normal font-s'>
      During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.
      </p>
      <div className='flex'>
        <button className='flex justify-center items-center border-0 bg-white rounded-lg pt-2 pb-2 text-black text-sm  mr-2 w-28   '>
          <span className='mr-1'>{Play}</span>
          Play

        </button>

        <button className='flex justify-center items-center text-center opacity-50 rounded-lg text-sm   bg-gray-600  text-white w-28 '>
        <span className='mr-1'>{More}</span>
          More Info
        </button>

      </div>
      
    </div>
  )
}

export default Desc
