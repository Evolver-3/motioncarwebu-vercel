import React from 'react'

const InfoComp = ({ car }) => {
  return (
    <div className=" space-y-2 space-x-1 grid grid-cols-2 ">
      {Object.entries(car.specs).map(([key, value]) => (
        
          <div className='bg-white flex items-center justify-center  rounded-md w-40 h-10 mx-2 ' key={key}>
          <span className="font-semibold capitalize">{key}:</span>
          <span>{value}</span>
          </div>
       
      ))}
    </div>
  )
}

export default InfoComp