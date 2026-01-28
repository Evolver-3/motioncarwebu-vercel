import { assets } from '../assets'
import {motion} from 'motion/react'

const Navbar = ({open,setIsOpen}) => {

  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-40'>
      <div className='mx-10 md:mx-20 '>
        <div className='flex justify-between items-center'>
          <motion.h1 initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness:100,damping:10,delay:1.2}} className='text-3xl font-semibold'>
            <span className='text-orange-200'>Death </span>
            Relive.
          </motion.h1>

          <div>
            <img className='w-10 cursor-pointer z-2' src={assets.menu} onClick={()=>setIsOpen(!open)}></img>
          
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar