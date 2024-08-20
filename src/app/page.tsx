import Addpost from "@/components/Addpost"
import Feed from "@/components/Feed"
import Leftmenu from "@/components/Leftmenu"
import Rightmenu from "@/components/Rightmenu"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='border-3 border-green-500 min-h-screen pt-2 px-1 m-auto flex items-start justify-between '>

      {/* left  */}

      <div className="hidden xl:flex border w-[25%]">
        <Leftmenu/>
      </div>

      {/* center  */}
      <div className="w-full md:w-[70%] border">
        <div>
          <Stories/>
          <Addpost/>
          <Feed/>
        </div>
      </div>

      {/* right  */}
      <div className="hidden md:flex w-[28%] border">
        <Rightmenu/>
      </div>
    </div>
  )
}

export default Homepage