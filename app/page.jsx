import Home from '@/Components/Home'
import Trending from '@/Components/Trending'
import React from 'react'
import FreeToWatch from '@/Components/freeToWatch'

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
