import React from 'react'
import Background from '../assets/images/car1.jpg'

function Home() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex place-items-center h-screen '>
        <h1 className='p-1 bg-red-600 bg-opacity-40 text-white rounded'>Welcome to Corey's Car Inventory</h1>
      </div>
    </div>
  )
}

export default Home
