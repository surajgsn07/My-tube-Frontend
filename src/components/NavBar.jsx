import Logo from "./Logo";
import { mainName } from "../constants";
import Inputfield from "./Inputfield";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { CgProfile } from "react-icons/cg";
import { MdVideoCall } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { logoutUser } from "../utils/userDataFetch";
import { MyContext } from "./ContextProvider";
import { useDispatch , useSelector } from 'react-redux';
import { logout } from "../store/authSlice";

const NavBar = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.auth.user);

  const onSubmit = (data) => {};
  const logout = async()=>{
    const logoutData = await logoutUser();
    if(logoutData){
      dispatch(logout());
    }
  }



  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="w-full bg-zinc-900 text-white  p-3 flex flex-col lg:flex-row justify-center lg:justify-between ">
      <div className="flex gap-2 font-bold items-center text-xl justify-center w-full ">
        <Link to={'/'} className="flex gap-2 items-center justify-center"><Logo /> {mainName}</Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center item-center w-full px-9"
      >
        <div className="flex">
          <div className="lg:w-[600px]">
            <Inputfield
              className="flex items-center justify-center p-3 bg-gray-800 rounded-xl lg:w-[500px] w-[200px]"
              placeholder="Search"
              name="search"
              type="text"
              register={register}
              required
            />
          </div>
          {/* write its route */}
          <Link><Button type="submit" content="Search" className="p-3 px-4" /></Link>
        </div>
      </form>

      <div className="flex  gap-7 justify-around">
        {status && (
          <Link to={"/home/UploadVideo"}>
            <div className="text-3xl text-blue-90 pb-2 flex items-center justify-center">
              <MdVideoCall />
            </div>
          </Link>
        )}

        {status && (
          <Link to={"/home/PostTweet"}>
            <div className="text-3xl text-white flex justify-center items-center pb-3 font-semibold">
              <IoMdAddCircle />
            </div>
          </Link>
        )}

        {status && (
          <Link to={`/home/creatorProfile/${userData._id}`}><div className="flex flex-col justify-center items-center">
          <div className="flex items-center w-[30px] border-white text-white rounded-full overflow-hidden">
            <img
              className="object-fit w-full h-full"
              src={userData.avatar}
              alt=""
            />
          </div>
          <div className="p-0 text-xs font-semibold">You</div>
        </div></Link>
        )}

        {status ? (
          <div onClick={logout}>
            <Button content="Logout" />
          </div>
        ) : (
          <div className="flex item-center justify-center">
            <Link to={'/login'}><Button content="Login" /></Link>
            <div className="pt-4">or</div>
            <Link to={`/signup`}>
              <Button content="Signup" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
