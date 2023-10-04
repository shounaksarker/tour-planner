import React from 'react'
import c from '../../Imgs/c.jpeg'
import Image from 'next/image'

export const FromSponsor = () => {
  return (
    <div className='container 2xl:min-h-screen md:px-4'>
        <div className='flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-8'>
            <div className='relative h-[400px] w-[300px] mb-6 md:mb-0 md:h-[600p] md:w-[800px] 2xl:w-[900px] 2xl:h-[700px]'>
                <Image src={c} alt="" className='rounded-[100000px]' fill/>
            </div>
            <div className='px-3 text-center md:text-left md:max-w-[]'>
                <h4 className='uppercase font-semibold text-[#616161]'>from our sponsors</h4>
                <h4 className='font-bold text-3xl capitalize mt-2 mb-6'>Bandarban, three unforgettable ways</h4>
                <p className='text-lg text-left'>Whether you are traveling solo, in the throes of romance, or with your family, there are many different ways to experience the City of Light. In partnership with Delta Vacations, we wll show you how you can use miles to do more.</p>
            </div>
        </div>
    </div>
  )
}
