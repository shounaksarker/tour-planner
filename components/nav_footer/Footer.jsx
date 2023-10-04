import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TiSocialYoutubeCircular} from 'react-icons/ti'

export const Footer = () => {
  return (
    <footer className='flex justify-around bg-black items-center py-6 text-white text-sm md:text-lg'>
        <h3 className='font-bold'>Tour Planner</h3>
        <h3>&copy; Copyright {new Date().getFullYear()}</h3>
        <div className='flex space-x-3'>
            <BsFacebook className='text-[18px] md:text-[22px]'/>
            <AiFillTwitterCircle className='text-[22px] md:text-[26px]'/>
            <TiSocialYoutubeCircular className='text-[24px] md:text-[30px]'/>
        </div>
    </footer>
  )
}
