import Image from 'next/image'
import React from 'react'
import more from "../../public/more.png"
import like from "../../public/like.png"
import comment from "../../public/comment.png"
import share from "../../public/share.png"
import Comments from './Comments'
const Post = () => {
  return (
    <div className='px-2 bg-slate-90 flex flex-col justify-start items-start gap-2 shadow-xl w-[100%]'>
        
        {/* User  */}
        <div className='flex justify-between items-center w-[100%]'>
            <div className='flex items-start justify-start gap-2'>
                <Image src={"https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='user-image' height={20} width={20} className='rounded-full object-cover'/>
                <span className='text-[0.9rem] opacity-80'>Jack McBride</span>
            </div>
            <Image alt='more-image' src={more} className='h-[1rem] w-auto cursor-pointer'/>
        </div>
        
        {/* description  */}
        <div className='flex justify-between items-center flex-col gap-2 w-[100%]'>
            <Image src={"https://images.pexels.com/photos/27178615/pexels-photo-27178615/free-photo-of-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='post-image' height={50} width={50} className='h-[18rem] w-[100%] object-cover'/>
            <span className='text-[0.9rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, autem reprehenderit impedit numquam quis sit laudantium, quaerat architecto quia harum reiciendis veniam ad facere facilis atque, eos ea deserunt! Quaerat?</span>
        </div>

        {/* interaction */}
        <div className='flex items-center justify-between w-[100%] py-1'>

            <div className='flex items-start justify-start gap-4'>
                <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer'>
                    <Image src={like} alt='like-image' className='cursor-pointer' height={16} width={18}/>
                    <span className='text-gray-300 px-1'> | </span>
                    <span className='text-gray-500 text-[0.8rem]'>123 <span className='hidden md:inline'>Likes</span></span>
                </div>

                <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer  '>
                    <Image src={comment} alt='like-image' className='cursor-pointer' height={16} width={18}/>
                    <span className='text-gray-300 px-1'> | </span>
                    <span className='text-gray-500 text-[0.8rem]'>123 <span className='hidden md:inline'>Comments</span></span>
                </div>

            </div>

            <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer  '>
                <Image src={share} alt='like-image' className='cursor-pointer' height={16} width={16}/>
                <span className='text-gray-300 px-1'> | </span>
                <span className='text-gray-500 text-[0.8rem]'>123</span>
            </div>

        </div>

        {/* comments */}
        <Comments/>

    </div>
  )
}

export default Post
