const express=require('express')
const app=express();
const path =require('path')

app.get('/',(req,res)=>{
    res.send("Welcome to the internal server")
})
app.listen(3000,()=>{
    console.log("server is ruuning at port no 3000")
})