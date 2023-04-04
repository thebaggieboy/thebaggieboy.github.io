import React, { useState } from 'react'

export default function Contact() {
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [messageStatus, setMessageStatus] = useState(false);



    const submitForm = async(e)=>{
        e.preventDefault();

        await fetch('/api/contact', {
            method: "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                subject,
                message,
                messageStatus
            })
        })

        
    }


  return (
  
  <section className="bg-white text-black">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about a Business plan? Or rather would you like to hire me for a project? Let me know.</p>
      
      <form  className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
              <input type="email" name='email' onChange={e => setEmail(e.target.value)}  id="email" className="shadow-sm bg-gray-50 border p-3 rounded w-full border-gray-300 shadow-sm" placeholder="johndoe@mail.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">Subject</label>
              <input type="text" name='subject' onChange={e => setSubject(e.target.value)}  id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm " placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black ">Your message</label>
              <textarea id="message" name='message' onChange={e => setMessage(e.target.value)}  rows="6" className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm  text-sm text-black" placeholder="Leave a comment..."></textarea>
          </div>
          <button onClick={submitForm} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit">Send message</button>
      </form>
  </div>
</section>
 
  )
}
