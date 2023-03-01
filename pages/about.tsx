const links = [
    { name: 'Frontend Development', href: '#' , description:"I build simple, sleek and attractive landing pages, e-commerce websites & other interesting frontend UI."},
    { name: 'Backend Development', href: '#' , description:"I build and maintain fast, scalable, efficient models needed for building simple to robust backend systems and APIS"},
    { name: 'Scripting', href: '' , description:"I write scripts that scrape the internet, perform custom tasks as instructed and build bots to perform any task needed. "},
    { name: 'Cloud Architecture', href:'', description: 'I make use of AWS to host & create cloud based infrastructure, i build secure and scalable cloud based application logic' },
  ]
  
  
  export default function about() {
    return (
      
    <div className="p-10"> <br />
              <div className="container">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Me
              </h1> <br /> <hr />
              <p className="mt-2 text-sm leading-7 text-gray-600">
              Hey there, I am Enimofe Odujirin lover of innovation & technology. I am a Fullstack web developer, Cloud Architect and Entrepreneur.
             I enjoy creating solutions to existing problems and also have a huge passion for turning raw ideas into executable
              and functional live applications.
             I have about five ( 5 ) years experience in web programming and fullstack development, i started my tech career by learning python and how to create scripts for performing certain tasks. 
             This helped me to grasp a strong understanding of programming as i was not limited to just the design aspects of the web(HTML, CSS, JS). After my basic knowledge in creating static websites using HTML & CSS, i scaled started creating dynamic websites using server-side code like PHP or python. 
             Now with  a very solid understanding og backend code and technologies, i improved my knowledge and efficiency by introducing my self to web frameworks like flask and django which optimised an MVC approach and helped create a solid understanding of the relation between database models, views and urls when creating a fullstack application.
              Some of the major stacks i use in developing programs and web apps are Python, Flask, celery, ReactJS and NextJS, postgresql, 
             Django, DRF (Django Rest Framework), tailwindcss, chakraui, bootstrap and other interesting frontend and backend libraries / frameworks. 
              </p> <br/>
             
              </div>
             
            
            </div>
     
    )
  }
  