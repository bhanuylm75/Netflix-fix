import { createSlice } from "@reduxjs/toolkit";
const Userslice=createSlice({
  name:"user",
  initialState:{
    user:null,
    loading:false,
  },

  reducers:{
    adduser:(state,action)=>{
      state.user= action.payload

    },
    toggleloading:(state)=>{
       state.loading=!state.loading

    }

  }
})

export const {adduser,toggleloading}=Userslice.actions

export default Userslice.reducer

