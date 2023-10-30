import React from 'react'
import Desc from './Desc'
import Background from './Background'
import { useSelector } from "react-redux";
const Firstcon = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const {  id ,title,overview} = mainMovie
  console.log(title,overview)
  return (
    <div className='h-full'>
      <Desc desc={overview}  title={title}className=""/>
      < Background id={id}/>
    </div>
  )
}

export default Firstcon
