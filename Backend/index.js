import express from "express"
import mongoose from "mongoose"
import user from "./models/user.js"

mongoose.connect("mongodb+srv://bhanu:Bhanu@cluster0.rqxm9dx.mongodb.net/?retryWrites=true&w=majority")

const app=express()
app.use(express.json())

app.post("/signup",async (req,res)=>{
  try{
    const newuser=new user({...req.body})
    //const newuser=await user.findOne({email:req.params})
    console.log(newuser)
    res.send(newuser)
    await newuser.save()
  }
  catch(err){
    res.send(err)
    console.log(err)

  }
})

app.post("/signin",async (req,res)=>{
  const signinuser=await user.findOne({email:req?.body?.email})
  console.log(req.body.email)
  try{
    if(!signinuser){
      res.send("user not found")
      return
    }
    if (req.body?.password !== signinuser?.password){
      res.send('Incorrect Password')
      return
  
    }
    if (req.body?.password === signinuser?.password){
      res.send(signinuser)
  
    }

  }
  catch(err){
    res.send(err.json())

  }
})

app.listen(3007,()=>{
  console.log("Running")
})