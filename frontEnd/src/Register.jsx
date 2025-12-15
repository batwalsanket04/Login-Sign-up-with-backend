import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const [data,setData]=useState({name:"",email:"",password:""})

    const HandleForm=(e)=>{
    
     const {name,value}=e.target;
     setData({...data,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
             const result= await axios.post('https://login-sign-up-with-backend-backend.onrender.com/api/user/register',data)
            toast.success(result.data.message)
             setData({name:'',email:'',password:''})
        } catch (error) {
          toast.error(error.response?.data?.message || "Registration Failed")
}

    }


  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register
        </h2>

        <form onSubmit={(e)=>handleSubmit(e)}>
          <input
            type="text"
            name="name"
            id='name'
            value={data.name}
            onChange={(e)=>HandleForm(e)}
            placeholder="Name"
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="email"
            name="email"
            id='email'
            value={data.email}
            onChange={(e)=>HandleForm(e)}
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="password"
            name="password"
            id='password'
            onChange={(e)=>HandleForm(e)}
            value={data.password}
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <NavLink to="/userdata">
  <button
    type="button"
    className="w-full mt-3 bg-green-600 text-white py-2 rounded hover:bg-green-700"
  >
    See Users
  </button>
</NavLink>
 

        <p className="text-center text-sm mt-4">
          Already have an account?
       <NavLink to="/login">
           <span className="text-blue-600 cursor-pointer ml-1">
            Login
          </span>
       </NavLink>
        </p>
      </div>
    </div>
      
    </div>
  )
}

export default Register
