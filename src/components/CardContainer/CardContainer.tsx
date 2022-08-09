import React from 'react'
import { Container } from 'react-bootstrap'
import NiceCard from './NiceCard'

type Props = {
    
}

const CardContainer = (props: Props) => {

    return (
        <>
            <Container className='grid grid-cols-1 xl:grid-cols-3 space-y-8 my-[6rem] space-x-4 place-content-center' >
                {/* <div>

                </div> */}
                <div className='md:mt-8 ml-4 mx-auto' >

                <NiceCard/>
                </div>

                <div className='mx-auto'>

                <NiceCard/>
                </div>

                <div className='mx-auto'>

                <NiceCard/>
                </div>
                
               
            </Container>
        </>
    )
}

export default CardContainer