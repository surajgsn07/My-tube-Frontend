import React, { useEffect, useState } from 'react'
import { mainName } from '../constants'
import Logo from './Logo'
import Inputfield from './Inputfield'
import { useForm } from "react-hook-form";
import Button from './Button';
import axios from 'axios'
import {registerUser , loginUser} from '../utils/userDataFetch';
import { login, logout} from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { load, stopLoad } from '../store/reloadSlice';
import { setCookie } from '../axios/cookieFunc';



function Login() {


  
  
  const { register, handleSubmit } = useForm();
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accessToken, setaccessToken] = useState("jbkkhbm")
  Cookies.set('accessToken', accessToken);
  // console.log(document.cookie.includes("accessToken"));
  const a = useSelector((state)=>state.auth.user);

  useEffect(()=>{
    
  },[accessToken]);
  
  const onSubmit = async (data , e)=>{
    dispatch(load());
    e.preventDefault();
    const userdata = await loginUser(data);
    if(userdata){
      console.log({userdata})

      
      setCookie('token', userdata.data.accessToken);
      console.log(userdata.data.user);
      const user = userdata.data.user;
      const obj = {
        user
      }
      dispatch(login(obj));
      dispatch(stopLoad());
      // console.log(a)
      navigate('/')
    }

  }

  return (
    <div className='p-4 w-[90%] bg-black md:w-[550px] text-white mx-auto flex flex-col items-center justify-center px-auto rounded-3xl'>
        <div className='flex justify-center items-center font-extrabold gap-2 text-2xl'>
            <Logo/>{mainName}
        </div>
        <div className='flex justify-center items-center font-semibold m-4 gap-2 text-2xl'>
            Login
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col item-center gap-4 flex-wrap'>
            <Inputfield placeholder="Enter your username" name="username" type="text" label="Username:" register={register}  required />
            <Inputfield placeholder="Enter your password" name="password" type="password" label="Password:" register={register}  required />
            <Button content='Login' className={`${loading ? "bg-gray-900" : null}`} type="submit"/>
        </form>
    </div>
  )
}

export default Login
