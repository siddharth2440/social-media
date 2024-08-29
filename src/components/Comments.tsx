import Image from 'next/image'
import React from 'react'
import like from "../../public/like.png"
import more from "../../public/more.png"
import prisma from '@/lib/client'
import Commentlist ,{Comment} from './Commentlist'

const Comments = async ({postId}:{postId:number}) => {
    const comments = await prisma.comment.findMany({
        where:{
            postId,
        },
        include:{
            user: true
        }
    })

    console.log(comments);
    
  return (
    <div className='flex flex-col items-start justify-start gap-3 w-[100%] py-2'>
        <Commentlist comments={comments as Comment[]} postId={postId}/>
    </div>
  )
}

export default Comments