"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


// Validate
const formSchema = z.object({
   email: z.string().email({
      message: 'Email invalid!'
   }),
   subject: z.string().min(2, {
      message: 'Subject must be at least 2 characters.'
   }),
   message: z.string(),
})

export default function FormContract() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         subject: "",
         message: ""
      },
   })
   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 text-white">
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className='text-white'>Email</FormLabel>
                     <FormControl>
                        <Input placeholder="abc@gmail.com" {...field} required />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="subject"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className='text-white'>Subject</FormLabel>
                     <FormControl>
                        <Input placeholder="Just saying " {...field} required />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className='text-white'>Message</FormLabel>
                     <FormControl>
                        <Input placeholder="Let's talk about... " {...field} required />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="submit" className='px-6  py-3 mr-4 bg-gradient-to-r from-[#8200fc] hover:bg-slate-200 text-white text-center sm:text-left w-[100%]'>Send message</Button>
         </form>
      </Form>
   )
}






