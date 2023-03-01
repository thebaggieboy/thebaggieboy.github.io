import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'


export default function Hero() {

  return (

      <main> 
        <br /> <br />
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20">
            <div className=" sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 text-sm text-center leading-5 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
               Learn more
                <a href="#about" className="font-semibold text-indigo-600 pl-2">
                  <span className="absolute inset-0 text-center" aria-hidden="true" />
                   about me <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> 
            <div className="text-center mx-auto p-5">
              <h1 className="text-4xl  mt-3 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Software Engineer, Founder & Entrepreneur
              </h1>
              <p className="mt-6 text-sm leading-6 text-gray-600">
              I am an innovative Software Engineer adept at working with customers, team members and project leaders to accomplish and update tasks according to timelines.
             
              </p> <br/>
              <a href="../Resume.pdf" className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700'>Check out my resume</a>
              
            </div>
          </div>
       
        </div>
      </main>

  )
}


