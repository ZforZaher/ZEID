"use client";

import { useState } from "react";
import { Iproduct } from "../../../interface/Product.interface";

export default function ImageGallery({ data }: { data: Iproduct }) {
  const [mainImage, setMainImage] = useState<string>(data.imageCover);

  return (
    <div className="flex flex-col md:flex-row w-full lg:w-[50%]">
      {/* Main Image Container */}
      <div className="w-full md:w-[80%] bg-white mb-4 md:mb-0">
        <img 
          src={mainImage} 
          alt="Main product image" 
          className="w-full h-auto max-h-75 sm:max-h-100 md:max-h-112.5 lg:max-h-112.5 object-contain mx-auto border border-[#787878]" 
        />
      </div>
      
      {/* Thumbnail Container - Horizontal on mobile, Vertical on desktop */}
      <div className="flex flex-row md:flex-col w-full md:w-[20%] md:ms-3 md:mt-0 gap-3 md:gap-4">
        {/* Main image thumbnail */}
        <div 
          onClick={() => setMainImage(data.imageCover)}
          className={`cursor-pointer border-2 transition-all duration-300 hover:scale-105 bg-white flex-1 md:flex-none ${
            mainImage === data.imageCover ? 'border-[#EA301F]' : 'border-[#787878] hover:border-[#EA301F]'
          }`}
        >
          <img 
            src={data.imageCover} 
            alt="Main thumbnail"
            className="w-full h-16 sm:h-20 md:h-24 object-cover"
          />
        </div>
        
        {/* Additional images */}
        {data.images?.slice(0, 3).map((image: string, index: number) => (
          <div 
            key={index}
            onClick={() => setMainImage(image)}
            className={`cursor-pointer border-2 transition-all duration-300 hover:scale-105 bg-white flex-1 md:flex-none ${
              mainImage === image ? 'border-[#EA301F]' : 'border-[#787878] hover:border-[#EA301F]'
            }`}
          >
            <img 
              src={image} 
              alt={`Image ${index + 1}`}
              className="w-full h-16 sm:h-20 md:h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}