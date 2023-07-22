import React from 'react'
import AboutUs from "../../Pages/about/AboutUs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Rutas = () => {




  return (

    <>
     <Router>
      <Routes>
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
  </Router>
   

    </>
  )
}

export default Rutas