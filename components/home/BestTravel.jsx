import Link from 'next/link'
import React from 'react'

export const BestTravel = () => {
  return (
    <div className="relative h-[600px] md:h-screen mb-8">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569949381669-ecf31ae8e613')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="text-white text-lg font-bold uppercase md:leading-[200px] text-center">
            <p className='text-4xl md:text-7xl lg:text-[80px] mb-5 md:mb-9'>Best Places</p> <p className='text-4xl md:text-7xl lg:text-[80px] mb-5 md:mb-9'> for Travel </p> <p className='text-2xl md:text-4xl lg:text-[40px]'>2023</p>
            <Link href="/Article/best_place_2023" className="btn btn-primary hover:bg-blue-800 mt-4">Check this article...</Link>
            </div>
      </div>
    </div>
  )
}
