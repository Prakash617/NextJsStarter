import React from 'react'
import {
    FaArrowRight

} from 'react-icons/fa';
import Btn from '../Reusable/Button/Btn';


type Props = {}

const NavDetail = (props: Props) => {
    return (
        <>
            <div className='w-[49.25rem] h-[24.25rem] mx-auto text-center  mt-8 p-3'>
                <div className='space-y-7'>
                    <p className='text-white text-lg'>We are next model in Nepal, a leading</p>
                    <p className='text-gold text-2xl font-bold'>MODEL MANAGEMENT,ENTERTAINMENT&COMMUNICATION</p>
                    <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='mt-12'>

                    <Btn text={'KNOW MORE ABOUT US'} icon={undefined} />
                </div>

            </div>
        </>
    )
}

export default NavDetail