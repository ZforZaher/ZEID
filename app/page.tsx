import Image from "next/image";
import HomeCatgs from "./_component/HomeCategories/page";
import Slider from "./_component/Slider/page";
import BrandsSlider from "./_component/HomeBrands/page";
import WhyZeid from "./_component/WhyZeid/page";
import homeImg from "../public/homepage.png";
export default function HomePage() {
  return (
    <div>
      <div className="fade-in land">
        <div className="h-screen flex justify-between overflow-hidden">
          <div className="qoute relative ">
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8">
              <div className="text-[#EA301F]  font-bold uppercase text-lg sm:text-xl md:text-2xl leading-tight">
                <span className="bg-[#FFFFE3] w-fit">unique.</span>
                <br />
                <span className="bg-[#FFFFE3] w-fit">untamed.</span>
                <br />
                <span className="bg-[#FFFFE3] w-fit">Authentic.</span>
              </div>

              <h2
                className="text-[#FFFFE3] font-mono font-bold 
                   text-[56px] sm:text-[72px] md:text-[110px] 
                   leading-none mt-3"
              >
                ZÉID
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen ">
            <Image src={homeImg} alt="" className="w-full border-5 border-r-[#EA301F] border-[#FFFFE3]"/>
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </div>
      <div>
        <HomeCatgs />
      </div>
      <div>
        <BrandsSlider />
      </div>
      <div className="mb-5 mt-8">
        <WhyZeid />
      </div>
    </div>
  );
}
