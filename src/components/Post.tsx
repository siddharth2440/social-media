import Image from 'next/image'
import React from 'react'
import more from "../../public/more.png"
import like from "../../public/like.png"
import comment from "../../public/comment.png"
import share from "../../public/share.png"
import Comments from './Comments'
import Postinteraction from './Postinteraction'

type FeedType =  {
    id: number;
    desc: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user: {
      id: string;
      username: string;
      avatar: string;
      cover: string;
      name: string;
      surname: string;
      dscription: string;
      city: string;
      school: string;
      work: string;
      website: string;
      createdAt: Date
    },
    likes: [],
    _count: { comments: number }
  }

const Post = ({post}:{post:FeedType}) => {
  return (
    <div className='px-2 bg-slate-90 flex flex-col justify-start items-start gap-2 shadow-xl w-[100%]'>
        
        {/* User  */}
        <div className='flex justify-between items-center w-[100%]'>
            <div className='flex items-start justify-start gap-2'>
                <Image src={ post.user.cover || "https://images.pexels.com/photos/17411876/pexels-photo-17411876/free-photo-of-woman-posing-with-hand-on-face-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='user-image' height={20} width={20} className='rounded-full object-cover'/>
                <span className='text-[0.9rem] opacity-80'>{ post.user.name || "Jack McBride"}</span>
            </div>
            <Image alt='more-image' src={more} className='h-[1rem] w-auto cursor-pointer'/>
        </div>
        
        {/* description  */}
        <div className='flex justify-between items-center flex-col gap-2 w-[100%]'>
            <Image src={post.img || "https://images.pexels.com/photos/27178615/pexels-photo-27178615/free-photo-of-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='post-image' height={50} width={50} className='h-[18rem] w-[100%] object-cover'/>
            <span className='text-[0.9rem]'>{ post.desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, autem reprehenderit impedit numquam quis sit laudantium, quaerat architecto quia harum reiciendis veniam ad facere facilis atque, eos ea deserunt! Quaerat?"}</span>
        </div>

        {/* interaction */}
        <div className='flex items-center justify-between w-[100%] py-1'>
            <Postinteraction postId={post.id} likes={post.likes} commentNumber={post._count.comments}/>
        </div>

        {/* comments */}
        <Comments postId={post.id}/>

    </div>
  )
}

export default Post
