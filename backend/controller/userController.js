require("dotenv").config();
const express=require('express')
const mongoose=require('mongoose')
 const User=require('../model/userSchema')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')
const { config } = require('dotenv')


const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    
    if(!name||!email||!password) return res.status(400).json({message:"All Field Required"})
    
    const PassRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;;
 
    if(!PassRegex.test(password)) return res.status(400).json({message:" password must be having lovercase,uppercase and symbol"})

    const userExist=await User.findOne({email})

    if(userExist) return res.status(400).json({message:"User already Exist"})

    const hashpass=await bcrypt.hash(password,10)
    
    const newUser=await User.create({name,email,password:hashpass})
    
    res.status(201).json({message:"User Created Successfully",success:true, user:newUser})

    } catch (error) {
        res.status(400).json({message:"Registration failed",success:false,})
        
    }
}

const loginUser=async(req,res)=>{
    try {
        const{email,password}=req.body;
    
        const user=await User.findOne({email})
        
        if(!user) return res.status(400).json({message:"user not found"})
        
     const isMatch=await bcrypt.compare(password,user.password)

     if(!isMatch) return res.status(400).json({message:"Invalid Credentials"})
    
        const token=JWT.sign(
            {id:user._id,email:user.email},
            process.env.JWT_SECRET,
            { expiresIn: '2h' }  
        )
        console.log(token)

        res.status(200).json({success:true,message:'user Login successfully',token,
            user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }
        })
        console.log(user)
        console.log(token)
    
 
    } catch (error) {
        res.status(400).json({ success:false,message:"Server Error"})
        
    }
}

const getAllUser=async(req,res)=>{
    try {
        const result=await User.find()
        res.status(201).json({success:true,result:result})
    } catch (error) {
        
    }
}

const getById=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        if(!user) return res.status(400).json({message:"User Not Found"})
        res.status(201).json({success:true,user:user})
    } catch (error) {
        res.status(400).json({success:false,message:"Faild to found"})
    }
}


const deleteUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(400).json({message:"User Not Found"})
 
        res.status(201).json({success:true,message:"User Deleted Successfully"})  
        
    } catch (error) {
        res.status(400).json({success:false,message:"Deletion Failed"})
    }
}


const updateUser=async(req,res)=>{
    try {
        const id=req.params.id;

        const result=await User.findByIdAndUpdate(id,req.body,{new:true})
        if(!result) return res.status(400).json({message:"User Not Found"})
            res.status(201).json({message:"User Update Successfully",result:result})
    } catch (error) {
        res.status(400).json({success:false,message:"User Update Failed"})
    }
}

module.exports={
    loginUser,
    register,
    deleteUser,
    getAllUser,getById,
    updateUser
}

