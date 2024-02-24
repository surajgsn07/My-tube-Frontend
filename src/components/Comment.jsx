import React from 'react'

import { AiFillLike } from "react-icons/ai";

const Comment = ({data}) => {
  return (
    <div className=' flex  bg-gray-900 p-2 text-white gap-3 m-4'>
        <div className='overflow-hidden w-9 h-min mt-2 rounded-full'>
            <img className='object-fit w-full' src="sg.jpg" alt="" />
        </div>
        <div className='pt-1'>
            <div className='flex items-center gap-3'>
                <div className='font-semibold '>
                    {/* username */}
                    @surajgsn
                </div>
                <div className='text-gray-400 text-sm'>
                    2 days
                    {/* createdat */}
                </div>
            </div>
            <div className='p-3 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum nostrum aliquid, ratione exercitationem sapiente fugiat dolorem quod aut illo!
            </div>
            <div>
            <div className="flex  py-2 items-center text-white text-smm px-4 rounded-full  bg-gray-800 gap-2 w-min">
          <AiFillLike /> <div className="font-semibold text-sm ">288</div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Comment