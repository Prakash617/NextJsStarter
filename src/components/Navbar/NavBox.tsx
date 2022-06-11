import React, { Children } from 'react'

type Props = {
    children:any
}

const NavBox = (props: Props) => {
  return (
    <>
    <div className='bg-blurBack w-full h-[34.25rem]  '>

        {props.children}

    </div>
    </>
  )
}

export default NavBox