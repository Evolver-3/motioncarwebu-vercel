import { assets } from "../assets"
import {motion} from 'motion/react'

const Banner = () => {
  return (
    <div className='container my-20'>
      <div className='background-image sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-lg'>
        <div className="">
          <div className="space-y-5 max-w-xl mx-auto ">

            <motion.h1 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:.3
            }}
            className="text-2xl text-center sm:text-4xl font-semibold">Download the app
            </motion.h1>

            <motion.p 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:.4
            }} className="text-center text-sm sm:px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ipsa?

            </motion.p>

            <div  className="flex justify-center gap-4 item-center">
              <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                <motion.img
                 initial={{opacity:0,y:100}}
                 whileInView={{opacity:1,y:0}}
                 transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:.4
            }} src={assets.google}/>
              </a>
              <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" >
                <motion.img initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:.5
                  }} src={assets.apple}/>
              </a>
            </div>
          </div>
        </div>

      </div>
      
   
      
    </div>
  )
}

export default Banner