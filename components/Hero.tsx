import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function Hero() {

  return (

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
               Would you like to checkout my latest article? 
                <a href="https://baggieblog.up.railway.app/" className="font-semibold text-indigo-600 pl-2">
                  <span className="absolute inset-0 " aria-hidden="true" />
                   Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center mx-auto p-5">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
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


