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
          id: 5,
          name: 'Altclan',
          href: 'https://altclan.com/',
          description: 'A community of aesthetics and a fashion focused e-commerce app looking to connect people of all sub cultures and non-comformities. ',
          imageSrc: '/media/altclan-sc.png',
          imageAlt: 'cant display image',
          stack:"Django, Django Rest Framewotk, Nextjs, Typescript, Tailwind"
        },
        {
          id: 4,
          name: 'Exodox',
          href: 'https://exodox.onrender.com/',
          description: 'An ecommerce web app for shopping a variety of items belonging to the brand Exodox. ',
          imageSrc: '/media/exodox.png',
          imageAlt: 'cant display image',
          stack:"Django, HTML, CSS, JS"
        },
      {
        id: 1,
        name: 'QRCode Generator',
        href: 'https://qrcode-generator-zeta.vercel.app/',
        description: 'A webapp for quickly generating and saving QR codes for URLS. ',
        imageSrc: '/media/qr.png',
        imageAlt: 'cant display image',
        stack:"vanilla js, HTML, QRcode API"
      },
     
      {
        id: 3,
        name: 'baggieblog',
        href: 'https://blog-xkc3.onrender.com',
        description: 'A blog application with full authentication abilities and a WYSIWYG markdown editor for posting and reading contents posted by users.',
        imageSrc: '/media/baggieblog.png',
        imageAlt: 'cant display image.',
        stack:"HTML, Bootstrap, FlASK, SQLAlchemy, PostgreSQL"
      },
    
     
      // More products...
    ]
      
  const [data, setData] = useState([]);
  console.log(products)

    return (
      
      <div className="relative isolate overflow-hidden  py-12 sm:py-32" style={{lineHeight: "100%", letterSpacing: 1, fontFamily: "Poppins, sans-serif"}}>
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Portfolio</h2>
            <p className="mt-6 text-xs leading-6 text-gray-600">
             
              Here are some of the projects I have worked on in the past, you can check out the URLs
              You can also access my github repository to see more of my codes and non-visual projects by clicking the button below
            </p>
            <br/>
            <a href="https://github.com/thebaggieboy" className="inline-flex rounded-lg text-xs py-3 px-4  bg-teal-900 font-bold text-white hover:bg-slate-500"> Go to my Github</a>
          </div>
         
        </div>

     

        <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Projects</h2>

        <div className="grid  p-2 grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
             
                <img
                style={{height:160, }}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover  group-hover:opacity-75"
                />

              <h2 className="mt-4 text-lg text-white font-bold">{product.name}</h2>
              <p className="mt-1 text-xs text-gray-400">
               
                <p className="lead text-xs font-semibold" >{product.description}</p>

                <p className="text-xs py-5 text-gray-500 bold">Tech Stack: {product.stack}</p>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>


      </div>
    )
  }
  
