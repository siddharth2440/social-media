import Image from 'next/image'
import React from 'react'
import map from "../../public/map.png"
import work from "../../public/work.png"
import school from "../../public/school.png"
import link from "../../public/link.png"
import { User } from '@prisma/client'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/client'
import UserInfoCardIntteraction from './UserInfoCardIntteraction'
import UpdateUser from './UpdateUser'
import Link from 'next/link'

type countType = {
    followers: number;
    followings: number;
    posts: number;
  }
  
type userType = {
    id: string;
    username: string;
    avatar?: string;
    cover?: string;
    name?: string;
    surname?: string;
    dscription?: string ,
    city?: string,
    school?:  string,
    work?: null;
    website?: string;
    createdAt: any,
    _count?: countType
  }
const Userinfo = async ({user}:{user:userType}) => {

    // console.log(user);
    const createdAtDate = new Date(user?.createdAt);
    const formattedDate = createdAtDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    // console.log(formattedDate);
   
    let isFollowing:boolean = false;
    let isFollowingRequestSent:boolean = false;
    let isUserBlocked:boolean = false;

    const { userId:curUserId } = auth();
    if(curUserId){
        const blockResponse = await prisma.block.findFirst({
            where: {
                blockedId:user.id,
                blockerId:curUserId
            }
        })
        blockResponse ? isUserBlocked = true : isUserBlocked = false

        const followRes = await prisma.follower.findFirst({
            where: {
                followerId:curUserId,
                followingId:user.id
            }
        })
        followRes ? isFollowing = true : isFollowing = false

        const followRequest = await prisma.followRequest.findFirst({
            where: {
                senderId:curUserId,
                receiverId:user.id
            }
        })
        followRequest ? isFollowingRequestSent = true : isFollowingRequestSent = false
    }
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-1 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>
        
        {/* userinfo Header  */}

        <div className='w-[100%] flex items-center justify-between'>
            <h4 className='text-[1.2rem] font-[500] opacity-90 text-gray-700'>User information</h4>
            <span className='text-[0.8rem] text-blue-500'>
                {
                    curUserId == user.id ? (<UpdateUser user={user}/>) : (
                        <Link href={"/"}> See all </Link>
                    )
                }
            </span>
        </div>

        {/* user info  */}
        <div className='flex items-center justify-start gap-2'>
            <h2 className='text-[0.8rem]'>{user?.name}</h2>
            <div className="tag text-[0.6rem]">@lamadev</div>
        </div>

        <p className='text-[0.8rem] text-gray-700 py-1'>{ user?.dscription ||"No Information"}</p>

        <div className='flex mt-1 items-center justify-start gap-2'>
            <Image src={map} alt='map-logo' height={18} width={18}/>
            <span className='text-[0.8rem]'>Living in { user && (<span className='text-[0.6rem] font-[600] text-gray-600'> { user.city} </span>)} </span>
        </div>

        <div className='flex mt-1 items-center justify-start gap-2'>
            <Image src={work} alt='map-logo' height={18} width={18}/>
            <span className='text-[0.8rem]'>Works at <span className='text-[0.6rem] font-[600] text-gray-600'> Apple Inc. </span> </span>
        </div>

        <div className='flex mt-1 items-center justify-start gap-2'>
            <Image src={school} alt='map-logo' height={18} width={18}/>
            <span className='text-[0.8rem]'>Went to <span className='text-[0.6rem] font-[600] text-gray-600'> Edgar high School </span> </span>
        </div>

        <div className='flex mt-1 items-center justify-between gap-2 w-[100%]'>
            <div className='flex items-center justify-start gap-1'>
                <Image src={link} alt='map-logo' height={14} width={14}/>
                { user && (<span className='text-[0.8rem] opacity-70 font-[500]'> {user.website}</span>)}
            </div>
            <span className='text-[0.8rem]'>Joined<span className='text-[0.6rem] font-[600] text-gray-600 pl-1'>{formattedDate} </span> </span>
        </div>
        {   curUserId != user.id &&
            (<UserInfoCardIntteraction currUserId={curUserId} isFollowing={isFollowing} isFollowingRequestSent={isFollowingRequestSent} isUserBlocked={isUserBlocked} userId={user.id}/>)
        }
    </div>
  )
}

export default Userinfo