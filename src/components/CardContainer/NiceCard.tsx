import React from 'react'
import { Container } from 'react-bootstrap'

type Props = {}

const NiceCard = (props: Props) => {
  return (
    <>
   
      <div className='w-[25rem] h-[16rem] bg-gray-200 relative'>
        <div className='inline-block rounded-full bg-white absolute items-center h-[6rem] w-[6rem] top-[-2.5rem] right-[10rem] '>
          <img src="/Image/s1.png" className='ml-6 mt-4 hover: hover:w-[3rem] ease-in duration-300' alt="something" />
        </div>
        <div className='text-center p-1'>

          <h1 className='text-2xl font-semibold pt-[4rem]'>Comprehensive Syllabus</h1>
          <p className='text-gray text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus sollicitudin nunc nec rhoncus.</p>
        </div>
      </div>
      
    </>
  )
}

export default NiceCard