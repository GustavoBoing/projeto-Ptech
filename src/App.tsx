import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Menu from './layout/Menu'
import {Footer} from './layout/Footer'
import {Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import { Pokemon } from './pages/pokemon'

function App() {
 
  return (
    <div> 
      <Menu/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:uri" element={<Pokemon/>}/>
      </Routes>

    </div>
      <Footer/>
    </div>
  )
}

export default App

