"use client"
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'
import accept from "../../public/accept.png"
import reject from "../../public/reject.png"
import { FollowRequest, User } from '@prisma/client'
import { accept_follow_request, decline_follow_request } from '@/lib/actions'

type Reuests_type = FollowRequest & {
  sender: User
}

const FriendRequestList = ({requests}:{requests:Reuests_type[]}) => {
  const [request_state,set_requests] = useState<Reuests_type[]>(requests)
  
  const [optimisticState,removeOptimistic_request] = useOptimistic(
    request_state,
    (state,value:number)=> state.filter(req=>req.id != value)
  )

  const accept_request = async (req_id:number,userId:string) => {
    removeOptimistic_request(req_id);
    try {
      accept_follow_request(userId);
      set_requests(prev=>prev.filter(req => req.id !== req_id))
    } catch (error) {
      console.log("Error in accept_follow_request");
    }
  }

  const decline_request = async (req_id:number,userId:string) => {
    removeOptimistic_request(req_id);
    try {
      decline_follow_request(userId);
      set_requests(prev=>prev.filter(req => req.id !== req_id))
    } catch (error) {
      console.log("Error in accept_follow_request");
    }
  }

  return (
    <>
        <div className='flex items-center justify-between w-[100%]'>
          {
            request_state.length > 0 ? request_state.map((ele,idx)=>{
              return (
                <div key={idx} className='flex items-center justify-between w-[100%]'>
          
                    <div className='flex items-start justify-start gap-2'>
                        <Image src={ele.sender.avatar || "https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='image' height={18} width={18} className='h-[1.6rem] w-auto rounded-full'/>
                        <span className='text-[0.8rem]'>{ ele.sender.name || "Fannie Bridges"}</span>
                    </div>
          
                    <div className='flex items-center justify-start gap-2'>

                      <form action={()=>decline_request(ele.id,ele.sender.id)}>
                        <button>
                          <Image src={reject} alt='image' height={18} width={18} className='cursor-pointer'/>
                        </button>
                      </form>

                      <form action={()=>accept_request(ele.id,ele.sender.id)}>
                        <button>
                          <Image src={accept} alt='image' height={18} width={18} className='cursor-pointer'/>
                        </button>
                      </form>
                    </div>
        
                </div>
              )
            }) : (<h1>No Req's for you</h1>)
          }        
        </div>
    </>
  )
}

export default FriendRequestList