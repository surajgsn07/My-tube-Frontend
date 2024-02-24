import React from "react";
import Button from "../components/Button";
import CommentList from "../components/CommentList";
import VideoCardList from "../components/VideoCardList";
import SideList from "../components/SideList";
import ProfileVideoList from "../components/ProfileVideoList";
import Videocard from "../components/Videocard";
import { FaUserEdit } from "react-icons/fa";
import Inputfield from "../components/Inputfield";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const CreatorProfile = ({ data, isOwner = false }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  const coverImage = () => {
    const input = document.querySelector("#coverImage");
    console.log(input);
    input.click();
    const form = document.querySelector("#coverImageForm");

    // Add a check to make sure the form is found
    if (form) {
      form.submit();
    }
  };

  const avatarSubmit = ()=>{
    document.querySelector("#avatar").click()
    const form = document.querySelector("#avatarForm");

    // Add a check to make sure the form is found
    if (form) {
      form.submit();
    }

  }

  const options = [
    {
      name: "Videos",
      slug: "videos",
    },
    {
      name: "Tweets",
      slug: "tweets",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden max-h-48 relative">
        {/* coverimage */}
        <img className="w-full object-cover h-full" src="sg.jpg" alt=""  />
        <div
          onClick={() => {
            coverImage();
          }}
          className="absolute bottom-5 right-5 text-3xl "
        >
          <FaUserEdit />
        </div>
        <div className="text-black bg-white font-semibold absolute bottom-0 right-5">
          Edit
        </div>
        <form onSubmit={onSubmit} id="coverImageForm" hidden>
          <input type="file" hidden id="coverImage" accept="image/*" />
        </form>
      </div>
      <div className="lg:flex pt-5">
        {/* owner info */}
        <div className="w-[150px] overflow-hidden rounded-full m-5 relative">
          <img className="w-full object-cover" src="sg.jpg" alt="" />
          <div onClick={avatarSubmit} className=" bg-gray-600 p-1 rounded-xl  absolute bottom-5 right-3 text-2xl"> <MdEdit /> </div>
            <form onSubmit={onSubmit} id="avatarForm" hidden>
            <input type="file" hidden id="avatar" accept="image/*"/>
            </form>
        </div>
        <div>
          <div className="text-white font-bold text-3xl px-5 pt-3">
            Full Name
          </div>
          <div className="flex gap-3 text-white px-5 py-3 flex-wrap ">
            <div>username</div>•<div>223 subscribers</div>•<div>103 videos</div>
          </div>
          <div className="px-5 flex gap-5 flex-wrap">
          {!isOwner && (
              <div>
                <Button content="Subscribe" />
              </div>
            )}
            {isOwner && (
              <div>
                <Link to="/home/dashboard"><Button content="Dashboard" /></Link>
              </div>
            )}
            {isOwner && (
              <div>
                <Link to="/home/customizeChannel"><Button content="Customize channel" /></Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-around text-white text-xl  font-semibold">
        {options.map((option) => (
          <div key={option.name}>
            <Link to={`/home/creatorProfile/:userId/${option.slug}`}>
              {option.name}
            </Link>
            {/* complete it with the link tag */}
          </div>
        ))}
      </div>
      <div className="flex items-center w-full flex-wrap gap-5 py-4 px-3">
        {/* content */}
        {/* make here two options : 
            one for tweets and other for videos of the owner */}
            <Outlet/>
      </div>
    </div>
  );
};

export default CreatorProfile;
