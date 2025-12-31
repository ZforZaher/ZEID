"use client";
import React, { useEffect, useState } from "react";
import getWishlistProducts from "../../Apis/getWishlist.api";
import deleteWishlistProduct from "../../Apis/deleteWishlistProduct.api";
import Link from "next/link";
import AddBtn from "../../_component/ProductCart/addBtn";
import {WishlistItem} from '../../interface/wishlist.interface'
import {WishlistResponse} from '../../interface/wishlist.interface'


export default function Wishlist() {
  const [Loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  async function getWishlistData() {
    try {
      const response: WishlistResponse = await getWishlistProducts();
      if (response.status === "success") {
        setWishlist(response.data || []);
        setWishlistCount(response.count || 0);
        
        // Calculate total value
        const total = response.data.reduce((sum, item) => sum + item.price, 0);
        setTotalValue(total);
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWishlistData();
  }, []);

  async function removeFromWishlist(id: string) {
    try {
      const response = await deleteWishlistProduct(id);
      if (response.status === "success") {
        // Update local state
        setWishlist(prev => prev.filter(item => item.id !== id));
        setWishlistCount(prev => prev - 1);
        // Recalculate total value
        setTotalValue(prev => {
          const item = wishlist.find(item => item.id === id);
          return item ? prev - item.price : prev;
        });
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  }

  async function removeAllWishlist() {
    try {
      // Remove all items one by one
      for (const item of wishlist) {
        await deleteWishlistProduct(item.id);
      }
      setWishlist([]);
      setWishlistCount(0);
      setTotalValue(0);
    } catch (error) {
      console.error("Error clearing wishlist:", error);
    }
  }

  if (Loading) {
    return (
      <div>
        <div className="wave-container h-screen w-screen flex justify-center items-center">
          <h1 className="wave-text font-mono font-bold text-[#FFFFE3]">
            <span>Z</span>
            <span>É</span>
            <span>I</span>
            <span>D</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      {wishlist.length > 0 ? (
        <div className="w-[95%] xl:w-[50%] lg:w-[80%] md:w-[90%] mx-auto mt-28 fade-in">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h1 className="font-serif italic text-2xl md:text-3xl text-[#FFFFE3] leading-4">
                Your
              </h1>
              <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#EA301F] uppercase tracking-tight">
                WISHLIST
              </h2>
            </div>
            <div className="flex mb-3">
              <h1 className="font-mono uppercase font-bold text-[#EA301F] text-sm sm:text-base md:text-xl me-2">
                {wishlistCount}
              </h1>
              <h1 className="font-mono uppercase font-bold text-[#FFFFE3] text-sm sm:text-base md:text-xl">
                items in wishlist
              </h1>
            </div>
          </div>

          {wishlist.map((item: WishlistItem) => {
            return (
              <div key={item._id || item.id} className="flex flex-nowrap mb-5 border-b border-[#787878] pb-5">
                {/* Product Image */}
                <div className="w-1/4 overflow-hidden bg-white relative cursor-pointer">
                  <img
                    src={item.imageCover}
                    alt={item.title}
                    className="w-[80%] mx-auto scale-100 hover:scale-110 transition-all duration-200"
                  />
                  {/* Wishlist Badge */}
                  <div className="absolute top-1 left-1 px-2 py-1 ">
                    <i className="fa-solid fa-heart text-[#EA301F] text-lg"></i>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="w-1/2 ms-4 flex flex-col justify-between">
                  <div>
                    <Link href={`/Products/${item.id}`}>
                      <h1 className="font-mono uppercase font-bold text-[#FFFFE3] text-sm sm:text-base md:text-xl lg:text-3xl hover:text-[#EA301F] transition-colors duration-200">
                        {item.title}
                      </h1>
                    </Link>
                    <h1 className="font-serif italic text-[#EA301F] text-xs sm:text-base md:text-lg">
                      {item.category?.name || (typeof item.category === 'string' ? item.category : 'Uncategorized')}
                    </h1>
                    {item.brand?.name && (
                      <h2 className="font-mono text-[#FFFFE3]/70 text-xs sm:text-sm">
                        {item.brand.name}
                      </h2>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-3 h-fit w-fit bg-[#474747]">
                    <AddBtn id={item.id} />
                  </div>
                </div>
                
                {/* Price and Remove */}
                <div className="w-1/4 flex flex-col justify-between items-end">
                  <div className="text-right">
                    <h1 className="font-mono uppercase font-bold text-sm sm:text-base md:text-xl text-[#EA301F]">
                      ${item.price}
                    </h1>
                    {item.priceAfterDiscount && item.priceAfterDiscount > item.price && (
                      <h2 className="font-mono text-[#FFFFE3]/50 text-xs line-through">
                        ${item.priceAfterDiscount}
                      </h2>
                    )}
                  </div>
                  
                  <button
                    className="bg-[#474747] hover:bg-[#EA301F] px-3 py-1 cursor-pointer transition-colors duration-200 flex items-center gap-2"
                    title="Remove from wishlist"
                    aria-label="Remove from wishlist"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <i className="fa-solid fa-heart text-[#EA301F] hover:text-white text-sm"></i>
                    <span className="font-mono text-xs text-[#FFFFE3] hidden sm:inline">REMOVE</span>
                  </button>
                </div>
              </div>
            );
          })}

          {/* Total Value */}
          <div className="flex justify-between items-center mt-2">
            <h1 className="font-mono uppercase font-bold tracking-tighter text-[#FFFFE3] text-sm lg:text-xl sm:text-base">
              subtotal
            </h1>
            <h1 className="font-mono uppercase font-bold text-sm sm:text-base md:text-xl lg:text-xl text-[#EA301F]">
              ${totalValue}
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5 mb-10">
            <Link href="/Products" className="">
              <button
                type="button"
                className="font-mono uppercase font-bold tracking-tighter  bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-200 w-full py-3 lg:text-xl text-sm sm:text-base"
              >
                Continue Shopping
              </button>
            </Link>
            
            <button
              onClick={() => removeAllWishlist()}
              className="font-mono uppercase font-bold tracking-tighter cursor-pointer text-[#FFFFE3] border border-[#FFFFE3] hover:border-[#EA301F] hover:bg-[#EA301F] transition-all duration-200 w-full py-3 lg:text-xl text-sm sm:text-base"
            >
              Clear Wishlist
            </button>
          </div>

          {/* Quick Add to Cart Section */}
          <div className="mt-8 p-4 border border-[#787878] bg-black/50">
            <div className="flex justify-between items-center ">
              <h3 className="font-mono uppercase font-bold text-[#FFFFE3] text-lg">
                Quick Actions
              </h3>
              <button
                className="font-mono uppercase font-bold text-sm px-4 py-2 bg-[#EA301F] text-[#FFFFE3] hover:bg-[#FFFFE3] hover:text-[#000000] cursor-pointer transition-all duration-200"
                onClick={async () => {
                  // Add all wishlist items to cart
                  for (const item of wishlist) {
                    // You'll need to implement addToCart function
                    console.log("Adding to cart:", item.id);
                  }
                }}
              >
                Add All to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col justify-center items-center px-4">
          <div className="mb-8">
            <i className="fa-regular fa-heart text-[#EA301F] text-6xl opacity-50"></i>
          </div>
          <h1 className="font-mono uppercase font-bold tracking-tighter text-[#FFFFE3] text-xl lg:text-3xl sm:text-base mb-6 text-center">
            YOUR WISHLIST IS EMPTY
          </h1>
          <p className="font-mono text-[#FFFFE3]/70 text-center mb-8 max-w-md">
            Save items you love to your wishlist. Review them anytime and easily move them to the cart.
          </p>
          <button className="font-mono uppercase font-bold tracking-tighter bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-200 py-3 px-8 lg:text-xl text-sm sm:text-base">
            <Link href="/Products">Browse Products</Link>
          </button>
        </div>
      )}
    </>
  );
}