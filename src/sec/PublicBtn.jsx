import React, { useState } from 'react'

const PublicBtn = ({filter,setFilter}) => {

  const [active,setActive]=useState(null)

  const handleClick=(index,value)=>{
    setActive(index)
    setFilter(value)
  }
  return (
    <div className='relative grid grid-cols-4 w-full max-w-xl mx-auto border rounded-md overflow-hidden font-mono'>

      <div className={` absolute top-0 left-0 h-full w-1/4 bg-black rounded-md transition-all duration-300`}
      style={{
        transform:`translateX(${active*100}% )`
      }}></div>

        <button
        onClick={()=>handleClick(0,"all")}
        className={`z-10 text-xl sm:text-2xl  ${active ===0 ? "text-white":"text-black"}`}>
          All</button>
        <button
        onClick={()=>handleClick(1,"petrol")}  className={`z-10 text-xl sm:text-2xl  ${active ===1 ? "text-white":"text-black"}`}>
          Petrol</button>
          <button
        onClick={()=>handleClick(2,"diesel")}  className={`z-10 text-xl sm:text-2xl  ${active ===2 ? "text-white":"text-black"}`}>
          Diesel</button>
        <button
        onClick={()=>handleClick(3,"electric")}  className={`z-10 text-xl sm:text-2xl  ${active ===3 ? "text-white":"text-black"}`}>
          Electric</button>
        
    </div>
  )
}

export default PublicBtn