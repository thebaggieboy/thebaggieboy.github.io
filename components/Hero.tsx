import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


export default function Hero() {

  return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
      <div className="max-w-xl mb-6">
        <div>
          <p style={{fontFamily:"Helvetica Nue, sans-serif"}} className="inline-block px-3 py-px mb-4 text-sm font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Software Engineer & Fullstack Developer
          </p>
        </div>
        <h2  style={{fontFamily:"Helvetica Nue, sans-serif"}} className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
        If you can imagine it, I can make it <span className='text-teal-700 font-bold'>real</span>.
       
        </h2>
        <p  style={{fontFamily:"Poppins, sans-serif"}} className="text-base text-gray-500 md:text-sm">
       



As a skilled software engineer specializing in full-stack development, I have a proven track record of building robust, scalable applications. I am passionate about leveraging my technical expertise to deliver innovative solutions and drive project success.



        </p>
      </div>
      <div className="flex items-center space-x-3">
        <a href="/Resume-Enimofe-Odujirin.pdf" className="w-32 transition duration-300 text-xs bg-teal-900  p-2 rounded-sm text-sm text-center text-white font-light hover:shadow-lg">
             My resume
        </a>
        <a href="/contact" className="w-32 transition duration-300 text-xs bg-teal-900  p-2 rounded-sm text-sm text-center text-white font-light hover:shadow-lg">
          Contact for hire
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center lg:w-2/4">
      <div className="w-6/12">
        <img className="object-cover" src="/media/front-view.jpg" alt="" />
      </div>
  
    </div>
  </div>
  <a
    href="/"
    aria-label="Scroll down"
    className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
    </svg>
  </a>
</div>
  )
}


