import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
const Moviecard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <Link to="/list">
    <div className=" pr-2  card">
      <img className='w-100%'  alt="Movie Card" src={"https://image.tmdb.org/t/p/w500" + posterPath} />
    </div>
    </Link>
  )
}

export default Moviecard
