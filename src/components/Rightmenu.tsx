import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from './Ad'
import Userinfo from './Userinfo'
import Usermedia from './Usermedia'

const Rightmenu = ( {userId} : {userId?:string} ) => {
  return (
    <div className='flex items-center justify-start flex-col w-[100%] gap-5'>
      {
        userId ? (
        <>
          <Userinfo/>
          <Usermedia/>
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