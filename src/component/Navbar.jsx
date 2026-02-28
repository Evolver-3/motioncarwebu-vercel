import React from 'react'
import { assets } from '../assets'
import {motion} from 'motion/react'


const navItems=[
  {
    id:1,title:"Home",Link:""
  },
  {
    id:2,title:"Inventory",Link:""
  },
  {
    id:3,title:"why us",Link:""
  },
  {
    id:2,title:"Financing",Link:""
  },
  {
    id:5,title:"Testimonials",Link:""
  }
]
const Navbar = () => {
  
  const containerVariant={
    hidden:{
      opacity:0,
      scale:0
    },
    show:{
      opacity:1,
      scale:1,
      transition:{
        duration:1,
        delay:0.7,
        ease:"easeInOut"

      }
    }
  }

  
  return (
    <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    style={{
      transformOrigin:"center"
    }}
    className='w-full rounded-xl bg-neutral-500 text-sm capatalize flex items-center  justify-between px-2 py-1'>

      <img src={assets.bmwLogo} className='w-10 h-10'/>

      <div className='text-sm capitalize flex gap-3 text-neutral-50 items-center'>
        {navItems.map((item,index)=>(
          <motion.div key={item.id} className='text-[12px] font-sans hover:text-white cursor-pointer hover:bg-neutral-600 px-1 py-1 rounded-sm hover:scale-105 transition-all duration-300 active:scale-95 active:text-blue-300 ease-in-out'>
            {item.title}
          </motion.div>
        ))}

        <button className='bg-lime-600 text-white px-2 py-1 rounded-lg flex gap-2 hover:bg-lime-500 hover:text-neutral-700 transition-all duration-100 active:scale-95'>
           <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
              
            </svg>
            Call us
        </button>
      </div>

      



    </motion.div>
  )
}

export default Navbar