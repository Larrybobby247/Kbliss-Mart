import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-20 flex flex-col items-center gap-8 bg-light py-8 px-4 lg:px-16'>
      <img src={Logo} alt="" className='w-26 lg:w-32'/>
      <ul className="flex flex-col text-center lg:flex-row gap-6 lg:gap-12 font-medium text-lg">
            <li>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Contact Us
          </Link>
        </li>
        </ul>
        <hr className='border-grey'/>
        <p>© 2026 Kbliss Mart, All rights reserved</p>
    </div>
  )
}

export default Footer
