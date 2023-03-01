// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

const Data = 

[
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



]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method=='GET'){
    res.status(200).json(Data)
   

  }else{
    console.log('Not GET')
  }
  
}
