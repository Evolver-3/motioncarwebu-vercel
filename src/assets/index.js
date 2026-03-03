
import redM2 from './M2model/RedM2.avif'
import blackM2 from './M2model/blackM2.avif'
import grayM2 from './M2model/grayM2.avif'
import lightM2 from './M2model/GreyM2.avif'
import BlueM2 from './M2model/BlueM2.avif'

import sapphire from './7Series/7sapphire.avif'
import white from './7Series/7white.avif'
import blue from './7Series/7blue.avif'
import Gray from './7Series/7Gray.avif'
import grey from './7Series/7grey.avif'

import M5 from './M5.webp'


import wall1 from './wallpaper/wallOne.jpg'
import wall2 from './wallpaper/wallTwo.jpg'
import wall3 from './wallpaper/wallThree.jpg'
import wall4 from './wallpaper/wallFour.jpg'
import wall5 from './wallpaper/wall5.jpg'
import wall6 from './wallpaper/wall6.jpg'
import wall7 from './wallpaper/wall7.jpg'
import wall8 from './wallpaper/wall8.jpg'
import wall9 from './wallpaper/wall9.jpg'
import wall10 from './wallpaper/wall10.jpg'
import wall11 from './wallpaper/wall11.jpg'
import wall12 from './wallpaper/wall12.jpg'


import sign from './signBmw.webp'
import logo from './Bmwlogo.svg'

import ele1 from './Ele/electric1.webp'

import ele2 from './Ele/car2/Gray.webp'
import blueele from './Ele/car2/blue.webp'
import redele from './Ele/car2/crimson.webp'
import greyele from './Ele/car2/grey.webp'
import metalele from './Ele/car2/metallic.webp'
import trans from './Ele/car2/Transparent.webp'
import whiteele from './Ele/car2/white.webp'





export const assets={
  redM2,blackM2,grayM2,lightM2,BlueM2,M5,sapphire,white,blue,Gray,grey,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,sign,logo,ele1,ele2,blueele,redele,greyele,metalele,trans,whiteele,
}



export const carItems=[
  { 
    id:1,
    image:assets.redM2,
    imageVariant:[
      assets.redM2,
      assets.BlueM2,
      assets.grayM2,
      assets.lightM2,
      assets.blackM2
    ],
    model:"M2 series",
    specs:{
      price:"₹1.03Cr",
      Fuel:"Petrol",
      engine:"2993 cc",
      mileage:"10.13 km/l",
      capacity:"4",
      body:"Convertible"
    }
   },
   { 
    id:2,
    image:assets.M5,
    model:"M5 xDrive",
    specs:{
      price:"₹1.99 Cr",
      Fuel:"Petrol",
      engine:"4395 cc",
      mileage:"9.1 km/l",
      capacity:"5",
      body:"Sedan"
    }
  },
   { 
    id:3,
    image:assets.sapphire,
    imageVariant:[
      assets.sapphire,
      assets.white,
      assets.blue,
      assets.Gray,
      assets.grey
   ],
    model:"7 Series",
    specs:{
      price:"₹1.81 Cr",
      Fuel:"Diesel",
      engine:"2998 cc",
      mileage:"12.61 km/l",
      capacity:"5",
      body:"Sedan"
    }
  },
  { 
    id:4,
    image:assets.ele1,
    model:"i5 M60 xDrive",
    specs:{
      Price:"₹1.26 Crore",
      Fuel:"Electric",
      Power:"600 hp",
      Torque:"795 Nm",
      Range:"455-516km",
      Battery:"83 kWh",
      Charging:"205 kW DC",
      Capacity:"5",
      body:"Sedan"
    }
   },
   { 
    id:5,
    image:assets.ele2,
    model:"iX xDrive50",
    imageVariant:[
      assets.ele2,assets.blueele,assets.redele,assets.greyele,assets.metalele,assets.trans,assets.whiteele
    ],
    specs:{
      Price:"₹1.28 Crore",
      Fuel:"Electric",
      Torque:"795 Nm",
      Range:"455-516km",
      Battery:"76 kWh",
      Charging:"205 kW DC",
      Capacity:"5",
      body:"Sedan"
    }
   },
]
