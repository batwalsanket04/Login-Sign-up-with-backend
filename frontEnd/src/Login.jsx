import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const Login = () => {
  const [data,setData]=useState({email:'',password:''})
    const nav=useNavigate();
  


const handleForm=(e)=>{
  const {name,value}=e.target;

  setData({...data,[name]:value})
}

const handleSubmit=async(e)=>{
 e.preventDefault();
 try {
  const result=await axios.post('http://127.0.0.1:3000/api/user/login',data)

  localStorage.setItem("token",result.data.token)

  toast.success(result.data.message || "Login Successfully")
      nav("/userdata")


  setData({email:"",password:""})
 } catch (error) {

  toast.error(error.response?.data?.message || "Login Failed")
  
 }
}


  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id='email'
            onChange={handleForm}
            value={data.email}
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="password"
            name="password"
            value={data.password}
            id='password'
            onChange={handleForm}
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?
         <NavLink to="/"> <span className="text-blue-600 cursor-pointer ml-1">
            Register
          </span></NavLink>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
