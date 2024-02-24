import React from 'react'
import Button from './Button'

const SubscribedComponent = (
    {
        channel
    }
) => {
  return (
    <div className='w-full flex gap-2 md:gap-10 px-1 sm:px-5'>
        <div className='rounded-full w-[60px] md:w-[80px] lg:w-[160px] overflow-hidden mx-2 md:mx-20'>
            <img className='object-contain rounded-full w-full' src="sg.jpg" alt="" />
        </div>
        <div>
            <div className='text-md sm:text-2xl text-white font-bold'>
                Abhi and Niyu
                {/* {channel.name} */}
            </div>
            <div className=' text-sm text-gray-300'>
                <span>@abhiandniyu
                     {/* {channel.username} */}
                     </span> • <span>213 {" "}
                        {/* {channel.subscribers}  */}
                        subscribers</span>
            </div>
            <div className='hidden lg:block text-sm text-gray-300'>
                {/* {channel.description} */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sit velit expedita blanditiis dignissimos dolores quo itaque accusantium quidem eius, consectetur suscipit pariatur!
            </div>
        </div>
        <div>
            <Button content='Subscribe' className={`rounded-xl`}/>
        </div>
    </div>
  )
}

export default SubscribedComponent