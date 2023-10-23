import mongoose from "mongoose";

const netflixuser= new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true

  },
  password:{
    type:String,
    required:true,

  }
})

export default mongoose.model("netflixuser",netflixuser)