import React from 'react'
import { MdEdit } from "react-icons/md";
import { useForm } from "react-hook-form";
import Inputfield from '../components/Inputfield';
import Button from '../components/Button';

const CustomizeChannel = () => {
    const { register, handleSubmit } = useForm();
    const changeAvatar = ()=>{
    }

    const updateDetails = ()=>{

    }

    const avatarSubmit = ()=>{
        document.getElementById('avatar').click();

        const form = document.getElementById("avatarForm");
        if(form){
            form.submit()
        }
    }
  return (
    <div className='flex flex-col items-center w-full'>
        <div className='font-bold text-3xl text-white underline'>Edit profile</div>
        <div className="w-[150px] overflow-hidden rounded-full m-5 relative">
          <img className="w-full object-cover" src="sg.jpg" alt="" />
          <div onClick={avatarSubmit} className=" bg-gray-600 p-1 rounded-xl  absolute bottom-5 right-3 text-2xl"> <MdEdit /> </div>
            <form onSubmit={changeAvatar} id="avatarForm" hidden>
            <input type="file" hidden id="avatar" accept="image/*"/>
            </form>
        </div>
        <form onSubmit={updateDetails} className='flex flex-col items-center'>
            <Inputfield placeholder='Enter your Full name ' type="text" name="fullName"  register={register}  required/>
            <Inputfield placeholder='Enter your email ' type="text" name="email"  register={register}  required/>
            <Button type="submit" content='Submit'/>
        </form>
    </div>
  )
}

export default CustomizeChannel