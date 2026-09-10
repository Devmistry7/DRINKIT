"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

type ProductSize = {
  label: string;
  price: number;
};

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  sizes: ProductSize[];
  popular?: boolean;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize.label,
      price: selectedSize.price,
    });
  };

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.16] hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/30">

      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute left-6 top-6 z-20 flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black shadow-lg shadow-green-500/10">
          <Sparkles size={12} />
          Popular
        </div>
      )}

      {/* Product Image */}
      <div className="relative mb-5 h-56 w-full overflow-hidden rounded-2xl border border-white/[0.05] bg-gradient-to-b from-neutral-900 to-neutral-950 sm:h-60">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" />

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div>
        <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
          {product.category}
        </p>

        <h3 className="min-h-[56px] text-xl font-bold leading-tight tracking-tight text-white">
          {product.name}
        </h3>
      </div>

      {/* Size Selector */}
      <div className="mt-4">
        <label className="mb-2 block text-xs font-medium text-neutral-500">
          Select size
        </label>

        <div className="relative">
          <select
            value={selectedSize.label}
            onChange={(event) => {
              const size = product.sizes.find(
                (item) =>
                  item.label === event.target.value
              );

              if (size) {
                setSelectedSize(size);
              }
            }}
            className="w-full cursor-pointer appearance-none rounded-xl border border-white/[0.08] bg-neutral-900 px-4 py-3 pr-10 text-sm font-medium text-white outline-none transition focus:border-white/20 focus:bg-neutral-900"
          >
            {product.sizes.map((size) => (
              <option
                key={size.label}
                value={size.label}
              >
                {size.label} — ₹{size.price}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
            ▼
          </div>
        </div>
      </div>

      {/* Price + Add Button */}
      <div className="mt-5 flex items-end justify-between gap-4">

        <div>
          <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-neutral-600">
            Price
          </p>

          <p className="text-2xl font-black tracking-tight text-green-400">
            ₹{selectedSize.price}
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="group/button flex items-center gap-2 rounded-xl bg-green-400 px-4 py-3 text-sm font-black text-black transition-all duration-300 hover:bg-green-300 active:scale-[0.97]"
        >
          <ShoppingCart
            size={17}
            className="transition-transform duration-300 group-hover/button:-rotate-6"
          />

          Add
        </button>
      </div>
    </article>
  );
}