"use client"
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
   type CarouselApi,
} from "@/components/ui/carousel"


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
      <div>
         <Carousel
            setApi={setApi}
            opts={{
               align: "center",
            }}
            className="w-full max-w-sm"
         >
            <CarouselContent>
               {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                     <div className="">
                        <Card className='border-none bg-[#181818]'>
                           <CardContent className="flex aspect-square items-center justify-center p-0">
                              <span className="text-3xl font-semibold text-white">{index + 1}</span>
                           </CardContent>
                        </Card>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent >
            <CarouselPrevious className='invisible sm:visible text-white bg-[#8200fc] border-none' />
            <CarouselNext className='invisible sm:visible text-white bg-[#8200fc] border-none'/>
         </Carousel>
         <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
         </div>
      </div>
   )
}
