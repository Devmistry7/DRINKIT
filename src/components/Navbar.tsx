"use client";

import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] =
    useState(false);

  const { totalItems } = useCart();

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-white/[0.07] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Main Navbar */}
          <div className="flex h-[72px] items-center justify-between gap-4">

            {/* Logo */}
            <button
              type="button"
              className="group flex items-center"
            >
              <h1 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                DRINK
                <span className="text-green-400 transition-colors group-hover:text-green-300">
                  IT
                </span>
              </h1>
            </button>

            {/* Desktop Search */}
            <div className="hidden flex-1 justify-center md:flex">
              <div className="group flex w-full max-w-xl items-center rounded-full border border-white/[0.08] bg-white/[0.045] px-4 py-2.5 transition duration-300 focus-within:border-white/20 focus-within:bg-white/[0.07]">
                <Search
                  size={18}
                  className="shrink-0 text-neutral-500 transition group-focus-within:text-neutral-300"
                />

                <input
                  type="text"
                  placeholder="Search drinks, mixers and snacks..."
                  className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
                />

                <div className="ml-3 hidden rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-neutral-500 lg:block">
                  SEARCH
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">

              {/* Mobile Search */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileSearchOpen(
                    (current) => !current
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neutral-300 transition hover:bg-white/[0.08] hover:text-white md:hidden"
                aria-label="Search"
              >
                {isMobileSearchOpen ? (
                  <X size={19} />
                ) : (
                  <Search size={19} />
                )}
              </button>

              {/* Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="group relative flex h-10 items-center gap-2 rounded-xl bg-green-400 px-4 font-bold text-black transition duration-300 hover:bg-green-300 active:scale-[0.98] sm:px-5"
              >
                <ShoppingCart
                  size={19}
                  className="transition-transform duration-300 group-hover:-rotate-6"
                />

                <span className="hidden sm:inline">
                  Cart
                </span>

                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-black bg-red-500 px-1.5 text-[11px] font-black text-white shadow-lg">
                    {totalItems > 99
                      ? "99+"
                      : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isMobileSearchOpen
                ? "max-h-24 pb-4 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex items-center rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-3">
              <Search
                size={18}
                className="shrink-0 text-neutral-500"
              />

              <input
                type="text"
                placeholder="Search drinks, mixers and snacks..."
                autoFocus={isMobileSearchOpen}
                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
              />
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}