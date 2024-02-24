import React from 'react'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import { FaThList } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { useSelector } from 'react-redux';
import { IoMdLogIn } from "react-icons/io";

const Bottombar = () => {
  const status = useSelector((state)=>state.auth.status);
  return (
    <div className='w-full flex '>
        <div className="text-white text-2xl flex w-full justify-around items-center">
            <div className='flex flex-col items-center'><IoMdHome /> <div className='font-semibold text-sm'>Home</div></div>
            {status?(
              <>
              <div className='text-4xl text-violet-600 font-semibold'><IoMdAddCircle /></div>
              <div className='text-3xl text-violet-600 pb-2 flex items-center justify-center'>
              <MdVideoCall />
            </div>
              <div className='flex flex-col items-center'><FaThList /><div className='font-semibold text-sm'>Subscribed</div></div>
              <div className='flex flex-col items-center'><CgProfile /><div className='font-semibold text-sm'>Profile</div></div></>
            ):(
              
              <div className='flex flex-col items-center'><IoMdLogIn /> <div className='font-semibold text-sm'>Login</div></div>
            )}
        </div>
    </div>
  )
}


export default Bottombar