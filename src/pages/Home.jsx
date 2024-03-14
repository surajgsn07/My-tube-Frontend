import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Videocard from "../components/Videocard";
import Bottombar from "../components/Bottombar";
import { useState } from "react";
import CreatorProfile from "./CreatorProfile";
import Dashboard from "./Dashboard";
import CustomizeChannel from "./CustomizeChannel";
import { Outlet } from "react-router-dom";
import UploadVideo from "../components/UploadVideo";
import UploadTweet from "../components/UploadTweet";
import Subscribed from "./Subscribed";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  return (
    <div className="lg:flex">
      {windowWidth < 1024 ? (
        <div className=" fixed bg-zinc-900 z-50 p-2 bottom-0 w-full">
          <Bottombar />
        </div>
      ) : (
        <div className="sticky bg-black  top-[80px] h-screen">
          <Sidebar />
        </div>
      )}

      <div className="w-full  bg-black p-3 flex gap-9 flex-wrap justify-start pb-20">
        {/* <Subscribed/> */}
        <Outlet/>
        
      </div>
    </div>
  );
};

export default Home;
