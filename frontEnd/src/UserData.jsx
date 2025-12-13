import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { data, NavLink, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

const UserData = () => {
  const [user, setUSer] = useState([]);


  useEffect(()=>{
    
        const FetchData=async()=>{
          try{
            const result=await axios.get('http://127.0.0.1:3000/api/user/alluser')
            setUSer(result.data.result||result.data) 
            console.log("Data fetch SuccessFully")
        }catch (error) {
         console.log(error)
    }
        
    } 

    FetchData();    
    
  },[])

const deleteUser=async(id)=>{
    try {
        console.log(id)
        window.confirm("Are You Sure?")
       const result= await axios.delete(`http://127.0.0.1:3000/api/user/delete/${id}`)
        setUSer((prev) => prev.filter((val) => val._id !== id))
        toast.success(result.data.message|| "User Deleted Successfully");
        console.log(result.data.result)
    } catch (error) {
         toast.error(error.result?.data?.message || "User Deleted Failed");
    }

}

  
  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
        
        <h2 className="text-2xl font-bold p-4 border-b">
          User List
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-200 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">Sr.no</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {user.map((val, index) => (
                <tr
                  key={val._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 font-medium">
                    {val.name}
                  </td>
                  <td className="px-6 py-3">
                    {val.email}
                  </td>
                  <td className="px-6 py-3 text-center space-x-2">
                    <NavLink to={`/update/${val._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Edit
                      </button>
                    </NavLink>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => deleteUser(val._id)}
                    >
                      Delete
                    </button>
                   <NavLink to={"/"}>
                     <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Register
                    </button>
                   </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default UserData;
