import React from 'react'
import AboutUs from '../../Pages/about/AboutUs'
import { Routes, Route } from "react-router-dom"

const Rutas = () => {
  
  
  
  
  return (
    
    <>
    <Routes>
        <Route path="/about" element={<AboutUs/>}/>


    </Routes>
    


    </>
  )
}

export default Rutas