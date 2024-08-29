"use client"
import Image from 'next/image'
import like from "../../public/like.png"
import more from "../../public/more.png"
import React, { useActionState, useOptimistic, useState } from 'react'
import emoji from '../../public/emoji.png'
import { useUser } from '@clerk/nextjs'
import { addComment } from '@/lib/actions'

export interface userInfo{
    id: string,
    username: string;
    avatar?: string;
    cover?: string;
    name?: string;
    surname?: string;
    dscription?: string;
    city?: string;
    school?: string;
    work?: string;
    website?: string;
    createdAt: Date;
}

export interface Comment{
    id: number;
    desc: string;
    userId: string;
    postId: number;
    user: userInfo;
}
const Commentlist = ( {comments,postId}: { comments: Comment[], postId: number }) => {    

    const { user } = useUser()
    const [commentDesc,setCommentDesc] = useState("")
    const [commentState,setCommentState] = useState<Comment[]>(comments);
    const [state,addCommentAction] = useActionState(addComment,{success:true,error:false})

    const [commentOptimisticState, setCommentOptimisticState] = useOptimistic(
        commentState,
        (state, value:Comment) => [...state,value]
    );

    const add = ( {desc,postId}: {desc:string,postId:number}) => {
        setCommentOptimisticState({
            id: Math.random(),
            desc:commentDesc,
            userId: user?.id ?? "",
            postId: postId,
            user: {
                id: user?.id || "",
                username: "Sending Please Wait...",
                avatar: user?.imageUrl || "/noAvatar.png",
                cover: "",
                dscription: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                createdAt: new Date(Date.now()),
              }
        })
        try {
            addCommentAction({desc,postId})
            setCommentState(prev=>{
                return [
                        ...prev,
                        {
                            id: Math.random(),
                            desc:commentDesc,
                            userId: user?.id ?? "",
                            postId: postId,
                            user: {
                                id: user?.id || "",
                                username: "Sending Please Wait...",
                                avatar: user?.imageUrl || "/noAvatar.png",
                                cover: "",
                                dscription: "",
                                name: "",
                                surname: "",
                                city: "",
                                work: "",
                                school: "",
                                website: "",
                                createdAt: new Date(Date.now()),
                            }
                       }
                ];
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        {/* Make a comment  */}
        <div className='flex items-start justify-start w-[100%] gap-2'>
            <Image src={ user?.imageUrl || "https://images.pexels.com/photos/9321957/pexels-photo-9321957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"poster-image"} height={16} width={16} className='rounded-full object-cover h-auto w-auto outline-dotted'/>
            {/* <input type='text' placeholder='Write a comment...' className='border-2 border-slate-100 rounded-md px-2 py-1 w-[80%]' /> */}
            <form action={(e)=>add({desc:commentDesc,postId})} className='border-2 flex items-center justify-start gap-1 border-slate-100 rounded-md px-2 py-1 w-[90%] m-auto'>
                <input type='text' placeholder='Write a comment...' className='border-2 border-slate-100 rounded-md px-2 py-1 w-[80%]' onChange={(e)=>setCommentDesc(e.target.value)}/>
                <button>
                <Image src={emoji}  alt="" width={16} height={16} className="cursor-pointer h-[1.2rem] w-auto"/>
                </button>
            </form>
        </div>

        {/* all comments  */}
        {
            commentOptimisticState.length > 0 ? commentOptimisticState.map((ele,idx)=>{
                return (
                    <div className='w-[100%] px-1 flex flex-col items-start justify-start gap-2'>
            
                        {/* Comment  */}
                        <div className='flex items-start justify-between gap-1'>

                            {/* image  */}
                            <Image src={ele.user.cover || "https://images.pexels.com/photos/9321957/pexels-photo-9321957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"poster-image"} height={16} width={16} className='rounded-full object-cover h-auto w-auto outline-dotted'/>
                    
                            {/* content  */}
                            <div className='flex flex-col items-start justify-start gap-1 py-1'>
                                <span className='text-[0.9rem]'>{ele.user.name}</span>

                                {/* description */}
                                <p className='text-[0.7rem] opacity-75'>{ele.desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit soluta amet ea sequi. Consequatur explicabo sint corrupti quas?"}</p>
                                {/* do some actions in user comment */}
                        
                                <div className='flex items-center justify-start gap-2'>
                                    <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer  '>
                                        <Image src={like} alt='like-image' className='cursor-pointer' height={16} width={16}/>
                                        <span className='text-gray-300 px-1'> | </span>
                                        <span className='text-gray-500 text-[0.8rem]'>123</span>
                                    </div>
                                    <span className='text-[0.7rem] opacity-80'>
                                        Reply
                                    </span>
                                </div>
                            </div>
                            {/* more  */}
                            <Image alt='more-image' src={more} className='h-[1rem] w-auto cursor-pointer'/>
                        </div>
                    </div>
                )
            }) : (<h1 className='m-auto w-[100%] text-[0.8rem] opacity-80'>No Comments found!</h1>)
        }
    </>
  )
}

export default Commentlist