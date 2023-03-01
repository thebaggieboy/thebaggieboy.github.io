import Image from "next/image"

  type Products ={
    id:number;
    name:string;
    href:string;
    description:string;
    imageSrc:string;
    imageAlt:string;

  }

  const products = [
    {
      id: 1,
      name: 'SurveyMe',
      href: 'https://survey-me.vercel.app',
      description: 'A website for creating and gathering surveys on a topic.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'cfd360',
      href: 'https://cfd360.com',
      description: 'Investment based platform with high admin functionalities.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'StringTok',
      href: 'https://stringtok.com',
      description: 'String and token generator, helps in generating random characters that can be used ass passwords or tokens',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
   
    // More products...
  ]
  
  
  export default function Portfolio({products}:Products) {
    
    return (
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
      
        
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Here are some projects i have worked on ..</h2>
            <p className="mt-6 text-sm leading-6 text-gray-600">
              You can explore from my list of past projects, some are still in development
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
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                <p className="text-sm">{product.description}</p>
                <a href="">{product.href}</a>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
      </div>



    )
  }
  