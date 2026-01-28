import {motion } from 'motion/react'
import { secData } from '../assets'

const cardVarient={
  hidden:{opacity:0,y:20},
  visible:{opacity:1,y:0, transition:{type:"spring",stiffness:150,damping:10,ease:"easeInOut"}}
}
const containerVarient={
  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:.6,staggerChildren:0.4}}
}

const Section = () => { 
  return (
    <div className='container my-14 space-y-8' id='Section'>
      <div className='text-center max-w mx-auto space-y-2'>

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
        className='opacity-50 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt consectetur repellat, hic quia autem saepe tempora fugiat temporibus ab!
        </motion.p>
      </div>

      <motion.div variants={containerVarient} initial="hidden" whileInView={"visible"} viewport={{amount:.1}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  place-items-center'>
        {secData.map((item)=>(
          <motion.div variants={cardVarient} key={item.id} className=' text-center space-y-5'>
            <img className='shadow-2xl' src={item.image}></img>

            <div className='space-y-2 '>  
            <h2 className='text-2xl font-bold text-orange-400'>{item.title}</h2>
            <p className='text-gray-500 text-sm '>{item.subtitle}</p>
            </div>
            
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default Section