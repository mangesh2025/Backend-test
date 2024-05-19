require('dotenv').config()
import express from "express";
// const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello world conned to the express server")
})

app.get('/signup',(req,res)=>{
    res.send("register now")
})

app.get('/login',(req,res)=>{
    res.send("sign in now")
})

app.listen(process.env.PORT,()=>{
    console.log(`Active port is ${process.env.PORT}`)
})

