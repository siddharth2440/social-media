import Image from 'next/image'
import React from 'react'
import accept from "../../public/accept.png"
import reject from "../../public/reject.png"
import FriendRequestList from './FriendRequestList'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/client'

const FriendRequests = async () => {
  const { userId } = await auth();

  const get_all_requests = await prisma.followRequest.findMany({
    where:{
      receiverId: userId || ""
    },
    include:{
      sender:true
    },
    orderBy:{
      createdAt: "desc"
    }
  })
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-3 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>

        {/* requests header  */}
        <div className='flex items-center justify-between w-[100%] py-3'>
          <span className='text-[0.9rem] opacity-80'>Friend Requests</span>
          <span className='text-blue-600 text-[0.9rem]'>See all</span>
        </div>
        
       
        {/* Users Friend Requests  */}
        <FriendRequestList requests={get_all_requests}/>

    </div>
  )
}

export default FriendRequests