const links = [
    { name: 'Frontend Development', href: '#' , description:"I build simple static and dynamic websites, sleek and attractive landing pages, e-commerce websites & other interesting frontend UI(User Interface). I also develop very efficient Single Page Applications using React & NEXTjs."},
    { name: 'Backend Development', href: '#' , description:"I build and maintain fast, scalable and efficient models used for building simple to robust backend systems infrastructure and APIS. Scripting of cache controllers and application load balancers to help balance traffic on servers."},
    { name: 'Scripting', href: '' , description:"I write scripts that scrape the internet, perform custom tasks as instructed and build bots to perform any task needed. This range from web scrapers & crawlers to custom data science tools written in python."},
    { name: 'Cloud Architecture', href:'', description: 'I make use of AWS to host & create cloud based infrastructure, i build secure and scalable cloud based application logic. I scale applications from regular shared hosting to cloud based hosting helping to save resources and build an efficient, modern hosting process.' },
  ]
  
  
  export default function About() {
    return (
     <main className=""> 


<div className="px-4  py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
    <div className="lg:w-1/2">
      <h2 className="max-w-md mb-6 font-sans text-3xl tracking-tight text-teal-600  sm:text-4xl sm:leading-none xl:max-w-lg">
      What i do ?
      </h2> 
      <p style={{fontFamily:"Helvetica Nue, sans-serif"}} className="text-base text-gray-400 text-sm ">
      I am Enimofe Odujirin, a fullstack developer and blockchain developer with 4 years of professional experience. I excel in creating high-performance, data-driven applications, including advanced geolocation systems. I have a knack for experimenting with APIs and database models to build efficient, scalable solutions. Additionally, 
      I specialize in creating beautiful visualization dashboards based on datasets and other data sources.
      </p>
    </div>
  
  </div> <br /><hr />
  <div className="grid gap-8 mt-5 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
        <img src="/media/web-design.png" style={{height:40}} alt="" />
      </div>
      <h6 className="mb-2 font-semibold leading-5 text-white">Frontend Development</h6>
      <p style={{fontFamily:"Helvetica Nue, sans-serif"}} className="mb-3 text-xs text-gray-400">
      I create static and dynamic websites, attractive landing pages, e-commerce sites, and other engaging front-end UIs.
       I also develop efficient single-page applications using React and NEXT.js.
      </p>
      <ul className="mb-4 -ml-1 space-y-2">
        <li className="flex items-start text-teal-600 text-xs ">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          NextJS / React
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Javascript
        </li>

        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          CSS
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Tailwind
        </li>
      </ul>

    </div>
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
      <img src="/media/backend.png" style={{height:40}} alt="" />
      </div>
      <h6 className="mb-2 font-semibold leading-5 text-white">Backend Development</h6>
      <p style={{fontFamily:"Helvetica Nue, sans-serif"}}  className="mb-3 text-xs text-gray-400">
      
I build and maintain fast, scalable backend systems and APIs. 
I also script cache controllers and load balancers to manage server traffic.


      </p>
      <ul className="mb-4 -ml-1 space-y-2">
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Django
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          FastApi
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Flask
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Node.js
        </li>
      </ul>

    </div>
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
      <img src="/media/coins.png" style={{height:40}} alt="" />
      </div>
      <h6 className="mb-2 font-semibold leading-5 text-white">Blockchain Development</h6>
      <p style={{fontFamily:"Helvetica Nue, sans-serif"}} className="mb-3 text-xs text-gray-400">
      
I specialize in blockchain development, crafting secure and efficient decentralized applications. From smart contracts to managing nodes.
      </p>
      <ul className="mb-4 -ml-1 space-y-2">
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Solidity
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Hardhat
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Thirdweb 
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Resevoir Sdk 
        </li>
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Ethers.js / Web3.js 
        </li>
      </ul>

    </div>
    <div>
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
      <img src="/media/computing.png" style={{height:40}} alt="" />
      </div>
      <h6 className="mb-2 font-semibold leading-5 text-white">Scripting</h6>
      <p style={{fontFamily:"Helvetica Nue, sans-serif"}} className="mb-3 text-xs text-gray-400">
      I write scripts that scrape the internet, perform custom tasks as instructed and build bots to perform any task needed. This range from web scrapers & crawlers to custom data science tools written in python.
      </p>
      <ul className="mb-4 -ml-1 space-y-2">
        <li className="flex items-start text-teal-600 text-xs">
          <span className="mr-1">
            <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </span>
          Python
        </li>
       
     
      </ul>

    </div>
  </div>
</div>

     </main>
    )
  }
  