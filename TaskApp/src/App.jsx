import React from 'react'
import './App.css'
import Form from './Form'
import CounterApp from './CounterApp'
import Trial from './Trial'
import Calculator from './Calculator'
import ShowData from './ShowData'
import ExpenseTracker from './ExpenseTracker'
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      {/* <h1>This is Task App</h1>
      <Form/> */}
      {/* <CounterApp/>
        <Trial/>
        <Calculator/>
        <ShowData/>
        <ExpenseTracker/>
        <ToastContainer/> */}

        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/'  element={<ExpenseTracker/>}/>
                <Route path='/calc' element={<Calculator/>}/>
                <Route path='/trial' element={<Trial/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/show' element={<ShowData/>}/>
                <Route path='/counter' element={<CounterApp/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
