import React from "react";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import { FaThList } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";


const Bottombar = () => {
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state)=>state.auth.user);
  return (
    <div className="w-full flex bg-black z-90">
      <div className="text-white text-2xl flex w-full justify-around items-center">
        <div className="flex flex-col items-center">
        <Link to={"/"}>
            <IoMdHome />
          </Link>{" "}<div className="font-semibold text-sm">Home</div>
        </div>
        {status ? (
          <>
            <div className="text-4xl text-violet-600 font-semibold">
            <Link to={"/home/PostTweet"}>
                <IoMdAddCircle />
              </Link>
            </div>
            <div className="text-3xl text-violet-600 pb-2 flex items-center justify-center">
            <Link to={"/home/UploadVideo"}>
                <MdVideoCall />
              </Link>
            </div>
            <div className="flex flex-col items-center">
            <Link to="/home/subscribed">
                <FaThList />
              </Link>
              <div className="font-semibold text-sm">Subscribed</div>
            </div>
            <div className="flex flex-col items-center">
            <Link to={`/home/creatorProfile/${user.username}`}>
                <CgProfile />
              </Link>
              <div className="font-semibold text-sm">Profile</div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <Link to="/login">
              <IoMdLogIn />
            </Link>{" "} <div className="font-semibold text-sm">Login</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bottombar;
