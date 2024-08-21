import Image from 'next/image'
import React from 'react'
import accept from "../../public/accept.png"
import reject from "../../public/reject.png"

const FriendRequests = () => {
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-3 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>

        {/* requests header  */}
        <div className='flex items-center justify-between w-[100%] py-3'>
          <span className='text-[0.9rem] opacity-80'>Friend Requests</span>
          <span className='text-blue-600 text-[0.9rem]'>See all</span>
        </div>
        
       
        {/* Users Friend Requests  */}
        <div className='flex items-center justify-between w-[100%]'>
          
          <div className='flex items-start justify-start gap-2'>
            <Image src="https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='image' height={18} width={18} className='h-[1.6rem] w-auto rounded-full'/>
            <span className='text-[0.8rem]'>Fannie Bridges</span>
          </div>
          
          <div className='flex items-center justify-start gap-2'>
            <Image src={accept} alt='image' height={18} width={18} className='cursor-pointer'/>
            <Image src={reject} alt='image' height={18} width={18} className='cursor-pointer'/>
          </div>
        
        </div>

        <div className='flex items-center justify-between w-[100%]'>
          
          <div className='flex items-start justify-start gap-2'>
            <Image src="https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='image' height={18} width={18} className='h-[1.6rem] w-auto rounded-full'/>
            <span className='text-[0.8rem]'>Fannie Bridges</span>
          </div>
          
          <div className='flex items-center justify-start gap-2'>
            <Image src={accept} alt='image' height={18} width={18} className='cursor-pointer'/>
            <Image src={reject} alt='image' height={18} width={18} className='cursor-pointer'/>
          </div>
        
        </div>
        <div className='flex items-center justify-between w-[100%]'>
          
          <div className='flex items-start justify-start gap-2'>
            <Image src="https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='image' height={18} width={18} className='h-[1.6rem] w-auto rounded-full'/>
            <span className='text-[0.8rem]'>Fannie Bridges</span>
          </div>
          
          <div className='flex items-center justify-start gap-2'>
            <Image src={accept} alt='image' height={18} width={18} className='cursor-pointer'/>
            <Image src={reject} alt='image' height={18} width={18} className='cursor-pointer'/>
          </div>
        
        </div>

    </div>
  )
}

export default FriendRequests