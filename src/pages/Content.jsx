import React from 'react'
import { DifferentCards } from '../components/DifferentCards'
import { styles } from '../styles'
import { InfiniteMovingCardsMain } from '../components/InfiniteMovingCardsMain'

const Content = () => {
  return (
    <>
    <span id='why'>
            &nbsp;  
    </span>
    <div className='py-0 flex flex-col justify-center items-center'>
          <p className={`${styles.sectionSubText} text-center`}>You may ask...</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold py-10">
              What makes us so different?
          </h1>
          <DifferentCards />

          <InfiniteMovingCardsMain />
    </div>
    </>
  )
}

export default Content