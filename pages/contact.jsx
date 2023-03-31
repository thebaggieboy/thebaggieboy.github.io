import React from 'react'

export default function Contact() {
    


  return (
  
  <section className="bg-white text-black">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about a Business plan? Let us know.</p>
      <form  className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
              <input type="email"  id="email" className="shadow-sm bg-gray-50 border p-3 rounded w-full border-gray-300 shadow-sm" placeholder="johndoe@mail.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm " placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black ">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm  text-sm text-black" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit">Send message</button>
      </form>
  </div>
</section>
 
  )
}
