import React from 'react'
import { useSelector } from "react-redux";
import Movieslist from './Movieslist';
import Loading from './Loading';
import "./list.css"

const Gptmovies = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gptslice);
  const isloading=useSelector((state)=>state.userslice.Loading)
  console.log(movieNames,movieResults)
  //if (isloading  ) return <Loading/> ;
  return (
    <div className="   text-white md:m-8">
    <div>
      {movieNames?.map((movieName, index) => (
        <Movieslist
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  </div>
  )
}

export default Gptmovies
