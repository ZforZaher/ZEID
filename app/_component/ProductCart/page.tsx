import React from "react";
import { Iproduct } from "../../interface/Product.interface"; // Adjust the import path based on where Iproduct is defined
import Link from "next/link";
import AddBtn from "./addBtn";
import AddWishBtn from "./addWishBtn";
export default function SingleProduct({ product }: { product: Iproduct }) {
  return (
    <div className=" w-[80%] sm:w-[47%] md:w-[30%] lg:w-[24%] h-fit m-1  mx-auto border border-[#787878] bg-white">
      <Link href={`/Products/${product._id}`}>
        <div className="w-50 mx-auto overflow-hidden">
          <img
            src={product.imageCover}
            alt="Product image"
            className=" scale-100 hover:scale-110 transition-all duration-500"
          />
        </div>
      </Link>
      <div className="bg-[#000000] hover:bg-[#111111] transition-all duration-500">
        <Link href={`/Products/${product._id}`}>
          <div className="text-[#FFFFE3] ps-3 pt-2">
            <h1 className="font-mono text-2xl font-bold uppercase transition-all duration-500 hover:text-[#EA301F] cursor-pointer">
              {product.title.split(" ").slice(0, 2).join(" ") +
                (product.title.split(" ").length > 2 ? "" : "")}
            </h1>
            <h2 className="font-mono text-sm cursor-pointer">
              {product.category.name}
            </h2>
          </div>
        </Link>
        <div className="text-[#FFFFE3] flex justify-between items-center px-3 py-2 pt-6">
          <h1 className="font-mono font-semibold text-2xl ">
            ${product.price}
          </h1>
          <div>
            <AddWishBtn id={product._id}/>
            <AddBtn id={product._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
