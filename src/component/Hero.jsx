import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets'
import Gallery from './Gallery'




const Hero = () => {
  return (
    <div className='w-full bg-red-200 h-screen'>

      <div className=' mx-4 my-2  rounded-xl bg-blue-200 '>

        <Navbar/>

        <div className='flex gap-2'>
          <div className='w-1/2 '>

          <div className='w-full rounded-xl'>

          </div>

          <div className='rounded-xl'>

          </div>

        </div>

        <div className='w-1/2 h-140 rounded-xl'>
        <Gallery/>

        </div>
        </div>

      </div>

    </div>
  )
}

export default Hero