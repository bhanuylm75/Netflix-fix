import React, { useState,useRef,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Login.css"
import {adduser} from "./Userslice"
const Login = () => {
  const user=useSelector((state)=>state.userslice.user)
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate()
  useEffect(()=>{
    if (user){
      navigate("/browser")
    }

  })
  
  const [issigninform ,setissigninform]=useState(true)
  const email = useRef(null);
  const password = useRef(null)
  const dispatch=useDispatch()
   const toggleSignInForm = () => {
    setissigninform(!issigninform);
  };
  const handleSignup=async ()=>{
    const a={"email":email?.current.value,"password":password?.current.value}
    try{
      const res=await axios.post("http://localhost:3007/signup" ,a)
      console.log(res?.data)
    if (res){
      dispatch(adduser(res.data))
      navigate("/browser")
    }

    }
    catch(err){
      console.log(err)


    }

  }
  
  const handleSignin=async ()=>{
    try{
      //console.log(email)
      const a={"email":email?.current.value,"password":password?.current.value}
      //console.log("a")
      //const k={"email":"banu@email.com","password":"king"}
      const res=await axios.post("http://localhost:3007/signin" ,a)
      if (res.data==="user not found" || res.data==="Incorrect Password"){
        setErrorMessage(res.data)
        console.log(res.data)
        return
      }
      if (res){
        dispatch(adduser(res.data))
        navigate("/browser")
      }
      //console.log(res.data)
    }
    catch(err){
      console.log(err)

    }
    

  }
  return (
    <div className='h-screen w-100%'>
      <div className=''>
        <img alt="n" className='img1 h-20 m-5   ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
      </div>
      <div className=' absolute   w-full' >
      <img alt="" className='img2 ' aria-hidden="true" src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <div className='con absolute  ' style={{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"}}>
      </div>
      <div className=' md:flex-col flex   '>
      <form className='mobile absolute md:absolute w-3/12    bg-opacity-70   rounded-lg mt-12 left-1/3   text-white  bg-black p-12   ' onClick={(e)=>{e.preventDefault()}}>
      <h1 className="font-bold text-3xl py-4">
           Sign In
        </h1>
        <input ref={email} required type="text"
          placeholder="Email Address" className='p-3 my-4 w-full bg-gray-700 rounded-lg' />
          <input required ref={password} autoComplete='on' type="password"
          placeholder="password" className='p-3 my-4 w-full bg-gray-700 rounded-lg' />
          <p className="text-red-500 text-center font-bold text-lg">{errorMessage}</p>
        {issigninform ? <button className="p-3 my-6 bg-red-700 w-full rounded-lg" 
        onClick={handleSignin}>Sign in</button> : <button className="p-3 my-6 bg-red-700 w-full rounded-lg" onClick={handleSignup}>Sign up</button>}
        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
          {issigninform
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>

      </form>
      

      </div>
      
      
      
    </div>
  )
}

export default Login