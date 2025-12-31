"use client";
import React, { useContext, useEffect, useState } from "react";
import getCartProducts from "../../Apis/getCartProducts";
import UpdateCart from "../../Apis/updateCart.api";
import DeleteProductCart from "../../Apis/deleteProductCart.api";
import DeleteCart from "../../Apis/deleteCart.api";
import { CProduct } from "../../interface/Cart.interface";
import { cartItemContext } from "../../Context/cartContext";
import Link from "next/link";

export default function Cart() {
  const [Loading, setLoading] = useState(true);
  const [cartList, setList] = useState<CProduct[]>([]);
  const [totalPrice, setPrice] = useState([]);
  const [cartId, setCartId] = useState<string>("");
  const context = useContext(cartItemContext);
  if (!context) {
    throw new Error("Not Exist");
  }
  const { setDetails }: { setDetails: (value: number) => void } = context;

  async function getCartData() {
    let response = await getCartProducts();
    setCartId(response.cartId);
    setDetails(response.numOfCartItems);
    setPrice(response.data.totalCartPrice);
    setList(response.data.products);
    setLoading(false);
  }
  useEffect(() => {
    getCartData();
  }, []);
  async function CartFinalProducts(id: string, countNumber: number) {
    const response = await UpdateCart(id, countNumber);
    if (response.status == "success") {
      getCartData();
    }
  }
  async function DeleteThisProduct(id: string) {
    const response = await DeleteProductCart(id);
    if (response.status == "success") {
      getCartData();
    }
  }

  async function DeleteAllCart() {
    const response = await DeleteCart();
    if (response.status == "success") {
      setList([]);
      setPrice([]);
      getCartData();
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
      {cartList.length > 0 ? (
        <div className="w-[95%] xl:w-[50%] lg:w-[80%] md:w-[90%] mx-auto mt-28">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h1 className="font-serif italic text-2xl md:text-3xl text-[#FFFFE3] leading-4">
                Your
              </h1>
              <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#EA301F] uppercase tracking-tight">
                CART
              </h2>
            </div>
            <div className="flex mb-3">
              <h1 className="font-mono uppercase font-bold  text-[#EA301F] text-sm sm:text-base md:text-xl me-2">
                {cartList.length}
              </h1>
              <h1 className="font-mono uppercase font-bold  text-[#FFFFE3] text-sm sm:text-base md:text-xl">
                {" "}
                items in cart
              </h1>
            </div>
          </div>

          {cartList.map((item: any) => {
            return (
              <div key={item.product._id} className="flex flex-nowrap mb-5">
                <div className="w-1/4 overflow-hidden bg-white ">
                  <img
                    src={item.product.imageCover}
                    alt={item.product.title}
                    className=" w-[60%] mx-auto scale-100 hover:scale-110 transition-all duration-200"
                  />
                </div>
                <div className="w-1/2 ms-2 flex flex-col justify-between">
                  <div>
                    <h1 className="font-mono uppercase font-bold  text-[#FFFFE3] text-sm sm:text-base md:text-xl">
                      {item.product.title}
                    </h1>
                    <h1 className="font-serif  italic  text-[#EA301F] text-xs sm:text-base md:text-lg">
                      {item.product.brand.name}
                    </h1>
                  </div>
                  {/*  */}
                  <div className="font-mono flex border border-[#FFFFE3] text-[#FFFFE3] w-fit py-1 px-1">
                    {/* decrease button */}
                    <button
                      type="button"
                      onClick={() =>
                        CartFinalProducts(item.product._id, item.count - 1)
                      }
                      className="cursor-pointer px-1 hover:bg-[#EA301F]"
                      title="Decrease quantity"
                      aria-label="Decrease quantity"
                    >
                      <i className="fa-solid fa-minus fa-xs"></i>
                    </button>
                    <h1 className="font-bold mx-2">{item.count}</h1>
                    {/* increase button */}
                    <button
                      type="button"
                      onClick={() =>
                        CartFinalProducts(item.product._id, item.count + 1)
                      }
                      className="cursor-pointer px-1 hover:bg-[#EA301F]"
                      title="Increase quantity"
                      aria-label="Increase quantity"
                    >
                      <i className="fa-solid fa-plus fa-xs"></i>
                    </button>
                  </div>
                  {/*  */}
                </div>
                <div className="w-1/4 flex flex-col justify-between items-end">
                  <h1 className="font-mono uppercase font-bold text-sm sm:text-base md:text-xl text-[#EA301F]">
                    ${item.price}
                  </h1>
                  <button
                    className="bg-[#474747] hover:bg-white px-1 cursor-pointer"
                    title="Delete product"
                    aria-label="Delete product"
                    onClick={() => DeleteThisProduct(item.product._id)}
                  >
                    <i className="fa-solid fa-x fa-sm"></i>
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center mt-2">
            <h1 className="font-mono uppercase font-bold tracking-tighter text-[#FFFFE3] text-sm lg:text-xl sm:text-base">
              subtotal
            </h1>
            <h1 className="font-mono uppercase font-bold text-sm sm:text-base md:text-xl lg:text-xl text-[#EA301F]">
              ${totalPrice}
            </h1>
          </div>

          <div className="flex flex-col mt-2 mb-5">
            <Link href={`/Checkout/${cartId}`} className="text-center">
              <button
                type="button"
                className="font-mono uppercase font-bold tracking-tighter bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-200 mb-2 py-2 w-[60%] lg:w-[50%] lg:text-xl mx-auto text-sm sm:text-base"
              >
                Checkout
              </button>
            </Link>
            <button
              onClick={() => DeleteAllCart()}
              className="font-mono uppercase font-bold tracking-tighter cursor-pointer text-[#FFFFE3] border border-[#FFFFE3] hover:border-[#EA301F] hover:bg-[#EA301F] transition-all duration-200 py-2 w-[60%] lg:w-[50%] lg:text-xl mx-auto text-sm sm:text-base"
            >
              clear cart
            </button>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <h1 className="font-mono uppercase font-bold tracking-tighter text-[#FFFFE3] text-sm lg:text-3xl sm:text-base me-5">
            there's no products
          </h1>

          <button className="font-mono uppercase font-bold tracking-tighter bg-[#EA301F] text-[#FFFFE3] cursor-pointer hover:bg-[#FFFFE3] hover:text-[#000000] transition-all duration-200 mb-2 py-2 w-fit px-2 lg:text-xl  text-sm sm:text-base">
            <Link href={`/Products`}>continue shopping</Link>
          </button>
        </div>
      )}
    </>
  );
}
