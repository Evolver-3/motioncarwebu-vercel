import {motion , AnimatePresence} from 'motion/react'
import { useEffect, useState,useRef } from 'react'
import PublicBtn from './PublicBtn'
import ClickZoom from './ClickZoom'
import { carItems } from '../assets'

const Section = () => { 

  const [filter,setFilter]=useState("All")
  const sectionRef=useRef(null)

  useEffect(()=>{
    const onScreen=new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setFilter("all")
        }
      }
    )

    if(sectionRef.current){
      onScreen.observe(sectionRef.current)
    }
    return()=>{
      if(sectionRef.current){
        onScreen.unobserve(sectionRef.current)
      }
    }
  },[])

  const filteredCars=carItems.filter((car)=>{
    if(filter==="all")return true

    return car.specs.Fuel?.toLowerCase().includes(filter)
})

  return (
    <div className='my-10 py-10 space-y-8  bg-linear-to-b from-sky-200 to-rose-200 via-sky-300 h-screen' id='Section'
    ref={sectionRef}>
      
      <PublicBtn filter={filter} setFilter={setFilter}/>

      <div className='grid grid-cols-3 '>
        {filteredCars.map((filtercar)=>(
          <div key={filtercar.id} className='border border-neutral-300 flex sm:flex-row flex-col items-center'>
           <img src={filtercar.image}
           alt={filtercar.model} className='size-50 px-2'/>

           <div className='px-6 bg-neutral-200'>
            <h2 className='text-xl font-semibold'>{filtercar.model}</h2>
           <p className='text-sm'>{filtercar.specs.Fuel}</p>
           </div>
          </div>
        ))}
      </div>

      {/* <ClickZoom/> */}

    </div>
  )
}

export default Section




