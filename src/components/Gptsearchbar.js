import React from 'react'
import OpenAI from "openai"
import { useRef } from "react";
import { openaikey,options } from './Utils'
import { addGptMovieResult } from './gptslice';
import { useDispatch } from 'react-redux';
import { toggleloading } from './Userslice';

const Gptsearchbar =  () => {
  const searchText = useRef(null);
  const dispatch=useDispatch()
  console.log("njj")

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };




  const handleGptSearchClick= async ()=>{
    const searchtext=searchText.current.value
    if(searchtext.length===0) return
    const openai = new OpenAI({
      apiKey: openaikey,
      dangerouslyAllowBrowser: true,
    });

    dispatch(toggleloading())
    const gptQuery ="Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchtext +
    ". only give in original language, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";


    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
  
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //console.log(promiseArray)
    const tmdbResults = await Promise.all(promiseArray);

    //console.log(tmdbResults)
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    dispatch(toggleloading())

  }
  return (
    <div className='flex justify-center '>
       <form
        className="  bg-black flex md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 w-full  outline-none  "
          placeholder={'Search Movies'}
          required
          ref={searchText}
        />
        <button
          className=" m-4 py-2 px-4  bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick }
        >
         Search
        </button>
      </form>
    </div>
  )
}

export default Gptsearchbar