import Image from 'next/image'
import React from 'react'
import noAvatar from "../../public/noAvatar.png"
import addImage from "../../public/addimage.png"
import addVideo from "../../public/addVideo.png"
import addEvent from "../../public/addevent.png"
import pollImage from "../../public/poll.png"
const Addpost = () => {
  return (
    <div className='flex items-start px-2 justify-start gap-2 mt-3 py-2 bg-cyan-50'>
        <Image src={noAvatar} alt='image' height={20} width={20} className='h-[1.4rem] w-auto'/>


        <form action="" className='flex items-start justify-start w-[100%] gap-2 flex-col'>
            
            <textarea
                placeholder="What's on your mind?"
                className="flex-1 bg-slate-100 rounded-lg p-2 w-full"
                name="desc">
            </textarea>
            

            <div className='flex items-start justify-start gap-3 flex-wrap'>

            
                <div className='flex items-center justify-start gap-1'>
                    <Image src={addImage} alt='image' className="flex h-[1.2rem] w-auto items-center gap-2 cursor-pointer" height={30} width={30}/>
                    <span className='text-[0.8rem]'>Photo</span>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <Image src={addVideo} alt='image' height={30} width={30} className="flex h-[1.2rem] w-auto items-center gap-2 cursor-pointer"/>
                    <span className='text-[0.8rem]'>Video</span>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <Image src={addEvent} alt='image' height={30} width={30} className="flex items-center gap-2 h-[1.2rem] w-auto cursor-pointer"/>
                    <span className='text-[0.8rem]'>Event</span>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <Image src={pollImage} alt='image' height={30} width={30} className="flex items-center gap-2 cursor-pointer h-[1.2rem] w-auto"/>
                    <span className='text-[0.8rem]'>Poll</span>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Addpost