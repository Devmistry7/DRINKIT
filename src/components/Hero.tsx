"use client";

import {
  ArrowRight,
  Clock3,
  Sparkles,
  Truck,
} from "lucide-react";

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection =
      document.getElementById("featured-products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="relative overflow-hidden rounded-[32px] border border-green-400/20 bg-gradient-to-br from-green-400 via-green-400 to-emerald-500">

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute -bottom-32 left-[25%] h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="absolute right-[8%] top-[20%] h-44 w-44 rotate-12 rounded-[40px] border border-black/10 bg-black/[0.04]" />

          <div className="absolute right-[18%] top-[45%] h-28 w-28 -rotate-12 rounded-full border border-white/20 bg-white/10" />
        </div>

        <div className="relative grid min-h-[500px] items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-16">

          {/* Left Content */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black">
              <Sparkles size={14} />
              Fast • Fresh • Convenient
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-black sm:text-5xl lg:text-7xl">
              Refreshment,
              <br />
              delivered differently.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-black/70 sm:text-lg">
              Discover refreshing beverages, mixers,
              snacks and everyday favourites in one
              clean and convenient storefront.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={scrollToProducts}
                className="group flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-neutral-900 active:scale-[0.98]"
              >
                Explore Products

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("categories")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="rounded-xl border border-black/15 bg-black/[0.06] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-black/10"
              >
                Browse Categories
              </button>
            </div>

            {/* Small feature row */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-black/65">
              <div className="flex items-center gap-2">
                <Clock3 size={17} />
                Quick browsing
              </div>

              <div className="flex items-center gap-2">
                <Truck size={17} />
                Demo delivery flow
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden min-h-[380px] lg:block">

            {/* Main floating card */}
            <div className="absolute left-1/2 top-1/2 w-[290px] -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-[32px] border border-black/10 bg-black p-7 text-white shadow-2xl shadow-black/20 transition-transform duration-500 hover:rotate-0">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                DRINKIT
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight">
                Your favourites.
                <br />
                One place.
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.07] p-4">
                  <p className="text-2xl font-black text-green-400">
                    01
                  </p>

                  <p className="mt-1 text-xs text-neutral-400">
                    Pick products
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.07] p-4">
                  <p className="text-2xl font-black text-green-400">
                    02
                  </p>

                  <p className="mt-1 text-xs text-neutral-400">
                    Add to cart
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl bg-green-400 p-4 text-black">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Simple experience
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Browse → Cart → Demo checkout
                  </p>
                </div>
              </div>
            </div>

            {/* Floating mini elements */}
            <div className="absolute left-2 top-10 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-bold text-black">
                Fresh Picks ✨
              </p>
            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-black/10 bg-black px-4 py-3 text-white shadow-xl">
              <p className="text-xs font-bold">
                Fast & Simple
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}