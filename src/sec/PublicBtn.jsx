import React, { useState } from 'react'

const PublicBtn = ({filter,setFilter}) => {

  const [active,setActive]=useState(0)

  const handleClick=(index,value)=>{
    setActive(index)
    setFilter(value)
  }
  return (
    <div className='text-center flex justify-center font-mono mt-5 items-center relative w-fit mx-auto  rounded-md py-1'>

      <div className={` absolute top-0 left-0 h-full w-1/4 bg-black rounded-md transition-all duration-300`}
      style={{
        transform:`translateX(${active*100}% )`
      }}></div>

        <button
        onClick={()=>handleClick(0,"all")}
        className={`z-10 px-3 py-1 sm:px-10 sm:py-2  ${active ===0 ? "text-white":"text-black"}`}>
          All types</button>
        <button
        onClick={()=>handleClick(1,"petrol")}  className={`z-10 px-9 py-2  ${active ===1 ? "text-white":"text-black"}`}>
          Petrol/Diesel</button>
          <button
        onClick={()=>handleClick(2,"diesel")}  className={`z-10 px-9 py-2  ${active ===2 ? "text-white":"text-black"}`}>
          Petrol/Diesel</button>
        <button
        onClick={()=>handleClick(3,"electric")}  className={`z-10 px-10 py-2 ${active ===3 ? "text-white":"text-black"}`}>
          Electric</button>
        
    </div>
  )
}

export default PublicBtn