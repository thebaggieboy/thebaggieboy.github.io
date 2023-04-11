import Image from "next/image"
import { useState } from "react"
  

type Products ={
  id:number;
  name:string;
  href:string;
  description:string;
  imageSrc:string;
  imageAlt:string;

}

  export default function Portfolio({products}:any) {
      products = [
      {
        id: 1,
        name: 'QRCode Generator',
        href: 'https://qrcode-generator-zeta.vercel.app/',
        description: 'A webapp for generating and saving QR codes for URLS. ',
        imageSrc: '/media/qr.png',
        imageAlt: 'cant display image',
        stack:"vanilla js, HTML, QRcode API (pa11y)"
      },
      {
        id: 2,
        name: 'cfd360',
        href: 'https://cfd360-k5mt.onrender.com',
        description: 'An investment based platform with high admin functionalities for verifying accounts, and user ability to make crypto deposits and withdrawals.',
        imageSrc: '/media/cfd360.png',
        imageAlt: 'cant display image',
        stack:"HTML, CSS, JS, Bootstrap, Django, postgresql"
      },
      {
        id: 3,
        name: 'baggieblog',
        href: 'https://baggieblog.onrender.com',
        description: 'A blog application with full authentication abilities and a WYSIWYG markdown editor for posting and reading contents posted by users.',
        imageSrc: '/media/baggieblog.png',
        imageAlt: 'cant display image.',
        stack:"HTML, Bootstrap, FlASK, SQLAlchemy, SQLite"
      },
    
     
      // More products...
    ]
      
  const [data, setData] = useState([]);
  console.log(products)

    return (
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
      
        
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Here are some projects i have worked on</h2>
            <p className="mt-6 text-sm leading-6 text-gray-600">
              You can explore from my list of past projects, my portfolio majorly consists of live web apps, and other custom scripted programs like automation bots, web crawlers, IP location finder, CSV file sorting etc.
              <br />
              You can access my github repository by clicking the button below
            </p>
            
            <a href="" className="p-2 text-white bg-dark rounded"> Go to my github</a>
          </div>
         
        </div>




        <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 text-lg text-gray-700">{product.name}</h2>
              <p className="mt-1 text-md font-medium text-gray-900">
               
                <p className="lead font-semibold">{product.description}</p>

                <p className="text-sm py-5 text-gray-500 bold">Tech Stack: {product.stack}</p>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>


      </div>
    )
  }
  
