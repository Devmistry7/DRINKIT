"use client";

import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="sticky top-0 z-30 border-b border-neutral-800 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <h1 className="text-3xl font-black tracking-tight text-white">
            DRINK<span className="text-green-400">IT</span>
          </h1>

          <div className="hidden w-full max-w-md items-center rounded-full bg-neutral-900 px-4 py-2 md:flex">
            <Search size={18} className="text-neutral-400" />

            <input
              type="text"
              placeholder="Search drinks, mixers and snacks..."
              className="ml-3 w-full bg-transparent text-white outline-none placeholder:text-neutral-500"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2 font-bold text-black transition hover:bg-green-600"
          >
            <ShoppingCart size={20} />
            Cart

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}