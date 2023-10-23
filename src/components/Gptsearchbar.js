import React from 'react'

const Gptsearchbar = () => {
  return (
    <div>
       <form
        className=" w-auto bg-black flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 w-96  outline-none  "
          placeholder={'Search Movies'}
        />
        <button
          className=" m-4 py-2 px-4 w-28 bg-red-700 text-white rounded-lg"
          onClick={""}
        >
         Search
        </button>
      </form>
    </div>
  )
}

export default Gptsearchbar