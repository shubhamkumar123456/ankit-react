import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';


const SignupPage = () => {
      const {register,handleSubmit,formState: { errors },} = useForm();

      let usersArr = JSON.parse(localStorage.getItem('DatabaseSignup'))  ||  [];
      console.log(usersArr)// [{}, {}, {}]

      // [
      //   {name:"ankit",email:"ankit@gmail.com"},
      //   {name:"shubham",email:"shubham@gmail.com"}

      // ]

       const onSubmit = (data) =>{
          console.log(data) // {name:"rahul", email:"rahul@gmail.com",password:123}

          let find = usersArr.find((obj)=>obj.email ===data.email)
          console.log(find); 
          if(find){
            return toast.error("user already registered",{position:"top-center"})
          }
          else{
            usersArr.push(data);
          console.log(usersArr);
          localStorage.setItem('DatabaseSignup', JSON.stringify(usersArr))
          
          }

          
          
      } 
  return (
    <div className='flex justify-center'>
      {/* <SignUp/> */}
      <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col gap-3'>
        <label htmlFor="">Name</label>
        <input  {...register("name",{required:"name is required"})} className="border rounded p-2" type="text"  placeholder='enter name '/>
       { errors.name && <span className='text-red-600'>{errors.name.message}</span>}

        <label htmlFor="">Email</label>
        <input
         {...register("email",
          {required:"email is required",
          pattern:{value:/^[A-Za-z0-9_%+-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/,
          message:"email is invalid"
          }})}
          className="border rounded p-2" type="email" placeholder='enter email'/>
           { errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        <label htmlFor="">Password</label>

        <input {...register("password",
          {required:"password is required",
            minLength:{value:6,message:"password can not be less than 6"},
            pattern:{
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!]).*$/,
              message:"password must be a combination of special lower and uppercase character"}
          })}
           className="border rounded p-2" type="text" placeholder='enter password'/>
            { errors.password && <span className='text-red-600'>{errors.password.message}</span>}

        <button>Submit</button>

      </form>
    </div>
  )
}

export default SignupPage
