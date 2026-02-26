import {motion } from 'motion/react'
import { assets, secData } from '../assets'
import { useState } from 'react'

const cardVarient={
  hidden:{opacity:0,y:20},
  visible:{opacity:1,y:0, transition:{type:"spring",stiffness:150,damping:10,ease:"easeInOut"}}
}
const containerVarient={
  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:.6,staggerChildren:0.4}}
}


const carItems=[
  { id:1,
    imagefront:assets.ducati,
    imageside:assets.bmwoneside,
    model:"2 Series Gran Coupe",
    price:"₹45.30L - 47.20L",
    engine:"1499 cc",
    mileage:"16.35 km/l",
    capacity:"5"
  }
]

const Section = () => { 

  const [clicked,setClicked]=useState(false)
  return (
    <div className='container my-14 space-y-8' id='Section'>
      <div className='text-center max-w mx-auto space-y-2 flex flex-col items-center '>

        <motion.h1 
        initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness:150, damping:10,delay:0.2}}
        className='text-3xl font-bold text-gray-500'>
          New and <span className='text-orange-300'> Classical car</span>
        </motion.h1>

        <motion.p 
        initial={{opacity:0,scale:0.4}}
        whileInView={{opacity:1,scale:1}}
        transition={{
          type:"spring",
          stiffness:150,
          damping:10,
          delay:0.3
        }}
        className='opacity-50 text-sm max-w-sm '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt consectetur repellat, hic quia autem saepe tempora fugiat temporibus ab!
        </motion.p>
      </div>

      <div className='w-full h-screen bg-linear-to-b from-sky-200 to-rose-200 via-sky-300 flex items-center justify-center relative'
      style={{perspective:1000}}>

        {carItems.map((item,index)=>(<>
          <div className=' flex flex-col relative z-20  text-neutral-200 font-bold font-serif text-shadow-md ' key={item.id}>
            <h2 className='text-[250px] leading-50'>BMW</h2>
            <h5 className='text-5xl font-mono'>{item.model}</h5>
                     
          </div>

          <motion.img
          initial={{translateZ:10}}
          animate={{translateZ:50}}
          transition={{duration:2,repeat:Infinity}}
          style={{transformStyle:"preserve-3d"}}
          src={item.imagefront} className='absolute w-100 h-60 top-70  z-0' onClick={()=>setClicked(!clicked)}/>

          {clicked && (
            <div className='absolute w-50 h-70 rounded-md ring ring-neutral-400 bg-neutral-200 '>

              <h2>Engine:{item.engine}</h2>

            </div>
          )}



          </>
        ))
        }

      </div>

    </div>
  )
}

export default Section