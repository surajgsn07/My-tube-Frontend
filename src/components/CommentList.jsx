import React from 'react'
import Comment from './Comment'

const CommentList = ({content}) => {
  return (
    <div className='flex flex-col border-2 border-gray-600 rounded-3xl gap-2 text-white'>
        <div className='font-bold  text-2xl px-4 py-3'>
            {content} 
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default CommentList