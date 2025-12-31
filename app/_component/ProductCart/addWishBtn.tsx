"use client"
import React, { useState } from "react";
import AddToWishlist from "../../Apis/addToWishlist.api";
import { toast } from "sonner";

export default function AddWishBtn({ id }: { id: string }) {
  const [inWishList, setInWishList] = useState(false);
  async function addProductToWishList() {
    let response = await AddToWishlist(id);

    if (response.status == "success") {
      toast.success("Product Added To WishList ", {
        position: "top-center",
        duration: 1000,
      });
      setInWishList(true);
    }
  }
  return (
    <>
      <button
        onClick={() => addProductToWishList()}
        type="button"
        title="add to wishlist"
        className="cursor-pointer me-1"
      >
        {inWishList ? <i className="fa-solid fa-heart text-[#EA301F] fa-lg"></i> : <i className="fa-regular fa-heart text-[#FFFFE3] hover:text-[#EA301F] fa-lg transition-all duration-300"></i> }
      </button>
    </>
  );
}
