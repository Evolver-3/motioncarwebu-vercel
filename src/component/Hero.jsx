import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets'

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

        <div className='w-1/2 bg-blue-400 rounded-xl relative'>
        {/* <img src={assets.wall1} className='size-40'/>
        <img src={assets.wall2} className='size-80'/> */}
        {/* <img src={assets.wall3} className='w-full h-140'/> */}
        {/* <img src={assets.wall4}/> */}

        <div className='absolute inset-0 bg-no-repeat bg-cover rounded-xl'
        style={{
          backgroundImage:`url(/wallThree.jpg)`
        }}></div>

        
        </div>
        </div>

      </div>

    </div>
  )
}

export default Hero