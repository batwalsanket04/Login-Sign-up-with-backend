import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="password"
            name="password"
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
