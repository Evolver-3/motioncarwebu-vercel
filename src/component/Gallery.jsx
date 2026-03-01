import React, {  useEffect, useState,useRef } from 'react'
import { assets } from '../assets'
import {AnimatePresence, motion} from 'motion/react'

const imageGallery=[assets.wall1,assets.wall2,assets.wall3,assets.wall4,assets.wall5,assets.wall6,assets.wall7,assets.wall8,assets.wall9,assets.wall10,assets.wall11,assets.wall12]

const Gallery = () => {

    const [imagePosition, setImagePosition]=useState(imageGallery)

    const shuffle=(array)=>{
      let currentIndex=array.length;
      let randomIndex;

      while(currentIndex !== 0 ){
        randomIndex=Math.floor(Math.random()* currentIndex)
        currentIndex--

        [array[currentIndex],array[randomIndex]]=[array[randomIndex], array[currentIndex]]
      }
      return array
    }

    const shuffleSquares=()=>{
      setImagePosition(prev=> shuffle([...prev]))
    }

     useEffect(()=>{
      let duration=setInterval(()=>{
        shuffleSquares()
      },2000)

      return()=>clearInterval(duration)
      
    },[])

  return (

      <div className='grid grid-cols-4 gap-1 my-2'>
        {imagePosition.map((img)=>(
          <motion.div
          key={img}
          layout
          transition={{
            duration:0.2,
            type:"spring",
            stiffness:30
          }}
          className='w-full h-45 overflow-hidden rounded-sm bg-no-repeat bg-cover'
          style={{
            backgroundImage:`url(${img})`
          }}
          >
          </motion.div>
        ))}
      </div>

  )
}

export default Gallery


