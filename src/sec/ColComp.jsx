import React from 'react'


const ColComp=({car,setSelectedImage})=>{

  if(!car.imageVariant)return null;

  const variants=Array.isArray(car.imageVariant) ? car.imageVariant : Object.values(car.imageVariant)

  return (
    <div className='flex gap-2 p-3 '>
       {variants.map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={()=>setSelectedImage(img)}
          className="w-12 h-12 rounded-md cursor-pointer hover:scale-110 transition"
        />
      ))}

    </div>
  )
}
export default ColComp