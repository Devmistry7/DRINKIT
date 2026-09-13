import { ArrowRight, Flame } from "lucide-react";

import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/10 text-green-400">
              <Flame size={16} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              Trending Now
            </p>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Featured Products
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
            Handpicked favourites from our demo beverage
            storefront, selected to showcase the best of
            DRINKIT.
          </p>
        </div>

        <button
          type="button"
          className="group flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-neutral-300 transition hover:border-green-400/20 hover:bg-green-400/10 hover:text-green-400"
        >
          View All

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}