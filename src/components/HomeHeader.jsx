import Link from "next/link"
import { TbGridDots } from "react-icons/tb"


const HomeHeader = () => {
  return (
    <header className="flex justify-end items-center  text-sm p-5">
      <div className="flex gap-5 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">Gmail</Link>
        <Link href={"https://image.google.com"} className="hover:underline">Images</Link>
        <TbGridDots className="bg-transparent rounded-full text-4xl p-2  hover:bg-gray-200"/>
        <button className="text-white bg-blue-500 px-6 py-2 rounded-md font-medium transition-shadow hover:brightness-105 hover:shoadow-md">Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader