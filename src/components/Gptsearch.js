import React from 'react'
import { bg } from './Utils'
import Gptsearchbar from './Gptsearchbar'

const Gptsearch = () => {
  return (
    <div className='flex justify-center  '>
      <img src={bg} className='min-h-full object-cover w-screen' alt=""/>
      <div className=' absolute z-20 mt-[10%]'>
        <Gptsearchbar/>
      </div>
      </div>
  )
}

export default Gptsearch