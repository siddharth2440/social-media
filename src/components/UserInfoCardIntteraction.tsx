"use client"
import { switchBlock, switchFollow } from '@/lib/actions';
import React, { useOptimistic, useState } from 'react'

interface propsType {
  isFollowing:boolean;
  isFollowingRequestSent:boolean;
  isUserBlocked:boolean;
  userId:string;
  currUserId: string | null;
}

interface stateType{
  following:boolean;
  blocked:boolean;
  followRequestSent:boolean;
}

const UserInfoCardIntteraction = ( {isFollowing,currUserId,isFollowingRequestSent ,isUserBlocked,userId} : propsType ) => {
  
  const [userState,setUserState] = useState<stateType>({
    following:isFollowing,
    blocked:isUserBlocked,
    followRequestSent:isFollowingRequestSent,
  })

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState(prev=>({
        ...prev,
        following: prev.following && false,
        followRequestSent: !prev.following && !prev.followRequestSent ? true : false
      }))
    } catch (error) {
      console.log(error);
    }
  }


  const block = async () => {
      switchOptimisticState("block");
      try {
        await switchBlock(userId);
        setUserState(prev=>({
         ...prev,
          blocked: !prev.blocked,
        }))
      } catch (error) {
        console.log(error);
      }
  }

  const [optimisticState,switchOptimisticState] = useOptimistic(
    userState,
    (state,value: "follow" | "block" ) => 
      value === "follow" ?
      {
       ...state,
        following:!state.following && false,
        followRequestSent:!state.following &&!state.followRequestSent? true : false
      }:{
        ...state,
        blocked: !state.blocked,
      }
    )


  return (
    <div>
      <form action={follow}>
        <button className='w-[100%] bg-[#3D81F8] rounded-md text-white my-2'>
            {
              optimisticState.followRequestSent ? "Request Sent"
              : optimisticState.following ? "Following"
              : "Follow"
            }
        </button>
      </form>
      <form action={block}>
        <button className='text-[0.8rem] text-red-700 self-end'> 
          {
            optimisticState.blocked ? "Unblock User" : "Block User"
          }
        </button>
      </form>
    </div>
  )
}

export default UserInfoCardIntteraction