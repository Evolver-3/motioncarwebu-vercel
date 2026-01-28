import {motion} from 'motion/react'
import { assets } from '../assets'
import React from 'react';



const ContactPage = () => {

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
    <div className='container my-30 px-10' id='Contact'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-5'>

        <div className='space-y-8'>
          <motion.h1 initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.6,
            type:"spring",
            stiffness:100,
            damping:10
          }}
           
           className='text-4xl font-bold text-gray-600 font-mono'>Contact Us to buy our products from anywhere
          </motion.h1>

          <form onSubmit={onSubmit} className='gap-10 flex flex-col'>
          <motion.div 
          initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.7,
          }}
           className='flex items-center gap-5'>

            <input className='w-[140px] lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="text" placeholder="Name"/>

            <input className='w-[200px] lg:w-[280px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="email" placeholder='Email'/>

          </motion.div>

          <motion.div 
          initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.8,
          }}
          className='flex items-center gap-5'>

            <input className='w-[140px] lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="text" placeholder="Country"/>

            <input className='w-[200px] lg:w-[280px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="text" placeholder='Zipcode'/>

          </motion.div>
          <button className='px-2 py-2 text-lg font-bold bg-gray-600 text-white w-[365px] lg:w-[450px] rounded-lg hover:bg-gray-700 hover:text-orange-400'>{result?result:"Contact"}</button>
          </form>
        </div>
       

        <div className='container w-120 '>

          <motion.img initial={{opacity:0,scale:0.5}} 
          whileInView={{opacity:1,scale:1}}
          transition={{type:'spring',stiffness:100,damping:10,delay:1}}
           className=" w-[400px] md:w-[400px] lg:w-auto shadow-xl/60 rounded-md block " src={assets.upback}></motion.img>

        </div>
      </div>
    </div>
  )
}

export default ContactPage