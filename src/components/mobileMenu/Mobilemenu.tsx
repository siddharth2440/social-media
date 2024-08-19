"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Mobilemenu = () => {
    const [open,setOpen] = useState(false);
    
  return (
    <div>
        
        <div className='md:hidden flex flex-col gap-[3.5px] cursor-pointer' onClick={()=>setOpen(prev=>!prev)}>
            <div className='w-6 h-1 bg-blue-500 rounded-sm'></div>
            <div className='w-6 h-1 bg-blue-500 rounded-sm'></div>
            <div className='w-6 h-1 bg-blue-500 rounded-sm'></div>
        </div>
        {
            open && (
                <div className='absolute left-0 top-26 h-screen bg-slate-100 w-full flex items-center justify-center flex-col gap-3'>
                    <Link href={"/"}> Home </Link>
                    <Link href={"/"}> Friends </Link>
                    <Link href={"/"}> Groups </Link>
                    <Link href={"/"}> Stories </Link>
                    <Link href={"/"}> Profile </Link>
                </div>
            )
        }

    </div>
  )
}

export default Mobilemenu