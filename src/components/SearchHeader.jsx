import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox"
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-[#fff] flex justify-between items-center w-full p-6">
      <div className="">
        <Link href='/'>
        <Image 
        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png`}
        alt="google logo"
        width={120}
        height={40}
        priority
        style={{width:"auto", height: "auto"}}
        />
        </Link>
      </div>
      <div className="flex-1">
        <SearchBox />
      </div>
      <div className="hidden md:inline-flex">
        <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
        <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
      </div>
      <button className="text-white bg-blue-500 px-6 py-2 rounded-md font-medium transition-shadow hover:brightness-105 hover:shoadow-md">Sign in</button>
    </header>
  )
}
