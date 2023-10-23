import React from 'react'
import "./index.css"
const Moviecard = ({posterPath}) => {
  return (
    <div className=" pr-2  card">
      <img className='w-100%'  alt="Movie Card" src={"https://image.tmdb.org/t/p/w500" + posterPath} />
    </div>
  )
}

export default Moviecard
