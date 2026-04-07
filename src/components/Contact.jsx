import { faEnvelope, faLocation, faLocationDot, faMailReply, faPhone, faStopwatch, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Img from '../assets/cat-4.jpg'
import { fa11ty, faFacebook, faFacebookF, faInstagram, faTiktok, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='flex flex-col gap-8 lg:flex-row lg:justify-between items-center' id='contact-us'>
      <div className='w-full lg:w-full'>
        <img src={Img} alt="" className='h-[420px] w-full object-cover rounded-sm'/>
      </div>
      <div className='flex flex-col gap-3 ' data-aos="fade-left">
        <h3 className='text-xl font-medium'>Get In Touch</h3>
        <h1 className='text-3xl font-bold'>To Enjoy Seamless Response, <br />Give Us a Call Now!</h1>
        <p className='text-lg text-grey'>Have questions about our latest arrivals or your order? We’re just a message away. Reach out to us for enquiries and nationwide delivery.</p>
        <div className='grid  md:grid-cols-2 gap-4'>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faPhone} className='text-2xl text-primary '/>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Call Us</h3>
                    <p>+234 905 556 6878</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faLocationDot} className='text-2xl text-primary'/>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Address</h3>
                    <p>Based in Ibadan, Nigeria</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faStopwatch} className='text-2xl text-primary'/>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Working Days</h3>
                    <p>Mon - Sat</p>
                </div>
            </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4 text-primary'>Follow Us On</h2>
          <div className='flex gap-4'>
            <a href="https://www.instagram.com/kblissmart/"><FontAwesomeIcon icon={faInstagram} className='text-2xl text-white bg-primary p-3 rounded-full'/></a>
            <a href="https://www.facebook.com/61583589227329/"><FontAwesomeIcon icon={faFacebookF} className='text-2xl text-white bg-primary p-3 rounded-full'/></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
