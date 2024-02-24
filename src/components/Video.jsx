import React from "react";
import Button from "./Button";
import { MdDataSaverOn } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";

const Video = () => {
  return (
    <div className="">
      <div className="w-full overflow-hidden text-white">
        {/* video */}
        <video
          className="object-fit w-full h-full"
          src="test.mp4"
          autoPlay
          controls
        ></video>
      </div>
      <div className="font-bold text-xl  text-white px-1 py-3">
        {/* title */}
        here uts to make react in three minutes Lorem ipsum dolor s
      </div>
      <div className="flex  justify-between">
        {/* channel */}
        <div className="flex items-center gap-3">
          <div className="overflow-hidden w-[30px] rounded-full">
            {/* avatar */}
            <img className="object-fit w-full h-full" src="sg.jpg" alt="" />
          </div>
          <div className="text-white text-lg font-bold ">
            {/* title */}
            StudyIQ
          </div>
          <div className="text-sm text-gray-400 pt-1">
            {/* subs */}
            231
          </div>
        </div>
        <div>
          <Button
            content="Subscribe"
            className="rounded-2xl py-2 pr-4 font-semibold"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 pt-3 ">
        {/* likes and all */}
        <div className="flex  py-2 items-center text-white text-xl px-4 rounded-full  bg-gray-800 gap-2 w-min">
          <AiFillLike /> <div className="font-semibold text-sm ">288</div>
        </div>
        <div className="text-sm py-2 text-white flex gap-2 items-center font-semibold px-4 rounded-full bg-gray-800">
            Download 
        </div>
        <div className="text-sm py-2 text-white flex gap-2 items-center font-semibold px-4 rounded-full bg-gray-800">
            Save <MdDataSaverOn />
        </div>
        <div className="text-sm py-2 text-white flex gap-2 items-center font-semibold px-4 rounded-full bg-gray-800">
            Share <IoMdShare />
        </div>
      </div>
      <div className="rounded full text-sm bg-gray-900 p-5 text-white mt-4">
        {/* desc */}
        <div className="font-bold text-xl pb-2">Description </div>
        <hr className="text-gray-500 p-2" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat minus necessitatibus ad enim sunt libero sint culpa sequi optio, vitae quae earum nemo corporis explicabo quisquam dolorem labore fuga cum non consequuntur. Dolore corrupti eligendi, minus vero nemo quae est aut quibusdam laudantium sapiente, asperiores facilis aspernatur dolorem. Neque explicabo inventore ad tenetur ex sint culpa veritatis eum repellendus adipisci, iste, ducimus perspiciatis corporis, omnis tempora magni quisquam quibusdam ut quo. Quaerat fugiat quae eligendi. Modi alias hic molestiae nam voluptatibus. Voluptate ex totam, sit aut quia illum! Harum perspiciatis quas tempora maiores accusamus est nemo! Magni fuga, voluptatum accusantium, quas consequuntur ab nobis quos fugiat porro itaque molestias unde ipsa pariatur, veritatis quidem consectetur corrupti culpa ut veniam! Omnis id labore dignissimos saepe quis voluptatum magni consequuntur magnam vel autem voluptas odit minima harum molestias sed, veritatis tempore. Enim placeat debitis nesciunt reiciendis accusamus harum, ea, provident unde, nemo cupiditate facilis labore est natus ullam nisi? Repellat voluptas ratione, maiores doloribus consectetur minus voluptate vero tempora, dignissimos laboriosam incidunt illum inventore minima repudiandae cum ipsum? Veniam libero nesciunt iste aliquid esse ipsum, cumque adipisci vitae magni provident non quis. Molestiae eum dicta nisi impedit repellat officia similique facilis!

      </div>
    </div>
  );
};

export default Video;
