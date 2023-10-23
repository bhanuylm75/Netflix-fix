import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { options } from './Utils'

const Background = ({id}) => {
  const [trailer,setTrailer]=useState("")
  const movies = useSelector((store) => store.movies);
  const link=movies?.nowPlayingMovies[0]?.backdrop_path
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos= async ()=>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();
    const res =json?.results[2]
    setTrailer(res)
    
  }
  return (
    <div className='w-screen'>
      <img className='w-screen' alt="" src={"https://image.tmdb.org/t/p/w500"+link}/>
    </div>
  )
}

 

export default Background
