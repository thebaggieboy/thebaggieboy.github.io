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
              <motion.div initial={{y:-250}} animate={{y:-10}} transition={{delay:0.4, duration:0.8}} className="relative rounded-full px-3 p-2 text-sm text-center leading-5 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
               Learn more
                <a href="#about" className="font-semibold text-indigo-600 pl-2">
                  <span className="absolute inset-0 text-center" aria-hidden="true" />
                   about me <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.div>

            </div> 
            <div className="text-center mx-auto p-5">
              <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2, duration:0.6}} className="text-4xl  mt-1 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Software Engineer, Founder & Entrepreneur
              </motion.h1>
              <p className="mt-6 text-sm leading-6 text-gray-600">
              I am an innovative Software Engineer adept at working with customers, team members and project leaders to accomplish and update tasks according to timelines.
             
              </p> <br/>
              <motion.a href="../Resume.pdf" initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.5}} transition={{delay:0.8, duration:1.2}} className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700'>Check out my resume</motion.a>
              
            </div>
          </div>
       
        </div>
      </main>

  )
}


