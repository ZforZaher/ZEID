import React from "react";
import { GetAllProducts } from "../../Apis/allProducts.api";
import { Iproduct } from "../../interface/Product.interface";
import SingleProduct from "../../_component/ProductCart/page";
import AllProducts from "../../_component/AllProducts/page"
export default async function Products() {
  let {data} = await GetAllProducts()
  let Products = data
  return (
    <div className="fade-in">
      <div className="ps-4">
        <h1 className=" font-serif italic pt-23 text-[#FFFFE3] text-5xl leading-7">new</h1>
        <h2 className=" font-mono text-5xl font-bold text-[#EA301F] uppercase">Products</h2>
      </div>
      <AllProducts/>
    </div>
  )
}
