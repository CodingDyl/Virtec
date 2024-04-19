import { Loader } from '@mantine/core'
import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='min-h-[40vh] flex flex-col mx-auto justify-center'>
        <div className='flex justify-around'>
            <h1 className='text-3xl font-bold'>Loading...</h1>
            <Loader size={50}  />
        </div>
    </div>
  )
}

export default LoadingSkeleton