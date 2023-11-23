import React from 'react'

function LoadingCard() {
  return (
    <div className='animate-pulse'>
        <div className="rounded-xl overflow-hidden block aspect-video">
            <div  alt="" className="object-cover duration-200 bg-slate-200 transition-all ease-in-out w-full h-full hover:scale-125 cursor-pointer" />
        </div>

        <div className="flex items-center mt-4">
            <p className="text-gray-500 font-medium text-sm bg-slate-200 h-2 rounded w-full"></p>
        </div>

        <p className="mt-2 bg-slate-200 h-6 rounded w-full  font-bold text-xl cursor-pointer">
        </p>
    </div>
  )
}

export default LoadingCard