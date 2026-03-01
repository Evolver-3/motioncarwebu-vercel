import { assets } from "../assets"
import {motion} from 'motion/react'

const Banner = () => {

  const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
      }
    }
  }

  const itemVariant = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
      }
    }
  }

  return (
    <div className='w-full my-20'>
      <div className="background-image  w-full h-full sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-lg text-white">
    
        <div className="">
          <motion.div
          variants={containerVariant}
          initial="hidden"
          animate='show'
          className="space-y-5 max-w-xl mx-auto ">

            <motion.h1 
            variants={itemVariant}
            className="text-6xl text-center md:text-8xl font-semibold leading-tight">Download the app
            </motion.h1>

            <motion.p 
            variants={itemVariant}className="text-center text-xl md:text-3xl sm:px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ipsa?

            </motion.p>

            <motion.div  className="flex justify-center gap-20 items-center"
            variants={itemVariant}>

              <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <motion.img src={assets.google}/>
              </a>

              <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" >
                <motion.img src={assets.apple}/>
              </a>
            </motion.div>


          </motion.div>
        </div>

      </div>
      
   
      
    </div>
  )
}

export default Banner