
import { assets } from '../assets'
import {motion} from 'motion/react'

const Footer = () => {

  return (
    <div className='bg-yellow-800 pt-15 pb-10 text-white w-full'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-14'>

          <motion.div
          initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.4,
              duration:0.6
            }}
          className='space-y-6'>
            <h1 
            className='text-2xl font-bold text-gray-700'>
              Death Relive.
            </h1>
            <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, id!</p>

            <div>
              <p className='flex items-center gap-2 text-sm'>
                <img className='w-6' src={assets.phone}/>
                +1 (123) 456-7890
              </p>
              <p className='flex items-center gap-2 text-sm'>
                <img className='w-6' src={assets.loca}/>
                Kanpur, Uttar Pradesh
              </p>
            </div>

          </motion.div>
          
          <motion.div 
          initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.4,
              duration:.6
            }}
          className="space-y-6">
            <h3
            className='text-2xl font-bold text-gray-700'> Quick Links</h3>

            <div className="grid grid-cols-1">
              
              <div>
                <ul className='space-y-2'>
                  <li ><a href='/#Home'>Home</a></li>
                  <li><a href='/#Contact'>Contact</a></li>
                  <li><a href='/#Section'>Section</a></li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.4,
              duration:.6
            }}
          className='space-y-6'>
            <h1
            
             className='text-2xl font-bold text-gray-700' >
              Follow Us
             </h1>
            <div className='flex gap-2 '> 
              <motion.img 
               initial={{opacity:0,y:100}}
                 whileInView={{opacity:1,y:0}}
                 transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:.5,
                  duration:.7
            }}
              className='w-10' src={assets.fb}/>
              <motion.img 
               initial={{opacity:0,y:100}}
                 whileInView={{opacity:1,y:0}}
                 transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:.6,
                  duration:.7
            }}
              className='w-10' src={assets.insta}/>
              <motion.img 
               initial={{opacity:0,y:100}}
                 whileInView={{opacity:1,y:0}}
                 transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:.7,
                  duration:.7
            }}
              className='w-10' src={assets.tele}/>
              
            </div>
          </motion.div>

        </div>
      </div>
       <p className='text-white text-center mt-8 py-10 mx-15 border-t-2'>
          Copyright © 2025 Death Relive. All rights reserved 
        </p>
    </div>
  )
}

export default Footer