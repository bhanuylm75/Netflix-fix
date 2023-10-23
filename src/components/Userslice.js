import { createSlice } from "@reduxjs/toolkit";
const Userslice=createSlice({
  name:"user",
  initialState:null,
  reducers:{
    adduser:(state,action)=>{
      return action.payload

    }

  }
})

export const {adduser}=Userslice.actions

export default Userslice.reducer

