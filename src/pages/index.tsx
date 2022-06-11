import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Yellow from '../components/Yellow/Yellow'
import Homes from '../components/Home'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
 <>
    <Yellow/>
    <Homes/>
    <Hero/>
    <p className='text-green-500'> this is parargraph</p>

 </>
  )
}

export default Home
