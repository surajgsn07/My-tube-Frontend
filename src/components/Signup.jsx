import React from 'react'
import { mainName , request} from '../constants'
import Logo from './Logo'
import Inputfield from './Inputfield'
import { useForm } from "react-hook-form";
import Button from './Button';
import axios from 'axios'
import {registerUser} from '../utils/userDataFetch';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout} from '../store/authSlice'
import { setCookie } from '../axios/cookieFunc';


function Signup() {
    
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const onSubmit = async (data)=>{
    console.log(data)
    data.avatar = data.avatar[0];

    const userData = await registerUser(data);


    if(userData){
      
      setCookie('accessToken', userData.data.accessToken);
      setCookie('refreshToken',userData.data.refreshToken);
      const user = userData.data;
      const obj = {
        user
      }
      dispatch(login(obj));
      // console.log(a)
      navigate('/')
    }

    return null
  }
  
  return (
    <div className='mt-[50px] p-4 w-[90%] bg-black md:w-[550px] text-white mx-auto flex flex-col items-center justify-center px-auto rounded-3xl'>
        <div className='flex justify-center items-center font-extrabold gap-2 text-2xl'>
            <Logo/>{mainName}
        </div>
        <div className='flex justify-center items-center font-semibold m-4 gap-2 text-2xl'>
            SignUp
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col item-center'>
            <Inputfield placeholder="Enter your username" name="username" type="text" label="Username:" register={register}  required />
            <Inputfield placeholder="Enter your email" name="email" type="email" label="Email:" register={register}  required />
            <Inputfield placeholder="Enter your name" name="fullName" type="text" label="FullName:" register={register}  required />
            <Inputfield placeholder="Enter your password" name="password" type="password" label="Password:" register={register}  required />
            <Inputfield placeholder="Upload your avatar" name="avatar" type="file" label="Avatar:" register={register}  required/>
            <Inputfield placeholder="Upload your cover image " name="coverImage" type="file" label="Cover Image:" register={register} />
            <Button content='SignUp' type="submit"/>
        </form>
    </div>
  )
}

export default Signup