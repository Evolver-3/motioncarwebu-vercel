import {motion , AnimatePresence} from 'motion/react'
import { assets} from '../assets'
import { useEffect, useState } from 'react'
import Info from './Info'
import ColComp from './ColComp'
import InfoComp from './InfoComp'


const carItems=[
  { 
    id:1,
    image:assets.redM2,
    imageVariant:[
      assets.redM2,
      assets.BlueM2,
      assets.grayM2,
      assets.lightM2,
      assets.blackM2
    ],
    model:"M2 series",
    specs:{
      
      price:"₹1.03Cr",
      Fuel:"Petrol",
      engine:"2993 cc",
      mileage:"10.13 km/l",
      capacity:"4",
      body:"Convertible"
    }
   },
   { 
    id:2,
    image:assets.M5,
    model:"M5 xDrive",
    specs:{
      
      price:"₹1.99 Cr",
      Fuel:"Petrol",
      engine:"4395 cc",
      mileage:"9.1 km/l",
      capacity:"5",
      body:"Sedan"
    }
  },
   { 
    id:3,
    image:assets.sapphire,
    imageVariant:{
      sapphire:assets.sapphire,
      white:assets.white,
      blue:assets.blue,
      Gray:assets.Gray,
      grey:assets.grey
    },
    model:"7 Series",
    specs:{
      
      price:"₹1.81 Cr",
      Fuel:"Petrol, Diesel",
      engine:"2998 cc",
      mileage:"12.61 km/l",
      capacity:"5",
      body:"Sedan"
    }
  }
]


const Section = () => { 

  const [currentIdx,setCurrentIdx]=useState(0)

  const currentCar=carItems[currentIdx];

  const nextPage=()=>{
    setCurrentIdx((p)=>
    p === carItems.length-1 ? 0: p+1)
  }
  
  const prevPage=()=>{
    setCurrentIdx((p)=>
    p === 0 ? carItems.length-1 : p-1)

  }

  const [clicked,setClicked]=useState(false)

  const [selectedImage,setSelectedImage]=useState(null)

  useEffect(()=>{
    setSelectedImage(currentCar.image)
  },[currentCar])
  
  return (
    <div className='my-14 space-y-8  bg-linear-to-b from-sky-200 to-rose-200 via-sky-300 h-screen' id='Section'>
      <div className='text-center max-w mx-auto space-y-2 flex flex-col items-center '>
      </div>

      <div className='w-full flex items-center justify-center relative'
      >
        <Info/>

          <motion.div className=' flex flex-col relative z-20  text-neutral-200 font-bold font-serif text-shadow-md' key={carItems[currentIdx].id}>


            <h2 className='sm:text-[250px] text-9xl leading-none'>BMW</h2>
            <h5 className='text-5xl font-mono'>{carItems[currentIdx].model}</h5>


             <motion.img
                animate={{
                  scale:clicked? 1.4:1.1,
                  opacity:clicked? 1:0.8
                }}
                transition={{duration:0.6}}
                style={{zIndex:clicked? 30:0}}
                src={selectedImage  || currentCar.image} className='absolute 5 h-60 top-68  z-0' onClick={()=>setClicked(!clicked)}/>

          <AnimatePresence>
            {clicked && (
            <motion.div 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            exit={{opacity:0, scale:0.5}}
            className='absolute -right-1/4 top-1/2  rounded-md ring ring-neutral-400 bg-neutral-300 text-black py-10 px-5'>

              <ColComp car={currentCar} setSelectedImage={setSelectedImage}/>
              <InfoComp car={currentCar}/>
              <button className='absolute top-0 right-0 px-2 py-1 bg-red-400 rounded-full text-white font-semibold ' onClick={()=>setClicked(false)}>
                X
              </button>

            </motion.div>
          )}
          </AnimatePresence>
                     
          </motion.div>
     

      </div>

      <div className='w-full flex justify-between px-10 pb-10'>

        <button className='px-1 py-2 rounded-md bg-neutral-100 hover:bg-neutral-300 cursor-pointer group'
        onClick={prevPage}>
          <svg className='text-rose-300 group-hover:text-rose-500' xmlns="http://www.w3.org/2000/svg" width="34" height="34"  
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="M12.71 16.29 8.41 12l4.3-4.29-1.42-1.42L5.59 12l5.7 5.71z"></path><path d="M16.29 6.29 10.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
          </svg>
        </button>

        <button className='px-1 py-2 rounded-md bg-neutral-100 hover:bg-neutral-300 cursor-pointer group'
        onClick={nextPage}>
          <svg className='text-rose-300 group-hover:text-rose-500' xmlns="http://www.w3.org/2000/svg" width="34" height="34"  
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="m7.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path><path d="m11.29 7.71 4.3 4.29-4.3 4.29 1.42 1.42 5.7-5.71-5.7-5.71z"></path>
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Section




