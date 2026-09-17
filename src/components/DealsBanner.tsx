"use client";

import {
  ArrowRight,
  BadgePercent,
  Sparkles,
  Zap,
} from "lucide-react";

export default function DealsBanner() {
  const scrollToProducts = () => {
    document
      .getElementById("featured-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="group relative overflow-hidden rounded-[32px] border border-green-400/20 bg-green-400">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute -bottom-32 left-[25%] h-72 w-72 rounded-full bg-emerald-700/20 blur-3xl" />

          <div className="absolute right-[8%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rotate-12 rounded-[50px] border border-black/10 bg-black/[0.04] lg:block" />

          <div className="absolute right-[17%] top-[18%] hidden h-24 w-24 rounded-full border border-black/10 bg-white/10 lg:block" />
        </div>

        <div className="relative grid min-h-[420px] items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">
              <Zap size={14} />
              Limited Time
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
              Deals worth
              <br />
              checking out.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-black/65 sm:text-lg">
              Explore selected beverages, mixers and
              snacks featured in our demo storefront.
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={scrollToProducts}
              className="group/button mt-8 flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-neutral-900 active:scale-[0.98]"
            >
              Explore Deals

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </button>

            {/* Bottom Info */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-black/50">
              <span className="flex items-center gap-2">
                <Sparkles size={14} />
                Selected Picks
              </span>

              <span className="flex items-center gap-2">
                <BadgePercent size={14} />
                Demo Offers
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden min-h-[300px] lg:block">

            {/* Main Deal Card */}
            <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-[30px] bg-black p-7 text-white shadow-2xl shadow-black/25 transition-transform duration-500 group-hover:rotate-0">

              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Featured Deal
                </p>

                <BadgePercent
                  size={20}
                  className="text-green-400"
                />
              </div>

              <div className="mt-8">
                <p className="text-6xl font-black tracking-[-0.06em] text-green-400">
                  40%
                </p>

                <p className="mt-1 text-2xl font-black">
                  OFF
                </p>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <p className="text-sm leading-6 text-neutral-400">
                Selected products featured in this
                demo storefront.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />

                <p className="text-xs font-semibold text-neutral-300">
                  Limited demo promotion
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-0 rotate-6 rounded-2xl border border-black/10 bg-white px-5 py-3 text-black shadow-xl transition-transform duration-500 group-hover:rotate-3">
              <p className="text-xs font-black uppercase tracking-wider">
                Save More ✦
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}