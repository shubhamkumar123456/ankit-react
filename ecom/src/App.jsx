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
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/view" element={<ViewDetails/>}/>
        <Route path="*" element={<PNF/>}/>

      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App