import React from 'react'
import { mainName } from '../constants'
import Logo from './Logo'
import Inputfield from './Inputfield'
import { useForm } from "react-hook-form";
import Button from './Button';
import axios from 'axios'
import {registerUser , loginUser} from '../utils/userDataFetch';
import { login, logout} from '../store/authSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Login() {


  
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data)=>{
    console.log(data)
    

    const userdata = await loginUser(data);
    if(userdata){
      console.log(userdata.data.user)
      dispatch(login(userdata.data.user))
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
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col item-center'>
            <Inputfield placeholder="Enter your username" name="username" type="text" label="Username:" register={register}  required />
            <Inputfield placeholder="Enter your password" name="password" type="password" label="Password:" register={register}  required />
            <Button content='Login' type="submit"/>
        </form>
    </div>
  )
}

export default Login