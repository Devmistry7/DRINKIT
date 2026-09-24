"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Search,
  ShoppingCart,
  X,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { products } from "@/data/products";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] =
    useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const { totalItems } = useCart();

  /* ================================
     SEARCH
     ================================ */

  const normalizedQuery = searchQuery
    .trim()
    .toLowerCase();

  const searchResults =
    normalizedQuery.length > 0
      ? products
          .filter((product) => {
            const searchableText =
              `${product.name} ${product.category}`.toLowerCase();

            return searchableText.includes(
              normalizedQuery
            );
          })
          .slice(0, 6)
      : [];

  const showResults =
    isSearchFocused &&
    normalizedQuery.length > 0;

  /* ================================
     CLOSE SEARCH WHEN CLICKING OUTSIDE
     ================================ */

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target as Node
        )
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* ================================
     ESCAPE KEY
     ================================ */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsSearchFocused(false);
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* ================================
     CLEAR SEARCH
     ================================ */

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchFocused(false);
  };

  /* ================================
     PRODUCT CLICK
     ================================ */

  const handleProductClick = (
    productId: number
  ) => {
    clearSearch();
    setIsMobileSearchOpen(false);

    const productElement =
      document.getElementById(
        `product-${productId}`
      );

    if (productElement) {
      productElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      window.setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent(
            "drinkit:highlight-product",
            {
              detail: productId,
            }
          )
        );
      }, 450);
    } else {
      document
        .getElementById("featured-products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };

  /* ================================
     SEARCH RESULTS
     ================================ */

  const renderSearchResults = () => {
    if (!showResults) {
      return null;
    }

    return (
      <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b0b]/95 shadow-2xl shadow-black/60 backdrop-blur-xl">
        {searchResults.length > 0 ? (
          <>
            {/* Header */}
            <div className="border-b border-white/[0.06] px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                Search Results
              </p>
            </div>

            {/* Results */}
            <div className="max-h-[390px] overflow-y-auto cart-scrollbar">
              {searchResults.map((product) => {
                const startingPrice = Math.min(
                  ...product.sizes.map(
                    (size) => size.price
                  )
                );

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() =>
                      handleProductClick(
                        product.id
                      )
                    }
                    className="group flex w-full items-center gap-3 border-b border-white/[0.05] px-4 py-3 text-left transition last:border-b-0 hover:bg-white/[0.05]"
                  >
                    {/* Image */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.04]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-white transition group-hover:text-green-400">
                        {product.name}
                      </p>

                      <p className="mt-1 text-xs text-neutral-500">
                        {product.category}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 text-right">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-600">
                        From
                      </p>

                      <p className="mt-0.5 text-sm font-black text-green-400">
                        ₹
                        {startingPrice.toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Result Count */}
            <div className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
              <p className="text-center text-[11px] text-neutral-600">
                {searchResults.length} product
                {searchResults.length !== 1
                  ? "s"
                  : ""}{" "}
                found
              </p>
            </div>
          </>
        ) : (
          /* No Results */
          <div className="px-6 py-8 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.05]">
              <Search
                size={18}
                className="text-neutral-500"
              />
            </div>

            <p className="mt-3 text-sm font-bold text-white">
              No products found
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              Try searching for another product
              or category.
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-white/[0.07] bg-black/80 backdrop-blur-xl">
        <div
          ref={searchRef}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* ================================
              MAIN NAVBAR
              ================================ */}

          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* Logo */}
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center"
            >
              <h1 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                DRINK
                <span className="text-green-400 transition-colors group-hover:text-green-300">
                  IT
                </span>
              </h1>
            </button>

            {/* ================================
                DESKTOP SEARCH
                ================================ */}

            <div className="relative hidden flex-1 justify-center md:flex">
              <div className="group flex w-full max-w-xl items-center rounded-full border border-white/[0.08] bg-white/[0.045] px-4 py-2.5 transition duration-300 focus-within:border-green-400/30 focus-within:bg-white/[0.07]">
                <Search
                  size={18}
                  className="shrink-0 text-neutral-500 transition group-focus-within:text-green-400"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(
                      event.target.value
                    );
                    setIsSearchFocused(true);
                  }}
                  onFocus={() =>
                    setIsSearchFocused(true)
                  }
                  placeholder="Search products or categories..."
                  className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
                />

                {searchQuery ? (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-neutral-500 transition hover:bg-white/[0.07] hover:text-white"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                ) : (
                  <div className="ml-3 hidden rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-neutral-500 lg:block">
                    SEARCH
                  </div>
                )}
              </div>

              {/* Desktop Results */}
              <div className="absolute left-1/2 top-full w-full max-w-xl -translate-x-1/2">
                {renderSearchResults()}
              </div>
            </div>

            {/* ================================
                RIGHT ACTIONS
                ================================ */}

            <div className="flex items-center gap-2">
              {/* Mobile Search Button */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileSearchOpen(
                    (current) => !current
                  );

                  setIsSearchFocused(true);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-neutral-300 transition hover:bg-white/[0.08] hover:text-white md:hidden"
                aria-label="Search"
              >
                {isMobileSearchOpen ? (
                  <X size={19} />
                ) : (
                  <Search size={19} />
                )}
              </button>

              {/* Cart */}
              <button
                type="button"
                onClick={() =>
                  setIsCartOpen(true)
                }
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

          {/* ================================
              MOBILE SEARCH
              ================================ */}

          <div
            className={`relative transition-all duration-300 md:hidden ${
              isMobileSearchOpen
                ? "pb-4 opacity-100"
                : "pointer-events-none h-0 overflow-hidden opacity-0"
            }`}
          >
            <div className="flex items-center rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 py-3 focus-within:border-green-400/30">
              <Search
                size={18}
                className="shrink-0 text-neutral-500"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(
                    event.target.value
                  );
                  setIsSearchFocused(true);
                }}
                onFocus={() =>
                  setIsSearchFocused(true)
                }
                placeholder="Search products or categories..."
                autoFocus={isMobileSearchOpen}
                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="ml-2 text-neutral-500 transition hover:text-white"
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Mobile Results */}
            {renderSearchResults()}
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        open={isCartOpen}
        onClose={() =>
          setIsCartOpen(false)
        }
      />
    </>
  );
}