"use client";

import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { totalItems } = useCart();

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-neutral-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-3xl font-black">
            DRINK<span className="text-green-400">IT</span>
          </h1>

          <div className="hidden md:flex items-center bg-neutral-900 rounded-full px-4 py-2 w-full max-w-md mx-8">
            <Search size={18} className="text-neutral-500"/>

            <input
              className="bg-transparent ml-3 outline-none w-full"
              placeholder="Search drinks..."
            />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="relative bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full flex items-center gap-2 text-black font-bold"
          >
            <ShoppingCart />

            Cart

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

        </div>

      </nav>

      <CartDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}