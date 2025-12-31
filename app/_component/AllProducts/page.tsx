import React from 'react'
import SingleProduct from '../ProductCart/page'
import { GetAllProducts } from '../../Apis/allProducts.api'
import { Iproduct } from "../../interface/Product.interface";
export default async function allProducts() {
    let {data} = await GetAllProducts()
    let Products = data
  return (
    <div className=" flex flex-wrap px-1">
            {Products.map((product:Iproduct)=>(
              <SingleProduct key={product._id} product={product} ></SingleProduct>
            )  
            )
            }
          </div>
  )
}
