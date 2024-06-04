import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
// import {useForm} from 'react-hook-form'

function Signup() {
//     const{
//         register,
//         handleSubmit,
//         formState:{errors},
//     }=useForm();

  return (
   <>
   <div className='flex h-screen items-center justify-center '>
   <div  className="w-[600px]">
  <div className="modal-box ">
    <form   method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:text-white">✕</Link>
    </form>
    <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Signup</h3>
    <div className='mt-4 space-y-2 dark:bg-slate-900 dark:text-white'>
        <span>Name </span>
        <br />
        <input type="text" placeholder='Enter your fullname' className='w-80 px-3  py-1 border rounded-md outline-none' 
        // {...register ("name",{required:true})}
        />
        {/* <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>} */}
    </div>
    <div className='mt-4 space-y-2 dark:bg-slate-900 dark:text-white'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3  py-1 border rounded-md outline-none' 
    //    {...register ("email",{required:true})}
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
    <div className='flex justify-around mt-5'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-2 text-md hover:bg-pink-700 duration-200 mr-40 dark:bg-slate-900 dark:text-white'>Signup</button>
        <p className=' text-md dark:bg-slate-900 dark:text-white'>Have account?{" "} 
        <button className='text-blue-500 cursor-pointer' 
        onClick={()=>document.getElementById("my_modal_3").showModal()}
        >Login</button>{" "}
        <Login/></p>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Signup
