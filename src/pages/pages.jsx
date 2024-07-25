import React from 'react'
import Home from './home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResponsiveComponent from '../components/ResponsiveComponent'

function Pages() {
  return (
    <>
 <Router>
        <Routes>
          <Route path="/"    element={<Home />} />
          <Route path="/component"    element={<ResponsiveComponent />} />
         
        </Routes>
      </Router>
    </>
  )
}

export default Pages
