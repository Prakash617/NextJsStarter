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
        <button className='bg-blue-500 inline-block mx-auto ease-in-out duration-300 text-white  p-1 px-6 rounded-full border-2 border-blue-500  cursor-pointer hover:text-green-500'>
            <span className=' text-bold my-auto p-3'>{props.text}{props.icon}</span>
            
        </button>
    </>
  )
}

export default Btn