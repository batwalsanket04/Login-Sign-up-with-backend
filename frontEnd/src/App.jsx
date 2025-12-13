 import React from 'react'
 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import UserData from './UserData'
import Update from './Update'
 
 const App = () => {
   return (
     <div>
       <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/userdata' element={<UserData/>}/>
          <Route path='/update/:id' element={<Update/>}/>



        </Routes>
       </Router>
     </div>
   )
 }
 
 export default App
 