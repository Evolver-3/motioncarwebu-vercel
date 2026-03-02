import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Gallery from './Gallery'
import {AnimatePresence, motion} from 'motion/react'

const headings=[
  {
    id:1,
    head:"Need Class & Comfort",
    text:"Engineered for those who refuse ordinary. Precision handling, relentless power, and unmistakable design — this is performance without compromise."
  },
  {
    id:2,
    head:"Future Drives Electric",
    text:"Zero emissions. Maximum emotion. Discover the next generation of intelligent mobility.",
  }
]

const Hero = () => {

  const [currentIdx,setCurrentIdx]=useState(0)
  const headInx=headings[currentIdx];

  useEffect(()=>{
   let interval=setInterval(() => {
    setCurrentIdx((p)=>
    (p+1)%headings.length)

   }, 6000); 

   return ()=>clearInterval(interval)
  },[])

  return (
    <div className='w-full bg-red-200 h-screen'>

      <div className=' mx-4 my-2 flex flex-col gap-2 rounded-xl bg-blue-200 px-2 py-1'>

        <Navbar/>

       <AnimatePresence mode='wait'>
         <div className='flex gap-2 pb-1 '>
          <div className='w-1/2 h-141 rounded-xl bg-green-200 flex flex-col items-center justify-around py-10 glass'
          key={headInx.id}
         >

            <h2 className='sm:text-6xl text-4xl text-center'>{headInx.head}</h2>
            <div className='flex  px-5'>
              <h2 className='text-sm'>{headInx.text}</h2>
            <button>
              <i className="bx bx-arrow-in-up-right-circle" />
            </button>
            </div></div>

          <div className='w-1/2 h-140 rounded-xl bg-rose-100 px-2'>
            <Gallery/>
          </div>
        </div>
       </AnimatePresence>

      </div>

    </div>
  )
}

export default Hero