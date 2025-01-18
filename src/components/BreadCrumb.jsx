import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({currentPage}) => {
  return (
    <div className='flex gap-2 px-5 md:px-0 mb-5'>
        <Link to={"/"} className='text-gray-500'>Home</Link>
        <p>/</p>
        <Link>{currentPage}</Link>
    </div>
  )
}

export default BreadCrumb