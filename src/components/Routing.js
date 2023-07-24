import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from '../items/Home'
import Students from '../items/Students'
import Contacts from '../items/Contacts'

const Routing = () => {
  return (
  
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/contactUs' element={<Contacts/>} />
     </Routes>

    
    
  )
}

export default Routing
