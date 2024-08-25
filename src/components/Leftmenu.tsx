import React from 'react'
import Profilecard from './Profilecard'
import Ad from './Ad'
import Link from 'next/link'
import activity from "../../public/activity.png"
import posts from "../../public/posts.png"
import Image from 'next/image'
import market from "../../public/market.png"
import events from "../../public/events.png"
import albums from "../../public/albums.png"
import videos from "../../public/videos.png"
import news from "../../public/news.png"
import courses from "../../public/courses.png"
import lists from "../../public/lists.png"
import settings from "../../public/settings.png"

// typeof type = "home" | "profile"

const Leftmenu = ({type}:{type:"home" | "profile"}) => {
  // console.log(type);
  return (
    <div className='w-[90%] flex items-start justify-start flex-col gap-3 m-auto'>
      {
        type === "profile" && <Profilecard/>
      }
      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2 w-[100%]'>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={posts} height={20} width={30} className="object-cover" />
            <span>My Posts</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={activity} height={20} width={30} className="object-cover" />
            <span>Activity</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={market} height={20} width={30} className="object-cover" />
            <span>Marketplace</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={events} height={20} width={30} className="object-cover" />
            <span>Events</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={albums} height={20} width={30} className="object-cover" />
            <span>Albums</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={videos} height={20} width={30} className="object-cover" />
            <span>Videos</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={news} height={20} width={30} className="object-cover" />
            <span>News</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={courses} height={20} width={30} className="object-cover" />
            <span>Courses</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={lists} height={20} width={30} className="object-cover" />
            <span>Lists</span>
        </Link>

        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image alt="image" src={settings} height={20} width={30} className="object-cover" />
            <span>Settings</span>
        </Link>

      </div>
      <Ad size='lg'/>
    </div>
  )
}

export default Leftmenu