"use client"
import React, { useOptimistic, useState } from 'react'
import like from "../../public/like.png"
import liked from "../../public/liked.png"
import comment from "../../public/comment.png"
import share from "../../public/share.png"
import Image from 'next/image'
import { useAuth } from '@clerk/nextjs'
import { switchLike } from '@/lib/actions'

interface PropsType {
    postId:number;
    likes:string[];
    commentNumber:number;
}
const Postinteraction = ({postId,likes,commentNumber}:PropsType) => {
    const { userId,isLoaded } = useAuth();
    const [likeState,setLikeState] = useState({
        likeCount:likes.length,
        isLiked:userId? likes.includes(userId) : false
    })


    console.log(likes);

    const [optimisticLike,setOptimisticLike] = useOptimistic(
        likeState,
        (state,value)=>{
            return{
                likeCount: state.isLiked ? state.likeCount-1 : state.likeCount+1,
                isLiked: !state.isLiked
            }
    })

    const likeAction = async () => {
        setOptimisticLike("");
        console.log("like action called");
        
        try {
            switchLike(postId);
            setLikeState((state)=>{
                return {
                    likeCount: state.isLiked? state.likeCount-1 : state.likeCount+1,
                    isLiked:!state.isLiked
                }
            })
        } catch (error) {
            console.log("Error: ", error);            
        }
    }

  return (
    <>
        <div className='flex items-start justify-start gap-4'>
                <form action={likeAction} className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer'>
                    <button className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer'>
                    <Image src={optimisticLike.isLiked ? liked : like} alt='like-image' className='cursor-pointer' height={16} width={18}/>
                    <span className='text-gray-300 px-1'> | </span>
                    <span className='text-gray-500 text-[0.8rem]'>{optimisticLike.likeCount} <span className='hidden md:inline'>Likes</span></span>
                    </button>
                </form>

                <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer  '>
                    <Image src={comment} alt='like-image' className='cursor-pointer' height={16} width={18}/>
                    <span className='text-gray-300 px-1'> | </span>
                    <span className='text-gray-500 text-[0.8rem]'>{commentNumber} <span className='hidden md:inline'>Comments</span></span>
                </div>

            </div>

            <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer  '>
                <Image src={share} alt='like-image' className='cursor-pointer' height={16} width={16}/>
                <span className='text-gray-300 px-1'> | </span>
                <span className='text-gray-500 text-[0.8rem]'>123</span>
            </div>
    </>
  )
}

export default Postinteraction