import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <div className='flex justify-center items-center mt-20'>
      <SyncLoader
        color={"#ff0000"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
      
    </div>
  )
}

export default Loading
