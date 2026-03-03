import {motion , AnimatePresence} from 'motion/react'
import { assets} from '../assets'
import { useEffect, useState } from 'react'
import Info from './Info'
import ColComp from './ColComp'
import InfoComp from './InfoComp'
import PublicBtn from './PublicBtn'
import ClickZoom from './ClickZoom'




const Section = () => { 

 
  
  return (
    <div className='my-14 space-y-8  bg-linear-to-b from-sky-200 to-rose-200 via-sky-300 h-screen' id='Section'>
      
      <PublicBtn/>

      <ClickZoom/>

    </div>
  )
}

export default Section




