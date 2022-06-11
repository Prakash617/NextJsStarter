import React from 'react'
import Nav from '../Navbar/Nav'
import Btn from '../Reusable/Button/Btn'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    FaShippingFast,
    FaFastForward
} from 'react-icons/fa';
import CarouselContainer from '../Reusable/Button/Carausal/CarouselContainer';

type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
            <Nav />

            <div className=' w-full h-[36.25rem] bg-black pt-14 pb-12 '>
                <div className='flex-col'>
                    <div  >
                        <p className='text-center text-4xl text-goldText ' > We Offer</p>
                    </div>
                    <div className='w-[56rem]  mx-auto my-6 p-2'>
                        <p className='text-center text-white' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur aut iste. Repellendus illo deleniti numquam, esse recusandae est nostrum sit, eum, quibusdam voluptates quae.</p>
                        <div className='flex space-x-4 mt-12 justify-center'>
                            {/* box */}
                            <div className='w-[15.25rem] h-[20.25rem] border-gold border-2  justify-center '>
                                <p className='font-bold text-2xl text-center mt-[6rem] text-goldText'>
                                    Event <br />
                                    Planning <br />
                                    &Management <br />
                                </p>
                            </div>
                            <div className='w-[15.25rem] h-[20.25rem] border-gold border-2  justify-center '>
                                <p className='font-bold text-2xl text-center mt-[6rem] text-goldText'>
                                    Event <br />
                                    Planning <br />
                                    &Management <br />
                                </p>
                            </div>
                            <div className='w-[15.25rem] h-[20.25rem] border-gold border-2  justify-center '>
                                <p className='font-bold text-2xl text-center mt-[6rem] text-goldText'>
                                    Event <br />
                                    Planning <br />
                                    &Management <br />
                                </p>
                            </div>
                            <div className='w-[15.25rem] h-[20.25rem] border-gold border-2  justify-center '>
                                <p className='font-bold text-2xl text-center mt-[6rem] text-goldText'>
                                    Event <br />
                                    Planning <br />
                                    &Management <br />
                                </p>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-slate-200 w-full pt-14 flex-col '>
                <div className='text-center'>
                    <p className='text-4xl text-goldText '>MODEL/TALENT MANAGEMENT</p>
                </div>
                <div className='px-[9rem] py-10 text-center'>
                    <p className=' text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing   sit amet consectetur adipisicing  elit. Necessitatibus expedita in, facilis nesciunt dolorem quod laborum commodi corporis incidunt ab reprehenderit? Illo quis itaque sint eum saepe voluptates ullam optio, laborum distinctio assumenda? Iusto cum quae nulla, provident inventore doloribus?
                    </p>
                    <div className='my-8'>

                        <Btn text={'Detail'} icon={< FaFastForward className='inline-block ml-3' />} />
                    </div>
                    <div className='flex justify-around'>

                        <div className='w-[19rem]'>
                            <CarouselContainer />
                        </div>

                        <div className='w-[19rem]'>
                            <CarouselContainer />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Homepage