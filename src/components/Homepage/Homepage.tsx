import React from 'react'


import {
    FaShippingFast,
    FaFastForward
} from 'react-icons/fa';
import NavBar from '../Navbar/NavBar'

import CarouselContainer from '../Carausel/MainCarausel';
import CardContainer from '../CardContainer/CardContainer';
import Ourteam from '../Ourteam/Ourteam';
import OurStaitic from '../Our Statistic/OurStaitic';


type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
          
        <NavBar></NavBar>
        <div className=''>

        <CarouselContainer/>
        </div>
        <div>
        <CardContainer />
        </div>
        <div>
        <Ourteam/>
        </div>
        <div>
            <OurStaitic/>
        </div>
        <div className='w-full bg-red-500 h-14 my-5 '>
            <div className='flex justify-center items-center'>
                <div >

                    <p className='text-2xl text-white font-bold mt-2 hover:text-green-400 cursor-pointer '>Welcome home</p>
                </div>

            </div>

        </div>
          
        </>
    )
}

export default Homepage