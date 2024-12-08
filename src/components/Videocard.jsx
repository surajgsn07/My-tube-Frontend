import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserById, getUserChannelProfile } from "../utils/userDataFetch";
import { useSelector } from "react-redux";

function Videocard({ data }) {
  // console.log(data)
  const [first, setfirst] = useState("ho two words|");
  const [timeline, settimeline] = useState("");
  const [videoOwner, setvideoOwner] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const navigate = useNavigate()

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  function timeDifference(date1, date2 = new Date()) {
    const difference = date2.getTime() - date1.getTime();
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  }

  async function getOwner(userId) {
    const owner = await getUserById(userId);
    // console.log(owner.data);set
    setvideoOwner(owner.data);
    return owner.data;
  }

  useEffect(() => {
    setfirst(data.title);
    const dateString = data?.createdAt;
    if (dateString) {
      const dateObject = new Date(dateString);
      const formattedDate = timeDifference(dateObject);
      // console.log(formattedDate);
      settimeline(formattedDate);
    }

    const owner = getOwner(data.owner);

    if (owner) {
      setvideoOwner(owner);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array for mount and unmount only

  return (
    <div className="w-full sm:w-[45%] relative md:w-[40%] lg:w-[30%] xl:w-[23%]  ">
      {videoOwner._id === user._id ? (
            <Link to={`/update/video/${data._id}`}>
              <div
              className="bg-gray-800 px-2 py-1 font-semibold rounded-md text-white absolute z-40 right-6 top-5 "
              onClick={() => {
                navigate();
              }}
            >
              Edit
            </div>
            </Link>
          ) : null}
      <Link to={`/video/${data._id}`}>
        <div className="w-full overflow-hidden   h-40 rounded-2xl ">
          <img
            src={`${data.thumbnail}`}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex relative">
          
          <div className="p-1 pt-3">
            {/* photo */}
            <div className="rounded-full w-6 h-6 ">
              <img
                className="rounded-full h-full w-full"
                src={`${videoOwner.avatar}`}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className=" font-semibold leading-4 bg-transparent text-white p-1 pt-3 max-h-11 overflow-hidden">
              {/* title */}
              {windowWidth > 640
                ? first.length > 60
                  ? first.substring(0, 55) + " ..."
                  : first
                : null}
              {windowWidth < 400
                ? first.length > 85
                  ? first.substring(0, 85) + " ..."
                  : first
                : null}
              {windowWidth > 400 && windowWidth < 640
                ? first.length > 120
                  ? first.substring(0, 140) + " ..."
                  : first
                : null}
            </div>
            <div>
              <div className="text-gray-500 text-sm font-bold pt-1">
                {/* owner */}
                {videoOwner.fullName}
              </div>
              <div className="flex text-gray-500 text-sm gap-3">
                <div>
                  {/* view */}
                  {data.views} views
                </div>
                <div>
                  {/* upload time */}• {timeline}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Videocard;
