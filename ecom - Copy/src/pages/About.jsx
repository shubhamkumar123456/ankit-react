import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useUser } from '@clerk/clerk-react'

const About = () => {
  const { user, isLoaded,isSignedIn } = useUser()
  console.log(user)
  console.log(isSignedIn)
  console.log(isLoaded)
  return (
    <div>
      
      <h1>This is About page</h1>
    </div>
  )
}

export default About
