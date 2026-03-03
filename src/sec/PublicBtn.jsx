import React, { useState } from 'react'

const PublicBtn = () => {

  const [active,setActive]=useState(0)
  return (
    <div className='text-center flex justify-center font-mono mt-5 items-center relative w-fit mx-auto  rounded-md py-1'>

      <div className={` absolute top-0 left-0 h-full w-1/3 bg-black rounded-md transition-all duration-300`}
      style={{
        transform:`translateX(${active*100}% )`
      }}></div>

        <button
        onClick={()=>setActive(0)} className={`z-10 px-6 py-2  ${active ===0 ? "text-white":"text-black"}`}>
          All types</button>
        <button
        onClick={()=>setActive(1)}  className={`z-10 px-6 py-2  ${active ===1 ? "text-white":"text-black"}`}>
          Petrol/Diesel</button>
        <button
        onClick={()=>setActive(2)}  className={`z-10 px-6 py-2 ${active ===2 ? "text-white":"text-black"}`}>
          Electric</button>
        
    </div>
  )
}

export default PublicBtn