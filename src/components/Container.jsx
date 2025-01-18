import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full md:w-[720px] lg:w-[1100px] mx-auto'>
        {children}
    </div>
  )
}

export default Container;