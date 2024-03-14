import React, { useState, useEffect } from "react";
import Video from "../components/Video";
import SideList from "../components/SideList";
import CommentList from "../components/CommentList";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { getAVideo } from "../utils/videoDataFetch";
import { FaChessKing } from "react-icons/fa";
import { getUserById, getUserChannelProfile } from "../utils/userDataFetch";
import { AiFillAliwangwang, AiTwotoneWallet } from "react-icons/ai";
import { addComment, getVideoComments } from "../utils/comment.data.fetch";
import Inputfield from "../components/Inputfield";
import { useForm } from "react-hook-form";


const VideoPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showComments, setshowComments] = useState(false);
  const [video, setvideo] = useState({});
  const [owner, setowner] = useState({});
  const [commentList, setcommentList] = useState([]);
  const [reload, setreload] = useState(0);
  const { register, handleSubmit , reset } = useForm();
  const {videoId} = useParams();




  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };


  useEffect(() => {
    loadFunc();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [videoId , reload]); 

  async function getVideo(videoId){
    const video = await getAVideo(videoId);
    if(video){
      setvideo(video.data);
      await getowner(video.data.owner.username)
      // console.log(video)
    }
  }

  async function getowner(username){
    const owner = await getUserChannelProfile(username);
    if(owner){
      setowner(owner.data);
    }
  }

  async function comments(videoId){
    const page = 1;
    const limits = 10;
    const data = await getVideoComments(videoId , {page , limits});
    // console.log(data)
    setcommentList(data.data);

    // const data = await 
  }

  async function loadFunc(){
    await getVideo(videoId);
    await comments(videoId);
  }

  const submitComment = async(data)=>{
    console.log(data)
    const commentData = await addComment(videoId , data);
    console.log(commentData)
    if(commentData){
      
      setreload((prev)=>prev+1);
      reset()
    }
    
  }



  return (
    <div className="flex  flex-col lg:flex-row justify-center px-3 lg:p-0">
      <div className="w-full lg:w-1/2 p-3 lg:p-8">
        <Video data={video} channel={owner} />
        <div className="w-full mx-3 my-5 text-white rounded-xl px-2 py-4 border-[1px] border-white ">
            <form onSubmit={handleSubmit(submitComment)} className=" w-[99%] flex  justify-center items-center" >
              <Inputfield className=" w-fit" placeholder="Add your comment.. "   required={true} name={'content'} register={register} />
              <div id="btn"><Button content="Add" type={'submit'}/></div>
            </form>
        </div>
        {(windowWidth < 1024  && !showComments)? (
            <div  className="flex justify-center items-center w-full border-2 border-white rounded-full py-4">
                <div onClick={()=>{
                    setshowComments((prev)=>!prev)
                }}><Button content="Show comments"/></div>
            </div>
        ):(
            <div className="w-full">
                { windowWidth<1024 && <div  className="flex justify-center items-center mb-3 w-full border-2 border-white rounded-full py-4">
                <div onClick={()=>{
                    setshowComments((prev)=>!prev)
                }}><Button content="Hide comments"/></div>
            </div>}
                <CommentList videoId={videoId} commentList={commentList} />

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
