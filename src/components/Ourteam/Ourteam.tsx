import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebook, FaGooglePlusG, FaLinkedin, FaTwitter } from 'react-icons/fa'

type Props = {}

const Ourteam = (props: Props) => {

  // const photos = {:'team1.jpg', 'team2.jpg', 'team3.jpg', 'team4.jpg', , 'team5.jpg', , 'team6.jpg', 'team7.jpg'}4
  const photos = [
    {
      name: "Prkash Thapa",
      file_location: "/Image/team/team1.jpg",
      profession: "cheif programmer"
    },
    {
      name: "rakesh Thapa",
      file_location: "/Image/team/team2.jpg",
      profession: "cheif programmer"
    },
    {
      name: "Niru Thapa",
      file_location: "/Image/team/team3.jpg",
      profession: "cheif programmer"
    },
    {
      name: "niraj Thapa",
      file_location: "/Image/team/team4.jpg",
      profession: "cheif programmer"
    },
    {
      name: "Salika Thapa",
      file_location: "/Image/team/team5.jpg",
      profession: "cheif programmer"
    },
    {
      name: "Mona Thapa",
      file_location: "/Image/team/team6.jpg",
      profession: "cheif programmer"
    },
    {
      name: "Natasa Thapa",
      file_location: "/Image/team/team7.jpg",
      profession: "cheif programmer"
    }
  ]
  return (
    <div className='m-4 my-[12rem]'>
      <Container>

        <div className='grid gap-x-[1rem] gap-y-[1rem]  grid-cols-2  md:grid-cols-4 '>


          <div className=' '>
            <div>
              <p className='text-4xl bold'>OUR TEAM</p>
              <p className='text-lg'>We are professional</p>
              <p className='text-sm text-gray-400'>The rest of the story is about our values, our people, our passion and our way of running a business.</p>
            </div>
          </div>

          {/* className= {` bg-[url(/Image/team/${photo.file_location})] bg-fit `} */}
          {photos.map((photo, i) => {
            return (

              <div key={i} className='bg-cover w-full ' style={{ backgroundImage: `url(${photo.file_location})` }}  >


                <div className='text-center flex-col justify-center w-full h-[17rem] opacity-[0.00] ease-in duration-300  bg-black hover:opacity-75'>
                  <div className='pt-5'>

                    <p className='Italic text-white text-2xl'>{photo.name}</p>
                  </div>
                  <div>
                    <p className='Text-sm text text-white '>{photo.profession}</p>
                  </div>
                  <div className='h-1 w-8 bg-white mx-auto mb-3'></div>
                  <div className='flex space-x-4 justify-center'>
                    <div className=''>

                    <FaGooglePlusG className='w-8 h-8 text-white hover:w-10 hover:h-10' />
                    </div>
                    <div>

                    <FaFacebook className='w-8 h-8 text-white hover:w-10 hover:h-10' />
                    </div>
                    <div>

                    <FaTwitter className='w-8 h-8 text-white hover:w-10 hover:h-10' />
                    </div>
                    <div>

                    <FaLinkedin className='w-8 h-8 text-white hover:w-10 hover:h-10' />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}




        </div>
      </Container>
    </div>
  )
}

export default Ourteam