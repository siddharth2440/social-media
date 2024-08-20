import Image from 'next/image'
import React from 'react'
import noAvatar from "../../public/noAvatar.png"

const Stories = () => {
  return (
    <div className='w-[100%] rounded-sm bg-slate-100 shadow-xl px-2 m-auto overflow-scroll scrollbar-hide py-2'>
        
        <div className='flex items-start justify-normal gap-3'>

            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto bg-white h-[3.2rem] border-2 border-slate-100 rounded-full ring-2' alt='story-image' />
                <p className='font-medium'>Ricky</p>
            </div>

            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={noAvatar} width={80} height={80} className='w-auto h-[3.2rem] rounded-full ring-2' alt='sotry-image' />
                <p>Ricky</p>
            </div>
            

        </div>

    </div>
  )
}

export default Stories