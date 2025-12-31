"use client";
import React, { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable header to toggle */}
      <div
        className="bg-[#1A1A1A] text-[#FFFFE3] mt-20 sm:mt-18 md:mt-23 lg:mt-25 h-7.5 mb-1 flex items-center px-2 transition-all duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-mono text-sm uppercase font-bold">
          <i className="fa-solid fa-bars-staggered"></i> Filters
          <i
            className={`fa-solid fa-angle-down font-extralight transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </h1>
      </div>

      {/* Content that shows/hides */}
      {isOpen && (
        <div>
          <div className="flex flex-col sm:flex-row ms-2 transition-all duration-300">
            <div className="pe-4 sm:pe-8 md:pe-15 border-e-0 sm:border-e border-e-[#787878] pb-4 sm:pb-0 transition-all duration-300">
              <h1 className="font-mono text-[#FFFFE3] uppercase mt-2">
                Gender
              </h1>
              <div className="flex gap-2 mt-2">
                <button className="font-mono font-semibold text-[#FFFFE3] uppercase hover:bg-[#EA301F] transition-all duration-200 px-3 sm:px-4 md:px-5 py-1 text-sm sm:text-base md:text-lg border-2 border-[#FFFFE3] cursor-pointer">
                  MEn
                </button>
                <button className="font-mono font-semibold text-[#FFFFE3] uppercase hover:bg-[#EA301F] transition-all duration-200 px-3 sm:px-4 md:px-5 py-1 text-sm sm:text-base md:text-lg border-2 border-[#FFFFE3] cursor-pointer">
                  womEn
                </button>
              </div>
            </div>
            <div className="ms-0 sm:ms-4  pt-0  sm:pt-0">
              <h1 className="font-mono text-[#FFFFE3] uppercase mt-2 mb-3">
                price
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="price1"
                    className="w-5 h-5 sm:w-6 sm:h-6 appearance-none border border-[#FFFFE3] bg-[#FFFFE3] 
                          checked:bg-[#EA301F] checked:border-[#EA301F] 
                          transition-all duration-300 cursor-pointer
                          hover:border-[#EA301F] me-2"
                  />
                  <label
                    htmlFor="price1"
                    className="font-mono text-xs sm:text-sm text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-200 cursor-pointer"
                  >
                    {" "}
                    <i className="fa-solid fa-less-than fa-xs"></i> $100{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="price2"
                    className="w-5 h-5 sm:w-6 sm:h-6 appearance-none border border-[#FFFFE3] bg-[#FFFFE3] 
                          checked:bg-[#EA301F] checked:border-[#EA301F] 
                          transition-all duration-300 cursor-pointer
                          hover:border-[#EA301F] me-2"
                  />
                  <label
                    htmlFor="price2"
                    className="font-mono text-xs sm:text-sm text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-200 cursor-pointer"
                  >
                    {" "}
                    $101 - $200{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="price3"
                    className="w-5 h-5 sm:w-6 sm:h-6 appearance-none border border-[#FFFFE3] bg-[#FFFFE3] 
                          checked:bg-[#EA301F] checked:border-[#EA301F] 
                          transition-all duration-300 cursor-pointer
                          hover:border-[#EA301F] me-2"
                  />
                  <label
                    htmlFor="price3"
                    className="font-mono text-xs sm:text-sm text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-200 cursor-pointer"
                  >
                    {" "}
                    $201 - $300{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="price4"
                    className="w-5 h-5 sm:w-6 sm:h-6 appearance-none border border-[#FFFFE3] bg-[#FFFFE3] 
                          checked:bg-[#EA301F] checked:border-[#EA301F] 
                          transition-all duration-300 cursor-pointer
                          hover:border-[#EA301F] me-2"
                  />
                  <label
                    htmlFor="price4"
                    className="font-mono text-xs sm:text-sm text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-200 cursor-pointer"
                  >
                    {" "}
                    <i className="fa-solid fa-less-than fa-flip-horizontal fa-xs"></i>{" "}
                    $100{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 ms-2 flex flex-wrap gap-x-4 gap-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sale"
                className="w-5 h-5 sm:w-6 sm:h-6 appearance-none border border-[#FFFFE3] bg-[#FFFFE3] 
                        checked:bg-[#EA301F] checked:border-[#EA301F] 
                        transition-all duration-300 cursor-pointer
                        hover:border-[#EA301F] me-2"
              />
              <label
                htmlFor="sale"
                className="font-mono text-xs sm:text-sm text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-200 cursor-pointer"
              >
                {" "}
                ON SALE{" "}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="arrivals"
                className="w-5 h-5 sm:w-6 sm:h-6 appearance-none border border-[#FFFFE3] bg-[#FFFFE3] 
                        checked:bg-[#EA301F] checked:border-[#EA301F] 
                        transition-all duration-300 cursor-pointer
                        hover:border-[#EA301F] me-2"
              />
              <label
                htmlFor="arrivals"
                className="font-mono text-xs sm:text-sm text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-200 cursor-pointer"
              >
                {" "}
                NEW ARRIVALS{" "}
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
