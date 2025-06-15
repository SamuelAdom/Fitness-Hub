import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-center bg-black text-white'>
     <p className="text-center text-sm md:text-lg">
  &copy; {new Date().getFullYear()} Samuel | All rights reserved.
</p>

    </div>
  )
}

export default Footer