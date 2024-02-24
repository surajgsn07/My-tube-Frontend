import React from 'react'
function Button(
    {
        content = "button",
        width,
        height,
        bgcolor="violet",
        textColor="white",
        type,
        className=""
        
    }
) {

  
  return (
    <div className='mx-auto p-2'>
      <button  type={type} className={`w-${width} ${className} p-2 px-4 bg-blue-900 font-semibold text-white rounded-lg`}>
          {content}
      </button>
    </div>
  )
}

export default Button