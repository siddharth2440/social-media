import React from 'react'
import Post from './Post'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/client';

const Feed = async ({username}:{username?:string}) => {
  const { userId } = auth();
  // console.log(username);
  let posts;
  // we have username that means we are in the user profile page to see the Posts
  if(username){
    posts = await prisma.post.findMany({
      where:{
        user : {
          username: username
        }
      },
      include: {
        user : true,
        likes:{
          select:{
            userId:true
          }
        },
        _count:{
          select:{
            comments: true
          }
        }
      },
      orderBy: {
         createdAt: 'desc'
      }
    })
  }

  else if(!username && userId){
    const following = await prisma.follower.findMany({
      where:{
        followerId:userId
      },
      select:{
        followingId: true
      }
    })

    const followingIds = following.map((id)=>id.followingId)
    // console.log(followingIds);
    posts = await prisma.post.findMany({
      where:{
        userId:{
          in: followingIds
        }
      },
      include: {
        user : true,
        likes:{
          select:{
            userId:true
          }
        },
        _count:{
          select:{
            comments: true
          }
        }
      },
      orderBy: {
         createdAt: 'desc'
      }
    })

    // console.log(posts);
  }
  // console.log(posts);

  return (
    <div className='my-3 w-[100%] flex flex-col items-start justify-start gap-7'>
      {
        posts?.length > 0 ? posts?.map((post,idx)=>{
          return(
            <Post key={idx+1} post={post} />
          )
        }) : (<h1>MAke friends to see their Posts</h1>)
      }
    </div>
  )
}

export default Feed