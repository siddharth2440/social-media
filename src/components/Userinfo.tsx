import Image from 'next/image'
import React from 'react'
import map from "../../public/map.png"
import work from "../../public/work.png"
import school from "../../public/school.png"
import link from "../../public/link.png"
const Userinfo = () => {
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-1 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>
        
        {/* userinfo Header  */}

        <div className='w-[100%] flex items-center justify-between'>
            <h4 className='text-[1.2rem] font-[500] opacity-90 text-gray-700'>User information</h4>
            <span className='text-[0.8rem] text-blue-500'>See all</span>
        </div>

        {/* user info  */}
        <div className='flex items-center justify-start gap-2'>
            <h2 className='text-[0.8rem]'>Elva Weaver</h2>
            <div className="tag text-[0.6rem]">@lamadev</div>
        </div>

        <p className='text-[0.8rem] text-gray-700 py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, amet?</p>

        <div className='flex mt-1 items-center justify-start gap-2'>
            <Image src={map} alt='map-logo' height={18} width={18}/>
            <span className='text-[0.8rem]'>Living in <span className='text-[0.6rem] font-[600] text-gray-600'> Denver </span> </span>
        </div>

        <div className='flex mt-1 items-center justify-start gap-2'>
            <Image src={work} alt='map-logo' height={18} width={18}/>
            <span className='text-[0.8rem]'>Works at <span className='text-[0.6rem] font-[600] text-gray-600'> Apple Inc. </span> </span>
        </div>

        <div className='flex mt-1 items-center justify-start gap-2'>
            <Image src={school} alt='map-logo' height={18} width={18}/>
            <span className='text-[0.8rem]'>Went to <span className='text-[0.6rem] font-[600] text-gray-600'> Edgar high School </span> </span>
        </div>

        <div className='flex mt-1 items-center justify-between gap-2 w-[100%]'>
            <div className='flex items-center justify-start gap-1'>
                <Image src={link} alt='map-logo' height={14} width={14}/>
                <span className='text-[0.8rem] opacity-70 font-[500]'>lama.dev</span>
            </div>
            <span className='text-[0.8rem]'>Joined<span className='text-[0.6rem] font-[600] text-gray-600 pl-1'>November 2024 </span> </span>
        </div>
        <button className='w-[100%] bg-[#3D81F8] rounded-md text-white my-2'>
            Follow User
        </button>
        <button className='text-[0.8rem] text-red-700 self-end'> Block User </button>
    </div>
  )
}

export default Userinfo