import React from 'react'
//import { bg } from './Utils'
import Gptsearchbar from './Gptsearchbar'
import Gptmovies from './Gptmovies'
import { useSelector } from "react-redux";
import Loading from './Loading';
import "./gpt.css"

const Gptsearch = () => {
  //const { movieResults, movieNames } = useSelector((store) => store.gptslice);
  const isloading=useSelector((state)=>state.userslice.loading)
  console.log(isloading)
  return (
    <div className=' bg     '>
      <div className='pt-[35%] md:pt-[10%]'>
      <Gptsearchbar/>
      </div>
      <div>
      {isloading? <Loading/>:<Gptmovies/>}
      </div>
      </div>
  )
}

export default Gptsearch