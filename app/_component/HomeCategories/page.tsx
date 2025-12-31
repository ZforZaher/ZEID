"use client"
import Link from 'next/link'
import React from 'react'

export default function HomeCatgs() {
  return (
    <div className='fade-in'>
        <div className='w-[90%] mx-auto mt-15 mb-2 flex justify-between items-center '>
            <h2 className=" font-mono text-2xl lg:text-4xl md:text-3xl sm:text-2xl  font-bold text-[#EA301F] uppercase ms-2 leading-7 tracking-tighter">categories</h2>
            <Link href='/Categories'>
              <h3 className='shop font-mono text-lg lg:text-2xl md:text-xl sm:text-lg text-[#FFFFE3] uppercase font-bold me-5 cursor-pointer ' >shop all<i className="fa-solid fa-arrow-right fa-sm ms-1"></i></h3>
            </Link>
        </div>
      <div className="grid grid-cols-6 grid-rows-5 gap-0 w-[90%] h-auto  mx-auto">
        <div className="music row-start-1 row-end-2 col-start-1 col-end-4 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
            <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>Music</h1>
            </div>
        </div>
        
        <div className="books row-start-2 row-end-3 col-start-1 col-end-4 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
          <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>books</h1>
            </div>
        </div>
        
        <div className="home row-start-1 row-end-3 col-start-4 col-end-7 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
          <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>home</h1>
            </div>
        </div>
        
        <div className="mens  row-start-3 row-end-6 col-start-1 col-end-4 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
          <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>men's</h1>
            </div>
        </div>
        
        <div className="electronics  row-start-5 row-end-7 col-start-1 col-end-4 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
          <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>electronics</h1>
            </div>
        </div>
        
        <div className="beauty row-start-3 row-end-4 col-start-4 col-end-7 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
          <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>beauty</h1>
            </div>
        </div>
        
        <div className="womens  row-start-4 row-end-7 col-start-4 col-end-7 border-5 border-[#111111] hover:border-[#FFFFE3] cursor-pointer transition-border duration-200 ">
          <div className='h-full'>
              <h1 className='title font-mono text-xl lg:text-4xl md:text-3xl sm:text-2xl  font-extrabold text-[#FFFFE3] uppercase h-full w-full flex justify-center items-center transtion-all duration-400'>women's</h1>
            </div>
        </div>
      </div>
    </div>
  )
}
