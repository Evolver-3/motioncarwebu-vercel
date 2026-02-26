import {motion} from 'motion/react'
import { assets } from '../assets'
import React from 'react'
import PhoneCard from './PhoneCard'
const ContactPage = () =>{

  const containerVariant={
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.9,
        delay:0.2
      }
    }
  }

  const childVariant={
    hidden:{
      x:-100,
      opacity:0
    },
    show:{
      x:0,
      opacity:1,
      transition:{
        duration:0.8
      }
    }
  }

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "assets.URL");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
  };
  return (
    <div className='container my-10 px-3' id='Contact'>
      <div className='flex gap-4 md:gap-5'>

        <div className='space-y-8 w-1/2'>
          <motion.h1 initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.6,
            ease:"easeOut"
          }}
          viewport={{once:true}}
           
           className='text-2xl md:text-4xl font-bold text-gray-600 font-mono'>Contact Us to buy our products from anywhere
          </motion.h1>

          <form onSubmit={onSubmit} className='gap-5  md:gap-10 flex flex-col w-full'>

          <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show" 
           className='flex items-center gap-5 overflow-hidden'>

            <motion.input
            variants={childVariant}
            className='w-1/2 md:w-2/3 px-4 py-2 border border-gray-400 rounded-md' type="text" placeholder="Name"/>

            <motion.input 
            variants={childVariant}
            className='w-1/2 md:w-2/3 px-4 py-2 border border-gray-400 rounded-md' type="email" placeholder='Email'/>

          </motion.div>

          <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show" 
          className='flex items-center gap-5 overflow-hidden'>

            <motion.input
            variants={childVariant}
            className='w-1/2 md:w-2/3 px-4 py-2 border border-gray-400 rounded-md' type="text" placeholder="Country"/>

            <motion.input
            variants={childVariant}
            className='w-1/2 md:w-2/3 px-4 py-2 border border-gray-400 rounded-md' type="text" placeholder='Zipcode'/>

          </motion.div>


          <button className=' w-full px-5 py-1.5 text-lg font-bold bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:text-orange-400'>{result?result:"Contact"}</button>
          </form>
        </div>
       

        <div className=' w-1/2'>

          {/* <motion.img initial={{opacity:0,scale:0}} 
          whileInView={{opacity:1,scale:1}}
          transition={{ease:"easeOut",delay:0.3,duration:1}}
           className=" w-full h-full shadow-xl/60 rounded-md block " src={assets.upback}>
           </motion.img> */}

           <PhoneCard/>

        </div>
      </div>
    </div>
  )
}

export default ContactPage