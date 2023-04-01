const links = [
    { name: 'Frontend Development', href: '#' , description:"I build simple static and dynamic websites, sleek and attractive landing pages, e-commerce websites & other interesting frontend UI(User Interface). I also develop very efficient Single Page Applications using React & NEXTjs."},
    { name: 'Backend Development', href: '#' , description:"I build and maintain fast, scalable and efficient models used for building simple to robust backend systems infrastructure and APIS. Scripting of cache controllers and application load balancers to help balance traffic on servers."},
    { name: 'Scripting', href: '' , description:"I write scripts that scrape the internet, perform custom tasks as instructed and build bots to perform any task needed. This range from web scrapers & crawlers to custom data science tools written in python."},
    { name: 'Cloud Architecture', href:'', description: 'I make use of AWS to host & create cloud based infrastructure, i build secure and scalable cloud based application logic. I scale applications from regular shared hosting to cloud based hosting helping to save resources and build an efficient, modern hosting process.' },
  ]
  
  
  export default function About() {
    return (
     <main className="">
       <div className="relative  px-6 lg:px-8 isolate overflow-hidden">
      
      <div className="mx-auto p-10 max-w-7xl px-6 lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">What i do ?</h2>
        <div className="mx-auto max-w-2xl lg:mx-0">

          <p className="mt-3 text-sm leading-6 text-gray-800">
          I am Enimofe Odujirin, a fullstack developer and cloud architect with 4 years of professional experience based in Lagos, Nigeria. My expertise lies in building efficient, high-traffic data-driven applications, including geolocation systems, by experimenting with APIs and database models.


          </p> <br /><br />
         <div id="about" className="mx-auto ">
         <h2 className="text-3xl font-bold tracking-tight pt-4 text-black sm:text-6xl">About me</h2>
          <p className="mt-5 text-sm leading-6 text-gray-600">
          I am a skilled fullstack web developer with experience in solving complex problems through live functional applications. My expertise includes a range of technologies such as Python, Flask, Django, ReactJS, Postgresql, tailwindcss, chakraui, and bootstrap. I am confident in my ability to produce efficient code and applications, and to create innovative solutions using a variety of front-end and back-end technologies.

         </p>
         </div>
        </div><br/>
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
     </main>
    )
  }
  