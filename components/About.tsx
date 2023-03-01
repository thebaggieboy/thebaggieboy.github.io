const links = [
    { name: 'Frontend Development', href: '#' , description:"I build simple static and dynamic websites, sleek and attractive landing pages, e-commerce websites & other interesting frontend UI(User Interface). I build fast and efficient Single Page Applications using React & NEXTjs."},
    { name: 'Backend Development', href: '#' , description:"I build and maintain fast, scalable and efficient models used for building simple to robust backend systems infrastructure and APIS. Scripting of cache controllers and application load balancers to help balance traffic on servers."},
    { name: 'Scripting', href: '' , description:"I write scripts that scrape the internet, perform custom tasks as instructed and build bots to perform any task needed. This range from web scrapers & crawlers to custom data science tools written in python"},
    { name: 'Cloud Architecture', href:'', description: 'I make use of AWS to host & create cloud based infrastructure, i build secure and scalable cloud based application logic. I scale applications from regular shared hosting to cloud based hosting helping to save resources and build an efficient, modern hosting process.' },
  ]
  
  
  export default function About() {
    return (
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
      
        
      
        <div className="mx-auto p-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">What i do ?</h2>
            <p className="mt-6 text-sm leading-6 text-gray-800">
            My name is <b className="text-bold text-underline">Enimofe Odujirin</b> and i am a lover of innovation & technology, I am a Fullstack Developer & Cloud Architect based in Lagos, Nigeria. I am skilled in working with wide range of front and back-end technologies to produce and evaluate functional and efficient code, applications. Currently i am experimenting with APIS and database models, looking towards improving my efficiency in building fast data-driven applications like geolocation systems and other intensive data driven applications.


            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-6 leading-6 text-dark sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name}  href={link.href}>
           <h1 className="font-bold">{link.name} <span aria-hidden="true">&rarr;</span></h1> <br/>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    )
  }
  