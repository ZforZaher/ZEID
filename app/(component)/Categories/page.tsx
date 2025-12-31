import React from "react";
import Products from "../Products/page";
import AllProducts from "../../_component/AllProducts/page";
import Filter from "./filter";
export default async function Categories() {
  return (
    <>
      <div className="w-[95%] mx-auto pb-3 fade-in border-b border-b-[#787878]">
        <Filter />
      </div>

      <div className="w-[95%] mx-auto mt-2">
        <AllProducts />
      </div>
    </>
  );
}
