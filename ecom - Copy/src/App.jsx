import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PNF from './pages/PNF'
import ViewDetails from './pages/ViewDetails'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Layout Route */}
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* About */}
          <Route path="xyz" element={<About />} />

          {/* View Product */}
          <Route path="view" element={<ViewDetails />} />

        </Route>

        {/* Routes without Navbar/Layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="*" element={<PNF />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App