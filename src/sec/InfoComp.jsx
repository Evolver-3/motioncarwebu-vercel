import React from 'react'

const InfoComp = ({ car }) => {
  return (
    <div className="p-4 space-y-2">
      {Object.entries(car.specs).map(([key, value]) => (
        <p key={key}>
          <span className="font-semibold capitalize">{key}:</span> {value}
        </p>
      ))}
    </div>
  )
}

export default InfoComp