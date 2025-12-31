"use client";
import React from "react";
import { redirect, useParams, useRouter } from "next/navigation";
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
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSchema } from "../../../Schema/checkout.schema";
import { Icheckout } from "../../../interface/checkOut.interface";
import PayForCart from "../../../Apis/checkOut.api";

export default function Checkout() {
  const { id }: { id: string } = useParams();
  const router = useRouter();
  let form = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(CheckoutSchema),
  });
  async function HandlePayment(values: Icheckout) {
    const data = await PayForCart(values, id);
    if (data.status == "success") {
      window.location.href = data.session.url;
    }
  }

  return (
    <div className="h-screen">
      <div className=" w-[90%] lg:w-[50%] md:w-[70%] fade-in sm:w-[80%] mx-auto mt-25 border border-[#787878]">
        <h1 className="font-mono font-bold text-[#FFFFE3] uppercase text-3xl text-center pt-3">
          ZÉID{" "}
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(HandlePayment)} className="py-3">
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="DETAILS"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="px-3">
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="CITY"
                      {...field}
                      className="rounded-none font-semibold  text-[#FFFFE3] outline-[#FFFFE3] text-center"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
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
                pay
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
