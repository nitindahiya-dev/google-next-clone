'use client'
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }

    const randomSearch =async () => {
        setIsLoading(true)
        const res = await fetch('https://random-word-api.herokuapp.com/word').then((response)=>response.json())
        .then((data)=>data[0]);
        if(!res) return;
        router.push(`/search/web?searchTerm=${res}`)
        setIsLoading(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto  max-w-[90%] border border-gray-200 px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl  hover:shadow-md transition-shadow focus-within:shadow-md">
                <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
                <input onChange={(e) => setInput(e.target.value)} type="text" className="flex-grow focus:outline-none" />
                <BsFillMicFill className="text-lg" />
            </form>

            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 mt-8">
                <button onClick={handleSubmit} className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow">Google Search</button>
                <button disabled={isLoading} onClick={randomSearch} className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 disabled:opacity-80 disabled:shadow-sm focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow">{isLoading ? 'Loading...':' I am feeling Lucky ' }</button>
            </div>
        </>
    )
}
