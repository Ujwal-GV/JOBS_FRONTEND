import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className='w-full p-5 px-2 md:px-7 lg:px-10 flex justify-between items-center'>
         <div className='center gap-1 '>
            <PiSealCheckFill className='text-2xl text-orange-500'/>
            <span className='font-bold text-2xl md:text-3xl'>JOB SHINE</span>
        </div>
        <div className='flex gap-2 items-center justify-center font-outfit'>
            <button className='btn-dark px-3 py-1 rounded-lg hidden md:flex'>SignUp</button> 
            <button className='bg-white shadow-sm shadow-black px-3 py-1 rounded-lg'>SignIn</button> 
        </div>                          
    </div>
  )
}

export default Navbar