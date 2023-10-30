import React from 'react'
import { useSelector } from "react-redux";
import Movieslist from './Movieslist';
const Secondcon = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies)
  return (
    <div className=" px-0 md:-mt-44 px-6 bg-black">
      <div className="">
      <Movieslist  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <Movieslist title={"Now Playing"} movies={movies.popularMovies}/>
      <Movieslist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <Movieslist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <Movieslist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      
      
    </div>
    </div>
  )
}

export default Secondcon
