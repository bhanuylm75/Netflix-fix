import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {toggleGptSearchView} from "./gptslice"

const Header = () => {
  const showGptSearch = useSelector((store) => store.gptslice.showGptSearch);
  console.log(showGptSearch)
  const dispatch = useDispatch();
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute top-0  w-full z-10 flex  flex-col md:flex-row justify-between
    ">
       <img className="w-44 mx-auto md:mx-0" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
       <div className='sm: flex justify-around items-center flex-row '>
        <button
            className="p-1 md:py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
       <button  className="p-1 md:py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg ">
            Sign Out
          </button>
       </div>
      
    </div>
  )
}

export default Header
