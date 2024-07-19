import React from 'react'
import Home from './home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Pages() {
  return (
    <>
 <Router>
        <Routes>
          <Route path="/"    element={<Home />} />
         
        </Routes>
      </Router>
    </>
  )
}

export default Pages
