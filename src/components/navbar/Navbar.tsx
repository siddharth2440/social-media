import Link from 'next/link'
import React from 'react'
import Mobilemenu from '../mobileMenu/Mobilemenu'
import Image from 'next/image'
import link1 from "../../../public/home.png"
import link2 from "../../../public/friends.png"
import link3 from "../../../public/stories.png"
import poeples from "../../../public/people.png"
import bell from "../../../public/notifications.png"
import login from "../../../public/addimage.png"
import search from "../../../public/search.png"
import messages from "../../../public/messages.png"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between px-2'>
        {/* left */}

        <div className='md:hidden lg:block'>
            <Link href={"/"} className='text-xl font-bold text-blue-700'> SocialMedia </Link>
        </div>
        {/* middle */}
        <div className='hidden md:flex items-start justify-start gap-3 text-sm'>
            
            <div className='flex items-center justify-start gap-2'>
                <Image src={link1} alt='homepage-image' height={16} width={16} className='h-3 w-auto'/>
                <h1 className='text-[0.9rem]'>Homepage</h1>
            </div>

            <div className='flex items-center justify-start gap-2'>
                <Image src={link2} alt='homepage-image' height={16} width={16} className='h-3 w-auto'/>
                <h1 className='text-[0.9rem]'>Friends</h1>
            </div>

            <div className='flex items-center justify-start gap-2'>
                <Image src={link3} alt='homepage-image' height={16} width={16} className='h-3 w-auto'/>
                <h1 className='text-[0.9rem]'>Stories</h1>
            </div>
            

        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
          <Image src={search} alt="" width={14} height={14}/>
        </div>
        {/* right  */}
        <div className='w-[30%] flex items-center justify-end gap-3'>

            {/* clerk context auth here  */}
            <ClerkLoading>
                <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black'></div>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    {/* <h1>SI</h1> */}
                    <div>
                        <Image src={poeples} alt='image' width={20} height={20} />
                    </div>
                    <div>
                        <Image src={bell} alt='image' width={20} height={20} />
                    </div>
                    <div>
                        <Image src={messages} alt='image' width={20} height={20} />
                    </div>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <div className='flex text-sm items-center justify-start'>
                        <Image src={login} alt='image'/>
                        <Link href={"/sign-in"}>Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <Mobilemenu/>

        </div>
    </div>
  )
}

export default Navbar