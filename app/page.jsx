import Home from '@/Components/Home.jsx'
import Trending from '@/Components/Trending.jsx'
import React from 'react'
import FreeToWatch from '@/Components/FreeToWatch.jsx'

const page = () => {
  return (
    <div className='md:px-28 w-full flex flex-col gap-4'>
      <Home/>
      <Trending/>
      <FreeToWatch/>
    </div>
  )
}

export default page
