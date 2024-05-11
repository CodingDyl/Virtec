import { Loader } from '@mantine/core'
import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='min-h-[40vh] flex flex-col mx-auto justify-center'>
        <div className='flex flex-col gap-6 justify-start text-center items-center'>
            <Loader size={50}  />
            <h1 className='hidden md:block text-3xl font-bold'>Loading...</h1>
        </div>
    </div>
  )
}

export default LoadingSkeleton