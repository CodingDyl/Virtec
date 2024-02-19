import React from 'react'
import { DifferentCards } from '../components/DifferentCards'
import { styles } from '../styles'

const Content = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
          <p className={`${styles.sectionSubText} text-center`}>You may ask...</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold py-10">
              What makes us so different?
          </h1><DifferentCards />
    </div>
  )
}

export default Content