import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import PNF from './pages/PNF';

const App = () => {
  return (
    <div>
        {/* <Home/>
        <About/> */}
        <BrowserRouter>
            <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/xyz' element={<About/>}/>
                  
                  <Route path='*' element={<PNF/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
