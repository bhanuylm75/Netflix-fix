import React from 'react'
import Login from './Login'
import Browser from './Browser'
import List from './List'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/browser",
      element:<Browser/>,
      
    },
    {
      path:"/list",
      element:<List/>,
      
    },
  ])
  return (
    <div><RouterProvider router={appRouter}/></div>
  )
}

export default Body