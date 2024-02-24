import React, { useState, useEffect } from "react";
import Video from "../components/Video";
import SideList from "../components/SideList";
import CommentList from "../components/CommentList";
import Button from "../components/Button";

const VideoPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showComments, setshowComments] = useState(false);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array for mount and unmount only

  return (
    <div className="flex  flex-col lg:flex-row justify-center px-3 lg:p-0">
      <div className="w-full lg:w-1/2 p-3 lg:p-8">
        <Video />
        {(windowWidth < 1024  && !showComments)? (
            <div  className="flex justify-center items-center w-full border-2 border-white rounded-full py-4">
                <div onClick={()=>{
                    setshowComments((prev)=>!prev)
                }}><Button content="Show comments"/></div>
            </div>
        ):(
            <div>
                { windowWidth<1024 && <div  className="flex justify-center items-center mb-3 w-full border-2 border-white rounded-full py-4">
                <div onClick={()=>{
                    setshowComments((prev)=>!prev)
                }}><Button content="Hide comments"/></div>
            </div>}
                <CommentList />

            </div>
        )}
      </div>
      <div className="sm:w-[638px] mx-auto  lg:w-[400px]">
        <div className="text-2xl white font-bold text-white">Reccomendations </div>
        <SideList />
      </div>
    </div>
  );
};

export default VideoPage;
