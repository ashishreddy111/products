const express=require("express")

const app=express()

app.get("/products",(req,res)=>{
    res.send("Hello User")
})

app.get("/users",(req,res)=>{
    res.send("byeee")
})

app.listen(4000,()=>{
    console.log("Listening to the port")
})