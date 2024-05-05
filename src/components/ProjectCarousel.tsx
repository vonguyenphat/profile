"use client"
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import GithubIcon from "../../public/github-icon.svg";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
   type CarouselApi,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'


export default function ProjectCarousel() {
   const [api, setApi] = useState<CarouselApi>()
   const [current, setCurrent] = useState(0)
   const [count, setCount] = useState(0)
   useEffect(() => {
      if (!api) {
         return
      }
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on("select", () => {
         setCurrent(api.selectedScrollSnap() + 1)
      })
   }, [api])


   return (
      <div className='flex flex-col items-center w-full '>
         <Carousel
            setApi={setApi}
            opts={{
               align: "center",
            }}
            className="w-[100%] sm:w-[90%]"
         >
            <CarouselContent>
               {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={`index ${index}`} className="md:basis-1/2 lg:basis-1/3 ">
                     <div className="">
                        <Card className='border-none bg-[#181818] '>
                           <CardContent className="flex  items-center justify-center p-0">
                              <div >
                                 <Image src={project.image} alt="hero image"
                                    quality={100}
                                    width={500} height={100}
                                 />
                                 <div className='p-[24px]'>
                                    <Link href="/#detail" className='text-white font-[560]'>{project.title}</Link>
                                    <div className='flex gap-[10px] mt-[10px]'>
                                       {
                                          project.technology.map((item, index) => (
                                             <div key={index} className=''>
                                                <span className='flex gap-x-[3px]'>
                                                   <Image src={item.icons} alt="hero image"
                                                      quality={100}
                                                      width={15} height={10}
                                                   />
                                                   <span className='text-white text-[11px]'>{item.description}</span>
                                                </span>
                                             </div>
                                          ))
                                       }
                                    </div>
                                    <p className="text-[#ADB7BE] mt-[20px] text-[13px] sm:text-lg mb-6 lg:text-[14px] text-left">{project.description}</p>
                                    <div className='text-white flex gap-[10px] text-[13px] font-[530]'>
                                       <Link href={project.sourceCode} rel="noopener noreferrer" target="_blank" className='flex bg-[#8200fc] p-[5px] sm:p-[12px] rounded-[8px] items-center'>
                                          <p>Go to source code &nbsp;</p>
                                          <Image
                                             src={GithubIcon}
                                             alt="Github Icon"
                                             className='w-[25px]'
                                          />
                                       </Link>
                                       <Link href="/#detail" className='bg-[#c8b037] p-[8px] sm:p-[12px] rounded-[8px] flex items-center'>
                                          Preview
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent >
            {/* <CarouselPrevious className='invisible sm:visible text-white bg-[#8200fc] border-none' />
            <CarouselNext className='invisible sm:visible text-white bg-[#8200fc] border-none' /> */}
         </Carousel>
         <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
         </div>
      </div>
   )
}


const projects = [
   {
      image: '/images/image_project_e_commerce.jpeg',
      title: 'Multilingual Online Shopping Website Built With ReactJS and NodeJs',
      technology: [
         {
            description: 'ReactJS',
            icons: '/images/react_icon.png'
         },
         {
            description: 'HTML',
            icons: '/images/html_icon.png'
         }
      ],
      description: 'I have developed a multilingual E-commerce website that allows customers to shop online for consumer products. The website is built using ReactJS for the user interface and NodeJS for the backend',
      sourceCode: 'https://github.com/vonguyenphat',
      preview: '#'
   },
   {
      image: '/images/image_project_e_commerce.jpeg',
      title: 'Multilingual Online Shopping Website Built With ReactJS and NodeJs',
      technology: [
         {
            description: 'ReactJS',
            icons: '/images/react_icon.png'
         },
         {
            description: 'HTML',
            icons: '/images/html_icon.png'
         }
      ],
      description: 'I have developed a multilingual E-commerce website that allows customers to shop online for consumer products. The website is built using ReactJS for the user interface and NodeJS for the backend',
      sourceCode: 'https://github.com/vonguyenphat',
      preview: '#'
   }
]

const project = {
   image: '/images/image_project_e_commerce.jpeg',
   title: 'Multilingual Online Shopping Website Built With ReactJS and NodeJs',
   technology: [
      {
         description: 'ReactJS',
         icons: '/images/react_icon.png'
      },
      {
         description: 'HTML',
         icons: '/images/html_icon.png'
      }
   ],
   description: 'I have developed a multilingual E-commerce website that allows customers to shop online for consumer products. The website is built using ReactJS for the user interface and NodeJS for the backend',
   sourceCode: 'https://github.com/vonguyenphat',
   preview: '#'
}