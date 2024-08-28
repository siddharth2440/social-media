import React, { Suspense } from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'
import Userinfo from './Userinfo'
import Usermedia from './Usermedia'
import { User } from '@prisma/client'

type countType = {
  followers: number;
  followings: number;
  posts: number;
}

type type_user = {
  id: string;
  username: string;
  avatar?: string;
  cover?: string;
  name?: string;
  surname?: string;
  dscription?: string ,
  city?: string,
  school?:  string,
  work?: string;
  website?: string;
  createdAt: Date,
  _count: countType
}

const Rightmenu = ( {user} : {user?:type_user} ) => {
  return (
    <div className='flex items-center justify-start flex-col w-[100%] gap-5'>
      {
        user ? (
        <>
          <Suspense fallback={"Loading..."}>
            <Userinfo user={user}/>
          </Suspense>
          <Suspense fallback={"Loading..."}>
            <Usermedia user={user}/>
          </Suspense>
        </>
      ) : ""
      }
      <FriendRequests/>
      <Birthdays/>
      <Ad size='md'/>
    </div>
  )
}

export default Rightmenu