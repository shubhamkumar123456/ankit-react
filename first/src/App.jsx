import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Home from './Home'
import About from './About'
import HookUseEffecct from './HookUseEffecct'
import ShowApi from './ShowApi'
// import X from './Demo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Home/>

      <About/>
      <About/>
      <About/>
      <About/>
      <About/> */}
      <HookUseEffecct/>
      {/* <ShowApi/> */}
      
    </div>
  )
}

export default App
