import React from 'react'
const Dashboard = (
    {
        
    }
) => {

  const obj = [
    {
      content : "Total numbers of likes : ",
      value:223
    },{
      content : "Total numbers of comments : ",
      value:223
    },{
      content : "Total Numbers of Videos : ",
      value:223
    },
  ]

  return (
    <div className='flex items-center w-full flex-col'>
        <div className='text-3xl text-white font-bold mb-7 w-full'>Dashboard</div>
        <div className='flex w-full gap-8 flex-wrap flex-col text-white justify-center items-center border-[1px] rounded-xl border-white px-3 py-6'>
            {
              obj.map((task)=>(
                <div key={task.content} className='lg:flex justify-between gap-7 flex-wrap'>
                  <div className='text-lg font-semibold flex items-center justify-center'> {task.content} </div>
                  <div className='flex items-center justify-center'> {task.value} </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Dashboard