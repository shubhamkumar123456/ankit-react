// import React, { useState } from 'react'
// import { SignIn, SignUp } from '@clerk/clerk-react'


// const LoginPage = () => {

//   const [userData, setuserData] = useState({
//     email:"",
//     password:""
//   });

 

//   function handleChanger(e){
//     console.log(e.target) // tag // <input/>
//     console.log(e.target.name) // tag name attribute --> email
//     console.log(e.target.value)  // tag value  --> i
//     setuserData({...userData,[e.target.name]:e.target.value})  //{email:"i", password:"j",}
//   }

//   function handleSubmit(){
//       console.log(userData)
//       if(!userData.email){
//         alert("email is required")
//       }
//       if(!userData.password){
//         alert("password is required")
//       }
//       if(!userData.email.includes("@")){
//         alert("email is not valid")

//         let pattern = /^ /
//         if(userData.email.match(pattern)){

//         }
//       }
//   }
//   return (
//     <div>
//       {/* <SignIn/> */}
//       <label htmlFor="">Email</label>
//       <input name='email' onChange={handleChanger} type="email" />

//       <label htmlFor="">Password</label>
//       <input name='password' onChange={handleChanger} type="password" />
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   )
// }

// export default LoginPage

import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { useForm } from "react-hook-form"
import { data, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const {register, handleSubmit,formState: { errors },} = useForm();

    let database = JSON.parse(localStorage.getItem('DatabaseSignup')) || []
    console.log(database) // [{}, {}, {}, {}..]

    let navigate = useNavigate()

    function onSubmit(obj){
        console.log(obj)
        
        let find = database.find((val)=>val.email === obj.email);//{name, email,password}
        if(find){
            if(find.password === obj.password){
                toast.success("login successfully",{position:"top-center"})
                  navigate('/')
            }
            else{
                toast.error("wrong password",{position:"top-center"});
            }
        }
        else{
          toast.error("user not found please signup",{position:"top-center"});
        }

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <SignIn/> */}
      <label htmlFor="">Email</label>
      <input  {...register("email",{required:"email is required",pattern:{value:/^[A-Za-z0-9._+]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message:"email is invalid"}})} type="email" />

      {errors.email && <span className='text-red-800'>{errors.email.message}</span>}

      <label htmlFor="">Password</label>
      <input {...register("password", {required:"password is required"})} type="password" />

      <button>Submit</button>

    </form>
  )
}

export default LoginPage





