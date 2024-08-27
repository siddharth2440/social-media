import Addpost from '@/components/Addpost'
import Feed from '@/components/Feed'
import Leftmenu from '@/components/Leftmenu'
import Rightmenu from '@/components/Rightmenu'
import Stories from '@/components/Stories'
import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'



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
  createdAt?: any,
  _count?: countType
}
const Page = async ({params}:{params:{id:string}}) => {
  
  const user:userType = await prisma.user.findFirst({
    where:{
      id:params?.id
    },
    include:{
      _count:{
        select:{
          followers: true,
          followings: true,
          posts:true
        }
      }
    }
  })

  const {userId:currentUser} = auth();
  let isBlocked;
  if(currentUser){
    const res  = await prisma.block.findFirst({
      where:{
        blockerId: user?.id,
        blockedId: currentUser
      }
    })
    if(res) isBlocked = true;
  }else{
    isBlocked = false;
  }
  if(isBlocked) return notFound();

  return (
    <div className='border-3 border-green-500 min-h-screen pt-2 px-1 m-auto flex items-start justify-between '>

      {/* left  */}

      <div className="hidden xl:flex w-[30%]">
        <Leftmenu type={"profile"}/>
      </div>

      {/* center  */}
      <div className="w-full md:w-[40%]">
        <div>
          {/* <Stories/>
          <Addpost/> */}
          <div className='w-[100%] flex flex-col items-start justify-start gap-1 mb-5'>

              <div className='flex items-start justify-center flex-col relative w-[100%]'>
                <Image src={ `${user?.cover}` || "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} height={60} width={60} alt='user-image' className='rounded-sm h-[12rem] w-[100%] object-cover'/>
                <Image src={ `${user?.avatar}` || "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} height={60} width={60} alt='user-image' className='absolute bottom-[-1.2rem] rounded-full h-[2.5rem] right-[45%] w-auto object-cover'/>
              </div>
              <h1 className='text-center w-[100%] mt-5'>{user?.name || "Elva Weaver"}</h1>
              <div className='flex items-center w-[100%] justify-center gap-3 mt-2'>
                <span className='flex flex-col items-center justify-center text-[0.9rem]'> {user?._count?.posts} <span className='capitalize text-[0.6rem] font-[500]'> posts </span> </span>
                <span className='flex flex-col items-center justify-center text-[0.9rem]'> { user?._count?.followers} <span className='capitalize text-[0.6rem] font-[500]'> followers </span> </span>
                <span className='flex flex-col items-center justify-center text-[0.9rem]'> {user?._count?.followings} <span className='capitalize text-[0.6rem] font-[500]'> following </span> </span>
              </div>

          </div>
          <Feed/>
        </div>
      </div>

      {/* right  */}
      <div className="hidden md:flex w-[30%]">
        <Rightmenu user={user}/>
      </div>
    </div>
  )
}

export default Page