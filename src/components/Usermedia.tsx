import Image from 'next/image'
import React from 'react'

const Usermedia = () => {
  return (
    <div className='flex bg-slate-100 items-start justify-start flex-col gap-3 m-auto w-[90%] py-2 px-1 shadow-xl rounded-md'>
        
        {/* user media */}
        <div className='w-[100%] flex items-center justify-between'>
            <h4 className='text-[1.2rem] font-[500] opacity-90 text-gray-700'>User Media</h4>
            <span className='text-[0.8rem] text-blue-500'>See all</span>
        </div>

        <div className='flex items-center justify-start px-2 flex-wrap gap-2'>
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        <Image src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height={30} width={30} className='object-cover h-[5rem] rounded-lg w-auto'/ >
        </div>
    </div>
  )
}

export default Usermedia