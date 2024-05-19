import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'


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
