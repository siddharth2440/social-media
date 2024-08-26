"use client"
import { update_user_profile } from '@/lib/actions'
import Image from 'next/image'
import React, { useActionState, useState } from 'react'
type countType = {
  followers: number;
  followings: number;
  posts: number;
}

type userType = {
  id: string;
  username: string;
  avatar?: string;
  cover?: string;
  name?: string;
  surname?: string;
  dscription?: string ,
  city?: string,
  school?:  string,
  work?: null;
  website?: string;
  createdAt: any,
  _count?: countType
}
const UpdateUser = ({user}:{user:userType}) => {
  const [ open_update_card,set_openingOrclosing_of_card ] = useState(false)
  const [ state,formAction ] =  useActionState(update_user_profile,{error:false,success:false})
  return (
    <div>
      <button onClick={()=>set_openingOrclosing_of_card(prev=>!prev)}>UpdateUser</button>
      {
        open_update_card && (
          <div className='fixed left-0 top-0 z-50 text-black bg-transparent h-[100vh] w-[100%] rounded-md flex flex-col items-start justify-start px-2'>
            <div className='bg-slate-200 w-[40%] h-[60%] z-50 m-auto rounded-md flex flex-col items-start justify-start gap-4 px-4 py-2'>
                <button className='text-[1.4rem] font-[500] self-end' onClick={()=>set_openingOrclosing_of_card(prev=>!prev)}>X</button>
                <h2 className='flex items-start justify-start text-[0.9rem] font-[600]'>Update Profile</h2>
                <p>Use the Navbar  profile to change the avatar or username</p>
                <div className='flex items-start justify-start gap-2'>
                  <Image src={"https://images.pexels.com/photos/15662559/pexels-photo-15662559/free-photo-of-japanese-woman-standing-in-front-of-a-house-with-a-cherry-branch-in-blossom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='user-image' height={18} width={18} className='h-[1.3rem] w-auto rounded-full'/>
                  <span className='text-[0.9rem] tracking-tighter'>Change</span>
                </div>

                <form action={formAction} className='border-4 w-[100%] mt-3 flex items-start justify-center flex-wrap gap-4'>
                  <input type="text" placeholder={`firstname : ${user.name || ""}`} name='name' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  <input type="text" placeholder={` surname : ${user.surname || ""}` } name='surname' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  <input type="text" placeholder={`description : ${user.dscription || ""}`} name='dscription' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  <input type="text" placeholder={ `city : ${user.city || ""}`} name='city' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  <input type="text" placeholder={`school : ${user.school || ""}`} name='school' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  <input type="text" placeholder={`work : ${user.work || ""}`} name='work' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  <input type="text" placeholder={`website : ${user.website || ""}`} name='website' className='px-2 py-1 self-center text-[0.9rem] rounded-sm w-[40%]'/>
                  {state.error && (<h1 className='text-red'>  </h1>)}
                  <button className='px-2 py-1 self-center text-[0.9rem] m-auto w-[90%] bg-blue-400 rounded-md'>Update</button>
                </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UpdateUser