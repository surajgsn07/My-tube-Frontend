import React, { useEffect, useState } from "react";
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
import { Link, Outlet, useParams } from "react-router-dom";
import {
  getCurrentUser,
  getUserChannelProfile,
  updateCoverImage,
  updateUserAvatar,
} from "../utils/userDataFetch";

const CreatorProfile = ({ data }) => {
  const [profileData, setProfileData] = useState("null");
  const [isOwner, setisOwner] = useState(false);
  const [reload, setreload] = useState(0);
  const { register, handleSubmit } = useForm();
  const { username } = useParams();
  // console.log(profileData)

  const submitAvatar = async () => {
    const input = document.querySelector("#avatar");
    const file = input.files[0];

    console.log(file);
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      console.log(formData);

      const avatarData = async () => {
        const data = await updateUserAvatar(formData);
        if (data) {
          setreload((prev) => prev + 1);
        }
        console.log(data);
      };
      avatarData();
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  const SubmitCoverImage = async () => {
    const input = document.querySelector("#coverImage");
    const file = input.files[0];

    console.log(file);
    try {
      const formData = new FormData();
      formData.append("coverImage", file);
      console.log(formData);

      const coverImageData = async () => {
        const data = await updateCoverImage(formData);
        if (data) {
          setreload((prev) => prev + 1);
        }
        console.log(data);
      };
      coverImageData();
    } catch (error) {
      console.error("Error uploading coverImage:", error);
    }
  };

  const coverImage = () => {
    const input = document.querySelector("#coverImage");
    console.log(input);
    input.click();
  };

  const avatarSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector("#avatar");
    input.click();
  };

  const options = [
    {
      name: "Videos",
      slug: "videos",
    },
    {
      name: "Tweets",
      slug: "tweets",
    },
    {
      name: "Playlists",
      slug: "playlists",
    },
  ];

  const dataFetch = async () => {
    const a = await getUserChannelProfile(username);
    setProfileData(a.data);
  };
  useEffect(() => {
    dataFetch();
    const owner = getCurrentUser();
    if (owner._id === profileData._id) {
      setisOwner(true);
    }
  }, [reload]);

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden max-h-48 relative">
        {/* coverimage */}
        <img
          className="w-full object-cover h-full"
          src={profileData && profileData.coverImage}
          alt=""
        />
        <div
          onClick={() => {
            coverImage();
          }}
          className="absolute bottom-5 right-5 text-3xl "
        >
          <FaUserEdit />
        </div>
        <div
          onClick={coverImage}
          className="text-black bg-white font-semibold absolute bottom-0 right-5"
        >
          Edit
        </div>
        <form onSubmit={() => {}} id="coverImageForm" hidden>
          <input
            type="file"
            hidden
            id="coverImage"
            accept="image/*"
            onChange={SubmitCoverImage}
          />
        </form>
      </div>
      <div className="lg:flex pt-5">
        {/* owner info */}
        <div className="w-[150px] overflow-hidden rounded-full m-5 relative">
          <img
            className="w-full object-cover"
            src={profileData && profileData.avatar}
            alt=""
          />
          <div
            onClick={(e) => {
              avatarSubmit(e);
            }}
            className=" bg-gray-600 p-1 rounded-xl  absolute bottom-5 right-3 text-2xl"
          >
            {" "}
            <MdEdit />{" "}
          </div>
          <form
            onSubmit={(e) => {}}
            id="avatarForm"
            hidden
            encType="multipart/form-data"
          >
            <input
              type="file"
              hidden
              id="avatar"
              accept="image/*"
              onChange={submitAvatar}
            />
          </form>
        </div>
        <div>
          <div className="text-white font-bold text-3xl px-5 pt-3">
            {profileData && profileData.fullName}
          </div>
          <div className="flex gap-3 text-white px-5 py-3 flex-wrap ">
            <div>@{profileData && profileData.username}</div>•
            <div>{profileData && profileData.subscribersCount} subscribers</div>
            •<div>{profileData.videos && profileData.videos.length} videos</div>
          </div>
          <div className="px-5 flex gap-5 flex-wrap">
            {!isOwner && (
              <div>
                <Button content="Subscribe" />
              </div>
            )}
            {isOwner && (
              <div>
                <Link to="/home/dashboard">
                  <Button content="Dashboard" />
                </Link>
              </div>
            )}
            {isOwner && (
              <div>
                <Link to="/home/customizeChannel">
                  <Button content="Customize channel" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-around text-white text-xl  font-semibold">
        {options.map((option) => (
          <div key={option.name}>
            <Link
              to={`/home/creatorProfile/${profileData.username}/${option.slug}`}
            >
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
        <Outlet />
      </div>
    </div>
  );
};

export default CreatorProfile;
