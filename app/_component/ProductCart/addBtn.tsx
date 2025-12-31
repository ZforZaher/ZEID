"use client";

import { toast } from "sonner";
import AddToCart from "../../Apis/addToCart.api";
import { useContext } from "react";
import { cartItemContext } from "../../Context/cartContext";

export default function AddBtn({ id }: { id: string }) {
  const context = useContext(cartItemContext);
  if (!context) {
    throw new Error("Not Exist");
  }
  const { setDetails } = context as { setDetails: (value: number) => void };

  async function addProductToCart() {
    let response = await AddToCart(id);
    
    if(response.status == "success"){
      setDetails(response.numOfCartItems);
      toast.success("Product Added Successfully ", {position: "top-center" , duration:1000})
    }
  }

  return (
    <>
      <button
        onClick={() => addProductToCart()}
        title="Add to cart"
        className="cursor-pointer text-[#FFFFE3] hover:text-[#EA301F] px-1 py-1 transition-all duration-500"
      >
        <i className="fa-solid fa-cart-plus fa-lg"></i>
      </button>
    </>
  );
}
