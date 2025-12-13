import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const {id}=useParams();
    const nav=useNavigate()
    const [data,setData]=useState({name:"",email:"", password:""})

    useEffect(()=>{
        const FetchData=async()=>{
  try {
    const result= await axios.get(`http://127.0.0.1:3000/api/user/byid/${id}`)
     setData(result.data.user)
  } catch (error) {
     console.log(error)
  }
        }
     FetchData()
    },[id])


    const handleForm=(e)=>{
        const{name,value}=e.target;
        setData({...data ,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
try {
    const result=await axios.put(`http://127.0.0.1:3000/api/user/update/${id}`,data)
    setData((prev)=>prev.filter((val)=>val._id!==id))
    alert(result.data.message || "user Updated Successfully..")
    nav("/userdata")
} catch (error) {
    alert(error.result?.data?.message) 
}
    }

  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 class="text-2xl font-bold mb-4 text-center">Update</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleForm}
              placeholder="Name"
              class="w-full p-2 border rounded mb-3"
            />
            <input
              type="email"
              id="email"
              onChange={(e)=>handleForm(e)}
              value={data.email}
              name="email"
              
              placeholder="Email"
              class="w-full p-2 border rounded mb-3"
            />
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e)=>handleForm(e)}
              value={data.password}
              placeholder="Password"
              class="w-full p-2 border rounded mb-4"
            />

            <button class="w-full bg-blue-600 text-white py-2 rounded">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
