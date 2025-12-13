require('dotenv').config();
const express=require('express')
const cors =require('cors')
const app=express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


// middleware
 app.use(express.urlencoded({extended:true}))
 app.use(express.json());

 // Db Connection

 const conn=require('./config/Connection')
 const user=require('./route/userRoute');
const { config } = require('dotenv');

 // api endpoints

 app.use("/api/user",user)

const PORT=3000;
const HOST='127.0.0.1';


app.get("/",(req,res)=>{
    res.send('API Working')
})

app.listen(PORT,HOST,()=>{
    console.log(`Server is Run:http://${HOST}:${PORT}`)
})