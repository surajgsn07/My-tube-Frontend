import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MdDataSaverOn } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { getLikesOfVideoById, toggleVideoLike } from "../utils/likeDataFetch";
import { incrementView } from "../utils/videoDataFetch";
import { addVideoToPlaylist, createPlaylist, getPlaylistById, getUserPlaylists } from "../utils/playlistDataFetch";
import { useSelector } from "react-redux";
import { toggleSubscription } from "../utils/subscriptionDataFetch";

const Video = (
  {
    data,
    channel
  }
) => {
  const [likes, setlikes] = useState([])
  const [reload, setreload] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [userPlaylistList, setuserPlaylistList] = useState([]);
  const [newPlaylistDescription, setnewPlaylistDescription] = useState("")
  const [isowner, setisowner] = useState(false)
  const [subscribeStatus, setsubscribeStatus] = useState(false)
  const user = useSelector((state)=>state.auth.user);
  const checkOwner = ()=>{
    // if(user._id == (channel._id)){
    //   setisowner(true)
    // }
  }

  const shareURL = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).then(() => {
        console.log('URL shared successfully');
      }).catch((error) => {
        console.error('Error sharing URL:', error);
      });
    } else {
      console.error('Web Share API not supported');
      // Fallback behavior if Web Share API is not supported
    }
  };

  const handleDownload = async() => {
    
  const video = await fetch(data.videoFile)
  const videoblog = await video.blob()
  const videoUrl = URL.createObjectURL(videoblog)

  const link = document.createElement('a')
  link.href = videoUrl
  link.download = data.title
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  };

  const toggleSubscribe = async()=>{
    const sub = await toggleSubscription(channel._id);
    if(sub){
      setsubscribeStatus((prev)=>!prev)
    }
    setreload((prev)=>prev+1)
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSaveToPlaylist = async(playlistName) => {
    const obj = {
      name:newPlaylistName,
      description:newPlaylistDescription
    }
    const makePlaylist = await createPlaylist(obj);
    console.log(makePlaylist)
    if(makePlaylist){
      const add  = await addVideoToPlaylist(makePlaylist.data._id , data._id)
      console.log(add);
      setNewPlaylistName("");
      setnewPlaylistDescription("")
    }
    // Logic to save video to playlist goes here
    console.log(`Video saved to playlist: ${playlistName}`);
    // Close modal after saving
    setShowModal(false);
  };

  const addVideo =async(playlistId)=>{
    const add = await addVideoToPlaylist(playlistId , data._id);
    console.log(add)
    toggleModal();
  }
  

  const getPlaylist = async()=>{
    const list = await getUserPlaylists(user._id);
    console.log(list)
    setuserPlaylistList(list.data);
  }
  // console.log(owner)
  // console.log(data)
  // console.log(data._id)
  const incView = async()=>{
    const d = await incrementView(data._id);
    console.log(d);
  }

  const toggleLike =async ()=>{
    const like = await toggleVideoLike(data._id);
    if(like){
      console.log("Like toggled successfully");
      setreload((prev)=>prev+ 1);
    }
  }

  async function getLikes(videoId){
    const likes = await getLikesOfVideoById(videoId);
    console.log(likes)
    setlikes(likes.data);
  }

  useEffect(() => {
    checkOwner()
    getLikes(data._id);
    incView();
    getPlaylist();
    checkOwner()
    if(channel.isSubscribed)setsubscribeStatus(true)
  }, [reload , data ])
  
  // console.log(channel)
  // console.log(channel)
  return (
    <div className="relative">
      <div className="w-full overflow-hidden text-white">
        {/* video */}
        <video
          className="object-fit w-full h-full"
          src={data.videoFile}
          autoPlay
          controls
        ></video>
      </div>
      <div className="font-bold text-xl  text-white px-1 py-3">
        {/* title */}
        {data.title}
      </div>
      <div className="flex  justify-between">
        {/* channel */}
        <div className="flex items-center gap-3">
          <div className="overflow-hidden w-[30px] rounded-full">
            {/* avatar */}
            <img className="object-fit w-full h-full" src={channel.avatar} alt="" />
          </div>
          <div className="text-white text-lg font-bold ">
            {/* title */}
            {channel.username}
          </div>
          <div className="text-sm text-gray-400 pt-1">
            {/* subs */}
            {channel.subscribersCount}
            
          </div>
        </div>

        {!isowner && (
          <div onClick={toggleSubscribe} style={user?._id == channel?._id ? {display:"none"}:null}>
          <Button
            content={subscribeStatus ? "Subscribed" : "Subscribe"}
            
            className={`rounded-2xl py-2 pr-4 font-semibold ${subscribeStatus ? "bg-gray-600" : null}`}
          />
        </div>
        )}
      </div>
      <div className="w-full flex flex-wrap gap-4 pt-3 ">
        {/* likes and all */}
        <div className="flex  py-2 items-center text-white text-xl px-4 rounded-full  bg-gray-800 gap-2 w-min" >
          <div onClick={toggleLike}><AiFillLike /></div> <div className="font-semibold text-sm ">{likes.length}</div>
        </div>
        <div onClick={handleDownload} className="text-sm py-2 text-white flex gap-2 items-center font-semibold px-4 rounded-full bg-gray-800">
            Download 
        </div>
        <div  onClick={toggleModal} className="text-sm py-2 text-white flex gap-2 items-center font-semibold px-4 rounded-full bg-gray-800">
            Save <MdDataSaverOn />
        </div>
        <div onClick={shareURL} className="text-sm py-2 text-white flex gap-2 items-center font-semibold px-4 rounded-full bg-gray-800">
            Share <IoMdShare />
        </div>
      </div>
      <div className="rounded full text-sm bg-gray-900 p-5 text-white mt-4">
        {/* desc */}
        <div className="font-bold text-xl pb-2">Description </div>
        <hr className="text-gray-500 p-2" />
        {data.description}
      </div>



      <div className={`modal ${showModal ? 'block' : 'hidden'} z-30  w-full h-full absolute top-0`}>
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container  w-96 mx-auto mt-10 p-6 rounded-lg z-20 relative">
          
          {/* Input field for creating new playlist */}
          <div className="absolute top-0 z-10 flex flex-col gap-3 bg-white w-full overflow-hidden p-3 rounded-lg">
             <h2 className="text-lg font-semibold mb-4 ">Choose a Playlist</h2>
          <ul className="mb-4">
            {/* Display user playlists */}
            {userPlaylistList.map((playlist, index) => (
              <li onClick={()=>{addVideo(playlist._id)}}  className="mx-2 my-1 font-semibold bg-gray-900 text-white border-[1px] rounded-lg p-4 text-lg" key={index}>{playlist.name}</li>
            ))}
          </ul>
             <h2 className="text-lg font-semibold mb-4 ">Create a new Playlist</h2>
          <input
            type="text"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            placeholder="Enter new playlist name"
            className="w-full p-2 border rounded-md mb-4 z-10 "
          />
          <input
            type="text"
            value={newPlaylistDescription}
            onChange={(e) => setnewPlaylistDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full p-2 border rounded-md mb-4 z-10"
          />
          {/* Save button */}
          <button onClick={() => handleSaveToPlaylist(newPlaylistName)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2">Create Playlist</button>
          {/* Close button */}
          <button onClick={toggleModal} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg">Close</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Video;
