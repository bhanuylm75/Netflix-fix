import React, { useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { options } from './Utils'
import Firstcon from './Firstcon'
import { addNowPlayingMovies } from './movieslice'
import Secondcon from './Secondcon'
import Gptsearch from './Gptsearch'
const Browser = () => {
  const user=useSelector((state)=>state.userslice)
  const showGptSearch = useSelector((store) => store.gptslice.showGptSearch);
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    if (user===null){
      navigate("/")
    }
    getNowPlayingMovies()
    

  },[])
  
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results))


  };
  return(
    <div>
      <Header/>
      {showGptSearch?<Gptsearch/>:<><Firstcon/>
      <Secondcon/></>}

    </div>
  )

  
};



export default Browser