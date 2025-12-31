import Link from "next/link";
import React from "react";
import { GetAllBrands } from "../../Apis/allBrands.api";
import { Brand } from "../../interface/Cart.interface";

export default async function BrandSlider() {
  let { data } = await GetAllBrands();
  const Brands = data;
  return (
    <div className="w-[90%] mx-auto mt-10 mb-2 h-auto flex flex-col lg:flex-row gap-4">
      {/* Left section */}
      <div className="flex md:flex-row lg:flex-col sm:flex-row flex-row  lg:justify-start md:items-end md:justify-between sm:items-end sm:justify-between items-end justify-between">
        <div>
          <h1 className="font-serif italic text-2xl md:text-4xl text-[#FFFFE3] leading-4">
            Great
          </h1>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#EA301F] uppercase tracking-tight">
            Brands
          </h2>
        </div>
        <div>
          <Link href="/Brands">
            <h3 className="shop font-mono text-lg lg:text-2xl md:text-xl sm:text-lg text-[#FFFFE3] uppercase font-bold pe-5 w-fit cursor-pointer ">
              shop all<i className="fa-solid fa-arrow-right fa-sm ms-1"></i>
            </h3>
          </Link>
        </div>
      </div>

      {/* Brands grid */}
      <div className="flex flex-wrap gap-3 w-full lg:w-[80%]">
        {Brands.slice(10, 16).map((brand: Brand) => (
          <div
            key={brand.name}
            className="w-full sm:w-[48%] md:w-[32%] cursor-pointer"
          >
            <div className="overflow-hidden border border-[#787878]">
              <img
                src={brand.image}
                alt={brand.name}
                className="filter invert w-full hover:scale-110 transition-all duration-300"
              />
            </div>
            <Link href="/Brands">
            <h1 className="font-mono uppercase font-bold text-xl md:text-2xl bg-[#EA301F] text-[#FFFFE3] hover:bg-[#FFFFE3] hover:text-black leading-4 text-center py-4 mt-1 transition-all duration-300">
              {brand.name}
            </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
