import React from "react";
import { GetAllBrands } from "../../Apis/allBrands.api";
import Link from "next/link";
import { Brand } from "../../interface/Product.interface";

export default async function Brands() {

  let { data } = await GetAllBrands();
  const Brands = data;

  return (
    <div className="lg:mt-25 md:mt-25  mt-20 w-[90%] mx-auto fade-in">
      <div className="text-left ms-2 mb-2">
        <div className="flex items-baseline-last justify-between">
          <div>
            <h1 className="font-serif italic text-2xl md:text-3xl text-[#FFFFE3] leading-4">
              Curated
            </h1>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#EA301F] uppercase tracking-tight">
              Brands
            </h2>
          </div>
          <div>
            <Link href="/Products">
              <h3 className="shop font-mono text-lg lg:text-2xl md:text-xl sm:text-lg text-[#FFFFE3] uppercase font-bold me-5 cursor-pointer ">
                shop all<i className="fa-solid fa-arrow-right fa-sm ms-1"></i>
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  mx-auto ">
        {Brands.map((brand: Brand, index: number) => (
          <div key={index} className="w-[80%] lg:w-[25%] md:w-[30%] sm:w-[50%] mx-auto  px-2  cursor-pointer ">
            <Link href="/Products">
              <div className="outline-0 outline-[#FFFFE3] hover:outline-7 transition-all duration-200 bg-black overflow-hidden ">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="transition-all duration-300 w-full filter invert scale-70 hover:scale-90 "
                />
              </div>
              <div>
                <h1 className="font-mono font-bold uppercase text-xl  text-center my-2 transition-all duration-500  bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000]">
                  {brand.name}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
