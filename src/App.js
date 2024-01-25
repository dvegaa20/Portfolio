import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home, About, Skills, Portfolio, Testimonials } from './containers/index'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="testimonials" element={<Testimonials />} />
    </Routes>
  )
}

export default App