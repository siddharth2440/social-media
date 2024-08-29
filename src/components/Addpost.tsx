"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import noAvatar from "../../public/noAvatar.png"
import addImage from "../../public/addimage.png"
import addVideo from "../../public/addVideo.png"
import addEvent from "../../public/addevent.png"
import pollImage from "../../public/poll.png"
import { useUser } from '@clerk/nextjs'
import { CldUploadWidget } from 'next-cloudinary'
import AddPostBtn from './AddPostBtn'
import { addNewPost } from '@/lib/actions'
const Addpost = () => {
    const [desc,setDesc] = useState<any>("");
    const [image,setImage] = useState<any>("");
    const { user } = useUser();
  return (
    <div className='flex items-start px-2 justify-start gap-2 mt-3 py-2 bg-cyan-50'>
        <Image src={ user?.imageUrl || noAvatar} alt='image' height={20} width={20} className='h-[1.4rem] w-auto'/>


        <form action={ (formdata) => addNewPost(formdata,image.secure_url ?? "") } className='flex items-start justify-start w-[100%] gap-2 flex-col'>
            
            <div className='flex items-center justify-between bg-slate-100 rounded-lg p-2 w-full'>
                <textarea
                    placeholder="What's on your mind?"
                    className="px-2 py-1 w-[80%] rounded-md"
                    name="desc"
                    onChange={(e)=>setDesc(e.target.value)}
                >
                </textarea>
                <AddPostBtn/>
                {/* <button className='bg-blue-300 rounded-md text-white px-2 py-1'>Send</button> */}
            </div>
            

            <div className='flex items-start justify-start gap-3 flex-wrap'>

            
                <div className='flex items-center justify-start gap-1'>
                    <Image src={addImage} alt='image' className="flex h-[1.2rem] w-auto items-center gap-2 cursor-pointer" height={30} width={30}/>
                    {/* <span className='text-[0.8rem]'>Photo</span> */}
                    <CldUploadWidget uploadPreset="nextSpcial" onSuccess={(result,{widget})=>{setImage(result.info); widget.close()} }>
                        {({ open }) => {
                            return (
                                <span className='text-[0.8rem]' onClick={()=>open()}>Photo</span>
                            );
                        }}
                    </CldUploadWidget>
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