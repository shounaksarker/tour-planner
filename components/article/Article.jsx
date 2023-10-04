import Image from 'next/image'
import React from 'react'
import userIcon from "@/Imgs/user.png"

export const Article = ({data}) => {
  return (
    <div className='py-8 flex flex-col space-y-10 container'>
        {/* heading and author and title  */}
        <div className='flex flex-col space-y-8'>
            <p className='text-blue-800'>Travel stories <spa className='mx-2 text-black font-medium'>{` > `}</spa> {data?.country}</p>
            <h1 className='font-bold text-3xl lg:text-5xl'>{data?.title}</h1>
            <div className='flex space-x-4 max-h-14'>
                <Image src={data?.authorImg ? data?.authorImg : userIcon} alt="author img" width={50} height={30} className='rounded-full' />
                <div className='flex flex-col  divide-y-2 divide-blue-800'>
                    <p className='font-medium text-blue-800'>{data?.author}</p>
                    <p className='text-sm text-gray-500'>{data?.postedDate}</p>
                </div>
            </div>
        </div>
        {/* large image  */}
        <div className='flex flex-col justify-center items-center'>
            <Image src={data?.img} alt="imgg" width={1000} height={600} className='rounded-lg w-full h-[300px] lg:h-[80vh]' />
            <p className='text-sm tracking-wide italic'>{data?.title} </p>
        </div>

        {/* text section  */}
        <div>
            <p className='whitespace-pre-line text-sm tracking-wide mx-auto w-[300px] md:w-[600px] lg:w-[940px] lg:text-xl text-justify'>{data?.desc}</p>
        </div>
    </div>
  )
}
