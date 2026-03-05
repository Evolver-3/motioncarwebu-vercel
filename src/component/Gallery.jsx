import React, {  useEffect, useState,useRef } from 'react'
import { assets } from '../assets'
import {motion} from 'motion/react'

const imageGallery=[{id:1, src: assets.wall1}, {id:2, src: assets.wall2}, {id:3, src: assets.wall3}, {id:4, src: assets.wall4}, {id:5, src: assets.wall5}, {id:6, src: assets.wall6}, {id:7, src: assets.wall7}, {id:8, src: assets.wall8}, {id:9, src: assets.wall9}, {id:10, src: assets.wall10}, {id:11, src: assets.wall11}, {id:12, src: assets.wall12}]

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

      <div className='grid sm:grid-cols-4 grid-cols-3 gap-1 my-2'>
        {imagePosition.map((img)=>(
          <motion.div
          key={img.id}
          layout
          transition={{
            duration:0.2,
            type:"spring",
            stiffness:30
          }}
          className='w-full h-33 sm:h-45 overflow-hidden rounded-sm bg-no-repeat bg-cover'
          style={{
            backgroundImage:`url(${img.src})`
          }}
          >
          </motion.div>
        ))}
      </div>

  )
}

export default Gallery


