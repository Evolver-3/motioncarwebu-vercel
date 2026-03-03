
import { useState } from 'react'
import { assets } from '../assets'
import {motion} from 'motion/react'

const footerData=[
  {
    id:1,
    text:"Contact & Info",
    subText:[
      "Customer support","Online Genius (FAQ)","Accident Support","Request for Offer"
    ]
  },
  {
    id:2,
    text:"Experience BMW",
    subText:["About us","BMW careers","BMW.com","BMW Group","BMW Chennai Plain"
    ]
  },
  {
    id:3,
    text:"Assistance & Services",
    subText:["BMW X series","BMW 7 series","BMW 5 series","BMW 3 series","BMW 2 series","BMW M series","BMW Concept Cars","BMW Protection Vehicles","GKL Cars"
    ]
  },
  {
    id:4,
    text:"Choose & Buy",
    subText:["Build your Own","New Cars Search","BMW Financial Services","Finance & Leasing","BMW Offers","Book a Test Drive"
    ]
  },
  {
    id:5,
    text:"Models",
    subText:["Book a Service Appointment","MY BMW App","Connected Drive","Warranties","Remote Software Upgrades"
    ]
    
  },
  {
    id:6,
    text:"BMW Electric Cars",
    subText:["BMW Electric Vehicles"
    ]
  },

]

const Footer = () => {
  const [open,setOpen]=useState(null)
  return (
    <div className='bg-neutral-100  pb-10 text-black w-full'>
      <div className='flex flex-col sm:flex-row gap-1 mx-3'>
         <img src={assets.sign} className='size-20'/>

         <div className='font-sans flex flex-col sm:flex-row justify-between sm:items-center sm:justify-between pr-40 w-full pl-4 mb-5'>

          <h2 className='text-sm '>Stay up to date with the latest news from BMW</h2>
          <h3 className='text-sm font-semibold flex items-center hover:text-blue-600 active:text-blue-700 cursor-pointer'>Sign up
            <svg className='text-lg font-bold'  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" >
            <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path>
            </svg>
          
            </h3>
         </div>

      </div>

      <div className='w-full h-px bg-neutral-200'></div>

      <div className=' grid grid-cols-1 sm:grid-cols-3 space-y-5 py-5'>

        {footerData.map((data)=>(
          <div>
          <div className='flex justify-between px-5 hover:text-blue-600 active:text-blue-700 cursor-pointer space-y-1 mx-2' key={data.id}
          onClick={()=>setOpen(open === data.id ? null :data.id)}>

            <h2 className='text-lg font-mono'>{data.text}</h2>

            <svg className={`sm:hidden transition-all duration-400 ${open === data.id ? "rotate-180 ": ""}`}             
             xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" >
            <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
            </svg>
          </div>

          <ul className={`mx-8 space-y-2 sm:space-y-5 mb-4 trasition-all sm:block ${open === data.id ? "block":"hidden"}`}>
              {data.subText.map((sub,idx)=>(
                <li
                key={idx}
                className='text-sm leading-tight hover:text-blue-600 active:text-blue-700 cursor-pointer w-fit '>
                  {sub}
                </li>
              ))}
            </ul>
            </div>
        ))}
        
      </div>

      <div className='flex items-center justify-center'>

      </div>

      <div className='w-full h-px bg-neutral-200'></div>

      <div className='flex flex-col sm:flex-row gap-2 mx-7 text-sm mt-5 sm:gap-10'>
        <h2>Copyright © BMW AG 2026</h2>

        <div className='flex gap-5 '>
          <h2 className='cursor-pointer hover:text-blue-600 active:text-blue-700'>Legal Disclaimer/Imprint</h2>
          <h2 className='cursor-pointer hover:text-blue-600 active:text-blue-700'>Privacy Policy</h2>
          <h2 className='cursor-pointer hover:text-blue-600 active:text-blue-700'>Cookie Policy</h2>
          <h2 className='cursor-pointer hover:text-blue-600 active:text-blue-700'>Contact Us</h2>
        </div>
      </div>

      
    </div>
  )
}

export default Footer