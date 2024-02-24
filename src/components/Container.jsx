import React from "react";
import Videocard from "./Videocard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../utils/userDataFetch";

function Container() {
  
  console.log(document.cookie)



  const { userId } = useParams();
  const status = useSelector((state) => state.auth.status);

  // const user = useSelector((state)=>state.auth.user);
  // console.log(user)
  console.log(document.cookie.includes("accessToken"));
  const user = async () => {
    // const a = await getCurrentUser();
    // console.log(a)
  };
  user();

  return (
    <div className=" h-full flex gap-7 flex-wrap mx-auto">
      <Videocard />
      <Videocard />
      <Videocard />
      <Videocard />
      <Videocard />
    </div>
  );
}

export default Container;
