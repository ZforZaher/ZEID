"use client";
import React, { use, useContext } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { cartItemContext } from "../../Context/cartContext";

export default function Navbar() {
  let { data: session, status } = useSession();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  let context = useContext(cartItemContext);
  if (!context) {
    throw new Error("Not Exist");
  }
  let { dataDetails } = context;

  function Logout() {
    signOut({ callbackUrl: "/" });
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-3 md:py-5 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#111111] py-2 px-3 md:px-4 w-[90%] lg:w-[75%] xl:w-[55%] transition-all duration-500 mx-auto text-[#FFFFE3] flex items-center justify-between font-mono border border-[#787878] fade-in">
        {/* Logo - Left side */}
        <h1 className="cursor-pointer font-bold text-xl md:text-2xl me-3">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            ZÉID
          </Link>
        </h1>

        {/* Desktop Navigation (hidden on mobile) */}
        {/* Desktop Navigation (hidden on mobile) */}
        <ul className="hidden md:flex justify-between items-center gap-3 lg:gap-3 cursor-pointer uppercase">
          <li
            className={`hover:text-[#EA301F] font-bold transition-all duration-300 ${
              path == "/" ? "active" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hover:text-[#EA301F] font-bold transition-all duration-300 ${
              path == "/Products" ? "active" : ""
            }`}
          >
            <Link href="/Products">Products</Link>
          </li>
          <li
            className={`hover:text-[#EA301F] font-bold transition-all duration-300 ${
              path == "/Categories" ? "active" : ""
            }`}
          >
            <Link href="/Categories">Categories</Link>
          </li>
          <li
            className={`hover:text-[#EA301F] font-bold transition-all duration-300 ${
              path == "/Brands" ? "active" : ""
            }`}
          >
            <Link href="/Brands">Brands</Link>
          </li>
        </ul>

        {/* Right side icons and buttons */}
        <div className="flex items-center gap-3 md:gap-4 ">
          {/* Search and Heart icons - shown on both mobile and desktop */}

          <div className="flex relative">
            {session && (
              <>
                <Link href="/Cart">
                  <span className="hover:text-[#EA301F] transition-all duration-300 cursor-pointer">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                </Link>
                <p className="cursor-pointer text-[#EA301F] text-sm absolute -top-2.5 -right-2.5 ">
                  {dataDetails}
                </p>
              </>
            )}
          </div>
          {session && (
            <>
              <Link href="/Wishlist">
                <span className="hover:text-[#EA301F] transition-all duration-300 cursor-pointer">
                  <i className="fa-regular fa-heart"></i>
                </span>
              </Link>
            </>
          )}

          {/* Login/Logout button - Desktop */}
          {session ? (
            <button
              onClick={() => Logout()}
              className="hidden md:block ms-1 px-2 py-2 bg-[#EA301F] hover:bg-transparent border-[#FFFFE3] border hover:border-[#FFFFE3] transition-all duration-300 font-mono uppercase text-lg font-bold cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link href="/Login">
              <button className="hidden md:block ms-1 px-2 py-2 bg-[#EA301F] hover:bg-transparent border-[#FFFFE3] border hover:border-[#FFFFE3] transition-all duration-300 font-mono uppercase text-lg font-bold cursor-pointer">
                Login
              </button>
            </Link>
          )}

          {/* Mobile Hamburger button (hidden on desktop) */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111111] w-[90%] mx-auto mt-2 py-3 px-4 font-mono border border-opacity-50 border-[#787878]">
          <ul className="flex flex-col gap-3 cursor-pointer uppercase">
            <li
              className={`hover:text-[#EA301F] text-[#FFFFE3] font-bold transition-all duration-300 py-1 ${
                path == "/" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`hover:text-[#EA301F] text-[#FFFFE3] font-bold transition-all duration-300 py-1 ${
                path == "/Products" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/Products">Products</Link>
            </li>
            <li
              className={`hover:text-[#EA301F] text-[#FFFFE3] font-bold transition-all duration-300 py-1 ${
                path == "/Categories" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/Categories">Categories</Link>
            </li>
            <li
              className={`hover:text-[#EA301F] text-[#FFFFE3] font-bold transition-all duration-300 py-1 ${
                path == "/Brands" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/Brands">Brands</Link>
            </li>
            {/* Login/Logout button in mobile menu */}
            <li className="pt-2 mt-2 border-t border-opacity-50 border-[#FFFFE3]">
              {session ? (
                <button
                  className="w-full px-2 py-2 text-[#FFFFE3] bg-[#EA301F] hover:bg-transparent border-[#FFFFE3] border hover:border-[#FFFFE3] transition-all duration-300 font-mono uppercase font-bold cursor-pointer"
                  onClick={() => {
                    Logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link href="/Login">
                  <button
                    className="w-full px-2 py-2 text-[#FFFFE3] bg-[#EA301F] hover:bg-transparent border-[#FFFFE3] border hover:border-[#FFFFE3] transition-all duration-300 font-mono uppercase font-bold cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// ZÉID
// Red: #EA301F
// Black: #000000
// Black 2: #111111
// White: #FFFFFF
// Creamy White: #FFFFE3
