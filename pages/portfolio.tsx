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
        name: 'SurveyMe',
        href: 'https://survey-me.vercel.app',
        description: 'A website for creating and gathering surveys on a topic.',
        imageSrc: '/media/survey-me.png',
        imageAlt: 'cant display image',
      },
      {
        id: 2,
        name: 'cfd360',
        href: 'https://cfd360.up.railway.app',
        description: 'A proof of concept investment based platform with high admin functionalities for verifying accounts, and user ability to make deposits and withdrawals.',
        imageSrc: '/media/cfd360.png',
        imageAlt: 'cant display image',
      },
      {
        id: 3,
        name: 'baggieblog',
        href: 'https://baggieblog.up.railway.app/',
        description: 'A blog application with full authentication abilities for posting and reading contents.',
        imageSrc: '/media/baggieblog.png',
        imageAlt: 'cant display image.',
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
              
            </p>
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
               

                <p className="text-sm">{product.description}</p>
                <a href={product.href} className="text-sm py-5 text-gray-500 bold">{product.href}</a>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>


      </div>
    )
  }
  
