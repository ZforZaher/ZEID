"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import phone from '../../../public/phone.png'
import shoes from '../../../public/shoes.png'
import pants from '../../../public/pants.png'
import laptop from '../../../public/laptop.png'
import camera from '../../../public/camera.png'
import watch from '../../../public/watch.png'
import chair from '../../../public/chair.png'
import cleanser from '../../../public/cleanser.png'
import guitar from '../../../public/guitar.png'
import jacket from '../../../public/jacket.png'

export default function SwiperSlider() {
  const swiperRef = useRef<any>(null);
  
  const slides = [
    { src: phone, alt: 'Phone' },
    { src: shoes, alt: 'Shoes' },
    { src: pants, alt: 'Pants' },
    { src: laptop, alt: 'Laptop' },
    { src: camera, alt: 'Camera' },
    { src: watch, alt: 'Watch' },
    { src: chair, alt: 'Chair' },
    { src: cleanser, alt: 'Cleanser' },
    { src: guitar, alt: 'Guitar' },
    { src: jacket, alt: 'Jacket' }
  ];

  return (
    <div className="relative right-0 top-0 h-screen md:w-75 w-50 lg:w-75 bg-[#111111] border-l-4 border-r-4 border-b-4 border-[#EA301F] overflow-hidden z-30">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        effect="slide"
        modules={[Autoplay, EffectCoverflow]}
        className="h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-[25vh] flex! items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain p-1"
                sizes="200px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href='/Products'>
        <button className='slider-btn font-mono text-2xl md:text-3xl lg:text-4xl uppercase font-bold bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#111111]  py-4 z-10 relative bottom-16 w-full transition-all duration-300'>Shop all<i className="fa-solid fa-arrow-right fa-sm ms-1"></i></button>
      </Link>
    </div>
  );
}