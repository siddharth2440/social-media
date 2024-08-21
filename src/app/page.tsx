import Addpost from "@/components/Addpost"
import Feed from "@/components/Feed"
import Leftmenu from "@/components/Leftmenu"
import Rightmenu from "@/components/Rightmenu"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='border-3 border-green-500 min-h-screen pt-2 px-1 m-auto flex items-start justify-between '>

      {/* left  */}

      <div className="hidden xl:flex w-[30%]">
        <Leftmenu type={"home"}/>
      </div>

      {/* center  */}
      <div className="w-full md:w-[40%]">
        <div>
          <Stories/>
          <Addpost/>
          <Feed/>
        </div>
      </div>

      {/* right  */}
      <div className="hidden md:flex w-[30%]">
        <Rightmenu/>
      </div>
    </div>
  )
}

export default Homepage