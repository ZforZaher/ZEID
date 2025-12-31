import React from "react";

export default function WhyZeid() {
  return (
    <div className="h-auto w-[95%] lg:w-[90%] mt-5 mx-auto transition-all duration-500 ">
      <div className="ps-2 flex items-center ">
        <h1 className="font-serif italic text-2xl md:text-4xl text-[#FFFFE3]">
          why
        </h1>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#EA301F] uppercase tracking-tight">
          ZÉID
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 ">
        <div className="uppercase border-b lg:border-b-0 lg:border-e border-dashed border-[#787878] w-full lg:w-[25%] pb-6 h-fit">
          <h1 className="font-mono font-semibold text-[#FFFFE3] text-sm">
            Get your order delivered quickly, straight to your door.
          </h1>
          <div className="mt-6">
            <h2 className="font-mono font-bold text-[#FFFFE3] text-3xl">
              Fast Shipping
            </h2>
            <p className="font-mono text-xs text-[#787878]">
              3–5 business days
            </p>
          </div>
        </div>

        <div className="uppercase border-b lg:border-b-0 lg:border-e border-dashed border-[#787878] w-full lg:w-[25%] pb-6 pt-10 lg:pt-20 lg:ms-3 h-fit">
          <h1 className="font-mono font-semibold text-[#FFFFE3] text-sm">
            Return your items hassle-free. Our flexible policy makes it simple.
          </h1>
          <div className="mt-6">
            <h2 className="font-mono font-bold text-[#FFFFE3] text-3xl">
              Easy Returns
            </h2>
            <p className="font-mono text-xs text-[#787878]">
              7 days from delivery
            </p>
          </div>
        </div>

        <div className="uppercase border-b lg:border-b-0 lg:border-e border-dashed border-[#787878] w-full lg:w-[24%] pb-6 pt-10 lg:pt-36 lg:ms-3 h-fit">
          <h1 className="font-mono font-semibold text-[#FFFFE3] text-sm">
            Pay for your order with confidence. Your details are always
            protected.
          </h1>
          <div className="mt-6">
            <h2 className="font-mono font-bold text-[#FFFFE3] text-3xl">
              Secure Payments
            </h2>
            <p className="font-mono text-xs text-[#787878]">
              Bank-grade SSL protection
            </p>
          </div>
        </div>

        <div className="uppercase border-b lg:border-b-0 lg:border-e border-dashed border-[#787878] w-full lg:w-[25%] pb-6 pt-10 lg:pt-50 lg:ms-3 h-fit">
          <h1 className="font-mono font-semibold text-[#FFFFE3] text-sm">
            Get the help you need, fast. Our dedicated team is here for you.
          </h1>
          <div className="mt-6">
            <h2 className="font-mono font-bold text-[#FFFFE3] text-3xl">
              Customer Support
            </h2>
            <p className="font-mono text-xs text-[#787878]">
              Hello@ZÉID.gmail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
