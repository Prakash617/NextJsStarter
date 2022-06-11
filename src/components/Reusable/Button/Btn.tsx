import React from 'react'
import { IconBase } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa'

type Props = {
    text:string
    icon:any
}

const Btn = (props: Props) => {
  return (
    <>
        <div className='bg-black inline-block mx-auto  p-2 rounded-md cursor-pointer'>
            <span className='text-gold text-bold my-auto p-3'>{props.text}{props.icon}</span>
            {/* <span className='text-gold text-bold my-auto p-3'><FaArrowRight className='inline-block ml-3'/></span> */}
            
        </div>
    </>
  )
}

export default Btn