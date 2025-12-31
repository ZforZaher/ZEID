import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black relative bottom-0 left-0 right-0 text-[#FFFFE3] px-10 py-5 font-mono mt-10 shadow-[0_-10px_30px_rgba(255,255,255,0.15)]">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Left info */}
        <div className="flex gap-x-5">
          <div className="flex flex-col font-bold ">
            <h1 className="font-mono text-3xl leading-5">ZÉID</h1>
            <span className="font-serif italic text-[#EA301F] text-xl font-normal">
              e-commerce
            </span>
          </div>

          <div>
            <div className="text-sm  uppercase">
              <p className="text-[#EA301F] font-bold mb-2">Contact Us</p>
              <p className="font-bold">RAW STUDIO</p>
              <p className="text-xs font-bold">12 FORGE LANE, RIVERTON</p>
              <p className="text-xs font-bold">FICTIONLAND 00000</p>
            </div>

            <div className="text-sm mt-3 ">
              <p className="shop flex items-center">
                HELLO@RAW.EXAMPLE{" "}
                <span>
                  <i className="fa-solid fa-arrow-right fa-sm ms-1"></i>
                </span>
              </p>
              <p className="shop flex items-center ">
                +1 (555) 010-2025{" "}
                <span>
                  <i className="fa-solid fa-arrow-right fa-sm ms-1"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right subscribe */}
        <div className="flex-1 max-w-xl uppercase">
          <p className="text-sm mb-6 font-bold">
            Join to receive exclusive offers and 15% off your first order.
          </p>

          <label className="block text-xs mb-2 ">Your email address</label>

          <div className="border-b border-t border-[#EA301F] flex items-center justify-between py-1 pe-1">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent outline-none text-sm w-full font-bold placeholder:text-[#EA301F]"
            />
            <button className="text-sm font-bold ml-4">SEND</button>
          </div>
        </div>
      </div>

      {/* Middle navigation */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-5 uppercase text-sm">
        <Link href="/">
          <div className="border border-[#FFFFE3] hover:bg-[#EA301F] hover:border-[#EA301F] py-2 text-center cursor-pointer transition-all duration-300">
            Home
          </div>
        </Link>
        <Link href="/Products">
          <div className="border border-[#FFFFE3] hover:bg-[#EA301F] hover:border-[#EA301F] py-2 text-center cursor-pointer transition-all duration-300">
            Products
          </div>
        </Link>
        <Link href="/Categories">
          <div className="border border-[#FFFFE3] hover:bg-[#EA301F] hover:border-[#EA301F] py-2 text-center cursor-pointer transition-all duration-300">
            Categories
          </div>
        </Link>
        <Link href="/Brands">
          <div className="border border-[#FFFFE3] hover:bg-[#EA301F] hover:border-[#EA301F] py-2 text-center cursor-pointer transition-all duration-300">
            Brands
          </div>
        </Link>
        <Link href="/Cart">
          <div className="border border-[#FFFFE3] hover:bg-[#EA301F] hover:border-[#EA301F] py-2 text-center cursor-pointer transition-all duration-300">
            Cart
          </div>
        </Link>
        <Link href="/Wishlist">
          <div className="border border-[#FFFFE3] hover:bg-[#EA301F] hover:border-[#EA301F] py-2 text-center cursor-pointer transition-all duration-300">
            Wishlist
          </div>
        </Link>
      </div>

      {/* Bottom links */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 text-xs uppercase gap-6">
        <div className="flex gap-6 ms-5 font-bold">
          <span className="hover:border-b hover:border-b-[#FFFFE3] border-b border-b-transparent transition-all duration-300 cursor-pointer ">
            X
          </span>
          <span className="hover:border-b hover:border-b-[#FFFFE3] border-b border-b-transparent transition-all duration-300 cursor-pointer ">
            Facebook
          </span>
          <span className="hover:border-b hover:border-b-[#FFFFE3] border-b border-b-transparent transition-all duration-300 cursor-pointer ">
            Instagram
          </span>
        </div>

        <div className="flex items-center gap-2 hover:border-b hover:border-b-[#FFFFE3] border-b border-b-transparent transition-all duration-300 cursor-pointer">
          USD
        </div>

        <div className="flex gap-6">
          <span className="hover:border-b hover:border-b-[#FFFFE3] border-b border-b-transparent transition-all duration-300 cursor-pointer ">
            Privacy Policy
          </span>
          <span className="hover:border-b hover:border-b-[#FFFFE3] border-b border-b-transparent transition-all duration-300 cursor-pointer ">
            Terms & Condition
          </span>
        </div>

        <div>© 2025 ZÉID e-commerce STORE</div>
      </div>
    </footer>
  );
}
