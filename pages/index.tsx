import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import About from '@/components/About'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div style={{backgroundColor:"#14213d"}}>
    <Hero/>
    <About/>

    </div>
  

    </>
  )
}
