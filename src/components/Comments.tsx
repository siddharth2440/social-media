import Image from 'next/image'
import React from 'react'
import like from "../../public/like.png"
import more from "../../public/more.png"

const Comments = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-3 w-[100%] py-2'>
        {/* Make a comment  */}
        <div className='flex items-start justify-start w-[100%] gap-2'>
            <Image src={"https://images.pexels.com/photos/9321957/pexels-photo-9321957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"poster-image"} height={16} width={16} className='rounded-full object-cover h-auto w-auto outline-dotted'/>
            <input type='text' placeholder='Write a comment...' className='border-2 border-slate-100 rounded-md px-2 py-1 w-[80%]' />
        </div>

        {/* all comments  */}
        <div className='w-[100%] px-1 flex flex-col items-start justify-start gap-2'>
            
            {/* Comment  */}
            <div className='flex items-start justify-between gap-1'>

                {/* image  */}
                <Image src={"https://images.pexels.com/photos/9321957/pexels-photo-9321957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={"poster-image"} height={16} width={16} className='rounded-full object-cover h-auto w-auto outline-dotted'/>
                
                {/* content  */}
                <div className='flex flex-col items-start justify-start gap-1 py-1'>
                    <span className='text-[0.9rem]'>Bernice Spender</span>

                    {/* description */}
                    <p className='text-[0.7rem] opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit soluta amet ea sequi. Consequatur explicabo sint corrupti quas?</p>
                    {/* do some actions in user comment */}

                    
                    
                        <div className='flex items-center justify-start gap-2'>
                            <div className='flex items-center justify-start bg-slate-200 px-2 rounded-md cursor-pointer  '>
                                <Image src={like} alt='like-image' className='cursor-pointer' height={16} width={16}/>
                                <span className='text-gray-300 px-1'> | </span>
                                <span className='text-gray-500 text-[0.8rem]'>123</span>
                            </div>
                            <span className='text-[0.7rem] opacity-80'>
                                Reply
                            </span>
                        </div>
                    

                </div>

                {/* more  */}
                <Image alt='more-image' src={more} className='h-[1rem] w-auto cursor-pointer'/>


            </div>

        </div>

    </div>
  )
}

export default Comments