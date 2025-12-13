 import React from 'react'
 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
 
 const App = () => {
   return (
     <div>
       <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
       </Router>
     </div>
   )
 }
 
 export default App
 