import Image from 'next/image'
import React from 'react'

const Ad = ( { size } : {size : "sm" | "md" | "lg"} ) => {
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-3 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>

        <h1 className={` ${size=="md"? `text-[0.9rem]` : 'text-[0.9rem]' } `}> Sponsored Ads </h1>

        <Image src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sponsored-image" height={60} width={60} className= {`${ size == "md" ? 'h-[12rem]' : 'h-[10rem]' } w-auto rounded-md`} />

        <div className='flex items-start justify-start gap-1'>
          <Image alt='image' height={18} width={18} src={"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"} className={ ` ${ size == "md" ? 'h-[1.2rem]' : 'h-[1rem]' } rounded-full ` }/>
          <span className={` ${ size == "md" ? 'text-[0.7rem]' : 'text-[0.9rem]' } font-[500] opacity-90 text-[#167e7e]  `}>BiChef Lounge</span>
        </div>

        <p className={` ${ size == "md" ? 'text-[0.7rem]' : 'text-[0.7rem]' } opacity-80 `}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat iste adipisci possimus quos nulla, quibusdam a delectus ipsam illo suscipit.</p>
        <button className='w-[100%] text-[0.9rem] opacity-80 bg-gray-200 text-gray-800 rounded-md'>Learn More</button>

    </div>
  )
}

export default Ad