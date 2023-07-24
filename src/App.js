import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routing from './components/Routing'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routing/>
      </BrowserRouter>
    </div>
  )
}

export default App

