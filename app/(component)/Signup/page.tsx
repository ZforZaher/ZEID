"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../Schema/register.schema";
import axios from "axios";
import { toast } from "sonner";
import { Register } from "../../interface/Login.interface";
import Link from "next/link";
export default function Signup() {
  const router = useRouter();
  let form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  async function HandleRegister(values: Register) {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      if (response.data.message == "success") {
        toast.success("Welcome To ZÉID", { position: "top-center" });
        router.push("/Login");
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "Sorry something went wrong", {
        position: "top-center",
      });
    }
  }

  return (
    <div className="h-screen">
      <div className=" w-[90%] lg:w-[50%] md:w-[70%] sm:w-[80%] h-screen mx-auto mt-25 border border-[#787878] fade-in">
        <h1 className="font-mono font-bold text-[#FFFFE3] uppercase text-3xl text-center pt-3">
          join ZÉID now
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(HandleRegister)} className="py-3">
            {/* NAME INPUT */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="NAME"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="EMAIL"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
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
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="PASSWORD"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* REPASSWORD */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="REPASSWORD"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* PHONE */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="phone"
                      placeholder="PHONE"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="px-3">
              <Button
                type="submit"
                className="rounded-none font-mono text-base sm:text-lg lg:text-xl font-bold w-full mt-2 sm:mt-2 py-2 sm:py-5 text-center bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-400 uppercase "
              >
                Submit
              </Button>
            </div>
            <div>
              <p className="font-mono capitalize text-sm text-[#FFFFE3] text-center mt-2">
                already have an account?{" "}
                <Link href="/Login" className="text-[#EA301F]">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
