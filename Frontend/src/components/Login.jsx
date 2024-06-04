import React from 'react'
import { Link } from 'react-router-dom'
// import {useForm} from 'react-hook-form'

function Login() {
    // const{
    //     register,
    //     handleSubmit,
    //     formState:{errors},
    // }=useForm();


  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form  method="dialog">
    
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:text-white">✕</button>
    </form>
    <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Login</h3>
    <div className='mt-4 space-y-2 dark:bg-slate-900 dark:text-white'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3  py-1 border rounded-md outline-none' 
        // {...register ("email",{required:true})}
        />
        {/* <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>} */}
    </div>
    <div className='mt-4 space-y-2 dark:bg-slate-900 dark:text-white'>
        <span>Password</span>
        <br />
        <input type="text" placeholder='Enter your password' className='w-80 px-3  py-1 border rounded-md outline-none'
        // {...register ("password",{required:true})}
         />
        {/* <br />
         {errors.password && <span className='text-sm text-red-500'>This field is required</span>} */}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mr-40 dark:bg-slate-900 dark:text-white'>Login</button>
        <p className='dark:bg-slate-900 dark:text-white'>Not registered?{" "} 
        <Link  to="/signup" className='text-blue-500 cursor-pointer' >Signup</Link>{" "}</p>
    </div>
  </div>
</dialog>
    </div>
  ) 
}

export default Login
