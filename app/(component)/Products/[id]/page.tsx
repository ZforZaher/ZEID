import getProductDetails from "../../../Apis/productDetails.api";
import { Iproduct } from "../../../interface/Product.interface";
import ImageGallery from "../ImageGallery/page";
import AddBtn from "./AddBtn";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  let { id } = await params;
  let { data } = await getProductDetails(id);
  
  return (
    <div className="font-mono text-white pt-22 pb-10 fade-in">
      <div className="flex items-center pb-2 px-4 sm:px-6">
        <h1 className="relative font-serif font-bold italic me-1 text-xl sm:text-2xl text-[#FFFFE3]">More</h1>
        <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl uppercase font-extrabold text-[#EA301F]">Details</h1>
      </div>
      <div className="flex flex-col lg:flex-row w-[95%] sm:w-[90%] mx-auto px-2 sm:px-4 gap-6 lg:gap-0">
        {/* Image Gallery */}
        <ImageGallery data={data} />
        
        {/* Product Info */}
        <div className="lg:ms-6 w-full h-full lg:w-[50%] pb-7">
          <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFFE3] hover:text-[#EA301F] transition-all duration-300 cursor-pointer">{data.title}.</h1>
          <div className="flex flex-row sm:flex-row sm:items-center gap-2  mt-3 sm:mt-5">
            <h1 className="font-mono text-lg sm:text-xl lg:text-2xl font-semibold text-[#FFFFE3]">{data.category.name} -</h1>
            <h1 className="text-[#EA301F] font-serif italic text-lg sm:text-xl lg:text-2xl font-bold">{data.brand.name}.</h1>
          </div>
          <h1 className="font-serif italic text-xs sm:text-sm font-thin text-[#FFFFE3] leading-4 mt-0 sm:mt-0">{data.description}</h1>
          <div className="flex flex-row sm:flex-row sm:items-center justify-between gap-3 sm:gap-5 mt-4 sm:mt-6 pe-0 sm:pe-3">
            <h1 className="font-mono text-2xl sm:text-3xl font-bold text-[#FFFFE3]">${data.price}</h1>
            <h1 className="font-mono text-2xl sm:text-3xl font-bold text-[#FFFFE3]">
              <i className="fa-solid fa-star text-[#EA301F] me-1"></i>{data.ratingsAverage}
            </h1>
          </div>
          <AddBtn id={id}/>
        </div>
      </div>
    </div>
  );
}







