import React from 'react'
import { assets } from '../assets/asset'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 bg-[#393E41] overflow-x-hidden">
        <div>
<img src={assets.footer_image} alt="" />
        </div>
        <div>
            <ContactForm/>
        </div>
        </div>
  )
}

export default Contact