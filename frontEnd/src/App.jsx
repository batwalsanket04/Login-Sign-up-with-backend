 import React from 'react'
 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import UserData from './UserData'
 
 const App = () => {
   return (
     <div>
       <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userdata' element={<UserData/>}/>


        </Routes>
       </Router>
     </div>
   )
 }
 
 export default App
 