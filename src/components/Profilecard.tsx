import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

const Profilecard = async () => {
  const { userId } = auth();
  // console.log(userId);
  
  if(!userId) return "";

  const user = await prisma.user?.findFirst({
    where: { id: userId.toString() },
    // select: {
    //   avatar: true,
    //   username: true
    // },
    include:{
      _count:{
        select:{
          followers: true,
          followings: true,
        }
      }
    }
  })

  // console.log(user);
  return (
    <div className='w-[100%] flex flex-col justify-start items-start gap-1 bg-white shadow-xl rounded-md py-2'>
        <div className='relative w-[90%] m-auto'>
            <Image src={"https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=600"} alt='user-image' height={30} width={30} className='h-[6rem] w-auto m-auto rounded-md'/>
            <Image src={ user?.avatar || "https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=600"} alt='user-image' height={30} width={30} className='h-[1.5rem] absolute bottom-[-10%] rounded-full left-[40%] w-auto m-auto '/>
        </div>
        <h1 className='opacity-80 self-center text-[0.9rem] font-[600] mt-2'>{user?.username.slice(0,6) || "Edward Gabriel May"}</h1>
        <h3 className='opacity-80 self-center text-[0.9rem] font-[600] py-1'>{user?._count.followers} followers</h3>
        <button className='px-2 rounded-md self-center bg-blue-400 text-white'>My Profile</button>
    </div>
  )
}

export default Profilecard  