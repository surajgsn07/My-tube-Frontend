import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUserChannelProfile } from "../utils/userDataFetch";
import { getAVideo, getAllVideos ,getAllVideosByUserId} from "../utils/videoDataFetch";
import { IoLogoXbox } from "react-icons/io";
import { set } from "react-hook-form";
import { getChannelVideos } from "../utils/dashboardDataFetch";

function Container(

) {
  const {username} = useParams();
  const [videoList, setvideoList] = useState([]);

  const status = useSelector((state) => state.auth.status);
  const user1 = useSelector((state)=>state.auth.user);


  const pageData = async()=>{
    let data =[];
    if(username){
      const user = await getUserChannelProfile(username);
      console.log(user.data)
      if(user){
        data = await  getAllVideosByUserId(user.data._id);
        console.log(data)
        setvideoList(data.data);
        return;
      }
    }else{
      data = await getAllVideos({p:1 , l:10});
    }
    console.log(Array.isArray(data.data.docs));
    
    setvideoList(data.data.docs);
    return data.data.docs;
  }

  useEffect(()=>{
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("refreshToken"));
    const contains = pageData();
    if(!contains){
      setvideoList(contains);
    }
  },[])

  return (
    <div className="w-full h-full flex gap-7 flex-wrap mx-auto">
      {Array.isArray(videoList) && videoList.map((video , index)=>(
        <Videocard key={index}  data={video}/>
      ))}
    </div>
  );
}

export default Container;
