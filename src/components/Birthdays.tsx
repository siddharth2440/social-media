import Image from 'next/image'
import React from 'react'
import gift from "../../public/gift.png"
import reject from "../../public/reject.png"

const Birthdays = () => {
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-3 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>
      <h1 className='text-[0.9rem] opacity-80'>Birthdays</h1>

      {/* upcoming birthdays  */}
      <div className='flex items-center flex-col gap-2 justify-between w-[100%]'>
        
        
        <div className='flex items-center justify-between w-[100%]'>
            
            <div className='flex items-start justify-start gap-2'>
              <Image src="https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='image' height={18} width={18} className='h-[1.6rem] w-auto rounded-full'/>
              <span className='text-[0.8rem]'>Fannie Bridges</span>
            </div>
            
            <div className='flex items-center justify-start gap-2'>
              <button className='text-[0.8rem] bg-blue-600 text-white px-2 rounded-md'>Celebrate</button>
            </div>
          
        </div>

        
        <div className='flex items-center justify-between w-[100%]'>
            
            <div className='flex items-start justify-start gap-2'>
              <Image src="https://images.pexels.com/photos/26347254/pexels-photo-26347254/free-photo-of-portrait-of-a-man-in-a-black-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='image' height={18} width={18} className='h-[1.6rem] w-auto rounded-full'/>
              <span className='text-[0.8rem]'>Fannie Bridges</span>
            </div>
            
            <div className='flex items-center justify-start gap-2'>
            <button className='text-[0.8rem] bg-blue-600 text-white px-2 rounded-md'>Celebrate</button>
            </div>
          
        </div>


      </div>

      <div className='flex items-center mt-3 mb-1 justify-start gap-2 bg-cyan-50 shadow-sm w-[100%]'>
        <Image src={gift} alt='gift-image' height={18} width={18}/>
        <div className='flex flex-col items-start justify-start gap-1'>
          <h3 className='text-[0.8rem] opacity-75'>Upcoming Birthdays</h3>
          <p className='opacity-80 text-[0.7rem]'>See other 16 have upcoming birthdays</p>
        </div>
      </div>

    </div>
  )
}

export default Birthdays