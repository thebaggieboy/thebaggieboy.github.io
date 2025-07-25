import { useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Shop Merch', href: 'https://thebaggieboy.store/' },

  { name: 'Contact', href: '/contact' },
  //{ name: 'Blog', href: 'https://baggieblog.onrender.com' },
]


export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate" style={{backgroundColor:"#14213d", color:'white'}}>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      
      </div>
      <div className="px-4 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-2.5">
              <span className="font-bold text-lg"><Link href={'/'}>Thebaggieboy</Link></span>
              
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-light leading-8 text-white hover:text-teal-600">
                <Link href={item.href}>{item.name}</Link>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/My-resume.pdf" className="text-xs font-semibold leading-4 rounded p-3 bg-teal-900">
             View my resume <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} >
          <Dialog.Panel  style={{backgroundColor:"#14213d", color:'white'}} className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="font-bold">Thebaggieboy</span>
               
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-light leading-7 text-white hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
             
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      
    </div>
  )
}