import React from 'react'
import {
  FaBeer,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube

} from 'react-icons/fa';
import NavBox from './NavBox';
import NavDetail from './NavDetail';
type Props = {}

const Nav = (props: Props) => {
  return (
    <>

      <NavBox >


        <div className=' w-[71rem] h-[9.25rem] flex mx-auto '>

          <div>
            <img src="logo192.png" alt="logo192" className='w-[9.25rem] h-[9.25rem]' />
          </div>
          <div className='my-auto ml-4' >
            <ul className='flex space-x-4 '>
              <li className='text-gold'>Home</li>
              <li className='text-gold'>Know Us</li>
              <li className='text-gold'>We Offer</li>
              <li className='text-gold'>Portfolios</li>
              <li className='text-gold'>Appy for Designers Runway</li>
              <li className='text-gold'>Testimonials</li>
              <li className='text-gold'>Blog</li>
              <li className='text-gold'>Contact</li>

            </ul>
          </div>

          <div className='ml-[3rem] my-auto'>
            <ul className='flex space-x-2'>
              <li><FaFacebook className='h-6 w-6 text-gold' /></li>
              <li><FaTwitter className='h-6 w-6 text-gold' /></li>
              <li><FaInstagram className='h-6 w-6 text-gold' /></li>
              <li><FaYoutube className='h-6 w-6 text-gold' /></li>

            </ul>
          </div>
        </div>
        <NavDetail/>


      </NavBox>




    </>
  )
}

export default Nav