import React,{useEffect,useState} from 'react'
import {motion,AnimatePresence} from 'motion/react'

const Info = () => {

  const infoVariant={
    hidden:{
      opacity:0,
      x:40,
      filter:'blur(5px)'
    },
    show:{
      opacity:1,
      x:0,
      filter:"blur(0px)",
      transition:{
        type:"spring",
        stiffness:100,
        damping:10,
        mass:1
      }
    },
    exit:{
      opacity:0,
      x:40,
      filter:"blur(5px)",
      transition:{
        duration:0.5
      }
    }
  }

  const [autoShow,setAutoShow]=useState(false)

  useEffect(()=>{
    const timer=()=>{
      setAutoShow(true)

    setTimeout(()=>{
      setAutoShow(false)
    },10000)
    }
    timer()
    const interval=setInterval(timer,20000)
    return()=>clearInterval(interval)
  },[])
  return (
    <>
    <svg className='absolute -top-5 right-10 text-white' xmlns="http://www.w3.org/2000/svg"
      onClick={()=>setAutoShow(!autoShow)}
      width="35" height="35"  
        fill="currentColor" viewBox="0 0 24 24" >
        <motion.path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></motion.path>
        <motion.path d="M11 16h2v2h-2zm2.27-9.75c-2.08-.75-4.47.35-5.21 2.41l1.88.68c.18-.5.56-.9 1.07-1.13s1.08-.26 1.58-.08a2.01 2.01 0 0 1 1.32 1.86c0 1.04-1.66 1.86-2.24 2.07-.4.14-.67.52-.67.94v1h2v-.34c1.04-.51 2.91-1.69 2.91-3.68a4.015 4.015 0 0 0-2.64-3.73"></motion.path>
      </svg>

        <AnimatePresence>
        {autoShow && (
        <motion.span
        variants={infoVariant}
        initial="hidden"
        whileInView="show"
        exit="exit"
      
      className='absolute -top-5 right-18 w-60 h-7 bg-neutral-100 rounded-xl px-2 text-center py-0.5 text-neutral-700 text-md'>Click on the cars to check info</motion.span>
      )}
      </AnimatePresence>

      </>
  )
}

export default Info