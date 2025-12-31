"use client";

import { toast } from "sonner";
import AddToCart from "../../../Apis/addToCart.api";
import { useContext } from "react";
import { cartItemContext } from "../../../Context/cartContext";

export default function AddBtn({ id }: { id: string }) {
  const context = useContext(cartItemContext);
  if (!context) {
    throw new Error("Not Exist");
  }
  const { setDetails } = context as { setDetails: (value: number) => void };

  async function addProductToCart() {
    let response = await AddToCart(id);

    if (response.status == "success") {
      setDetails(response.numOfCartItems);
      toast.success("Product Added Successfully ", {
        position: "top-center",
        duration: 1000,
      });
    }
  }

  return (
    <>
      <button
        onClick={() => addProductToCart()}
        className="font-mono text-base sm:text-lg lg:text-xl font-bold w-full mt-4 sm:mt-5 py-2 sm:py-3 text-center bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-400"
      >
         ADD TO CART
      </button>
    </>
  );
}
