import React, { useEffect} from 'react'
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import {  useNavigate } from 'react-router-dom'
import Header from './Header'
import { options } from './Utils'
import Firstcon from './Firstcon'
import { addNowPlayingMovies,addPopularMovies } from './movieslice'
import Secondcon from './Secondcon'
import Gptsearch from './Gptsearch'

const Browser = () => {
  const user=useSelector((state)=>state.userslice.user)
  const showGptSearch = useSelector((store) => store.gptslice.showGptSearch);
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    if (user===null){
      navigate("/")
    }
    getnowplayingmovies()
    getPopularMovies()
    
    

  },[user])
  const getnowplayingmovies = async () => {
    const {data }= await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    console.log(data.results)
    //const json = await data.json();
    //console.log(json.results)
    dispatch(addNowPlayingMovies(data?.results));
  };
  const getPopularMovies = async () => {
    const {data} = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    //const json = await data.json();
    //console.log(data.results)
    dispatch(addPopularMovies(data?.results));
  };

  
  
  
  return(
    <div className=''>
      <Header/>
      {showGptSearch?<Gptsearch/>:<><Firstcon/>
      <Secondcon/></>}


    </div>
  )

  
};



export default Browser