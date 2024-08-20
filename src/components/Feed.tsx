import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <div className='my-3 w-[100%] flex flex-col items-start justify-start gap-7'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed