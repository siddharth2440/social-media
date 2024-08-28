import prisma from '@/lib/client';
import Image from 'next/image'
import React from 'react'

type countType = {
  followers: number;
  followings: number;
  posts: number;
}

type type_user = {
  id: string;
  username: string;
  avatar?: string;
  cover?: string;
  name?: string;
  surname?: string;
  dscription?: string ,
  city?: string,
  school?:  string,
  work?: string;
  website?: string;
  createdAt: Date,
  _count: countType
}

const Usermedia = async ({user}:{user:type_user}) => {
  // console.log("Usermedia");
  // console.log(user);

  const posts_with_media = await prisma.post.findMany({
    where: {
      userId: user.id,
      img:{
        not: null
      }
    },
    take:8,
    // skip:1
    orderBy:{
      createdAt: 'desc'
    }
  })
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-3 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>
        
        {/* user media */}
        <div className='w-[100%] flex items-center justify-between'>
            <h4 className='text-[1.2rem] font-[500] opacity-90 text-gray-700'>User Media</h4>
            <span className='text-[0.8rem] text-blue-500'>See all</span>
        </div>

        <div className='flex items-center justify-start px-2 flex-wrap gap-2'>
        <>
          {
            posts_with_media.length>0 ? posts_with_media.map((val,idx) => {
              return (
                  <Image src={val.img!} key={idx+1} alt="post-img" width={150} height={150} className='object-cover'/>
              )
              }) : ( <h1 className='w-[100%] m-auto'>No media Found</h1>
            )
          } 
        </>
        </div>
    </div>
  )
}

export default Usermedia