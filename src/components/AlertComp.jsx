import React from 'react'
import { Alert } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'

const AlertComp = ({msg, col, title}) => {
    const icon = <IconInfoCircle />
  return (
    <div className="fixed top-2 w-full z-50">
    <Alert variant="light" color={col} title={title} icon={icon} className='mx-auto w-[70%]'>
      <p className='text-white'>{msg}</p>
    </Alert>
    </div>
  )
}

export default AlertComp