import React from 'react'
import Moviecard from './Moviecard'
import "./list.css"

const Movieslist = ({title,movies}) => {
  //console.log(movies)
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex over example">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard  key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movieslist
