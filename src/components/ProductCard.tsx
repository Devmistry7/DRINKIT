"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
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
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-4 transition hover:-translate-y-1 hover:border-green-500">
      {product.popular && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
          POPULAR
        </span>
      )}

      <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl bg-neutral-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      <p className="mb-1 text-sm text-neutral-400">
        {product.category}
      </p>

      <h3 className="mb-3 text-xl font-bold">
        {product.name}
      </h3>

      <select
        value={selectedSize.label}
        onChange={(event) => {
          const size = product.sizes.find(
            (item) => item.label === event.target.value
          );

          if (size) {
            setSelectedSize(size);
          }
        }}
        className="mb-4 w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-white outline-none"
      >
        {product.sizes.map((size) => (
          <option key={size.label} value={size.label}>
            {size.label} — ₹{size.price}
          </option>
        ))}
      </select>

      <div className="flex items-center justify-between gap-3">
        <span className="text-xl font-bold text-green-400">
          ₹{selectedSize.price}
        </span>

        <button
          type="button"
          onClick={handleAddToCart}
          className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 font-bold text-black transition hover:bg-green-600"
        >
          <ShoppingCart size={18} />
          Add
        </button>
      </div>
    </div>
  );
}