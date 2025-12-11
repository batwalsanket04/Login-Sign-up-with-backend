const express=require('express');
const { loginUser, register, deleteUser, getAllUser, getById, updateUser } = require('../controller/userController');

const Router=express.Router();

Router.post("/register",register)
Router.post("/login",loginUser)
Router.delete("/delete/:id",deleteUser)
Router.get("/alluser",getAllUser)
Router.get("/byid/:id",getById)
Router.put("/update/:id",updateUser)

module.exports=Router;
