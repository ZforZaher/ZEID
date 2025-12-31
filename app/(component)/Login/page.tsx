"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {signIn} from 'next-auth/react'
import Link from 'next/link';
import { ILogin } from '../../interface/Login.interface';

export default function Login() {
  let form = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
  async function HandleRegister(values:ILogin){
    signIn("credentials", {
      email:values?.email,
      password:values?.password,
      redirect:true,
      callbackUrl:'/'
    })  
  }  

  return (
    <div className=" w-[90%] lg:w-[50%] md:w-[70%] sm:w-[80%] h-screen mx-auto mt-25 border border-[#787878] fade-in">
      <h1 className="font-mono font-bold text-[#FFFFE3] uppercase text-3xl text-center pt-3">join ZÉID now</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(HandleRegister)} className="py-3">
          
          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className="px-3">
                <FormLabel />
                <FormControl>
                  <Input type="email" placeholder="EMAIL" {...field} className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center" />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem className="px-3">
                <FormLabel />
                <FormControl>
                  <Input type="password" placeholder="PASSWORD" {...field} className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center" />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="px-3">
            <Button type="submit" className="rounded-none font-mono text-base sm:text-lg lg:text-xl font-bold w-full mt-2 sm:mt-2 py-2 sm:py-5 text-center bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-400 uppercase ">join</Button>
          </div>
          <div>
            <p className="font-mono capitalize text-sm text-[#FFFFE3] text-center mt-2">don't have an account? <Link href="/Signup" className="text-[#EA301F]">Sign Up</Link></p>
          </div>
        </form>
      </Form>


    </div>
  )
}
