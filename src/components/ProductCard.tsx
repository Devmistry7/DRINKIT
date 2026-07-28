"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  sizes: {
    label: string;
    price: number;
  }[];
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize.label,
      price: selectedSize.price,
    });
  }

  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-green-500 transition duration-300 hover:-translate-y-1">

      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          POPULAR
        </span>
      </div>

      <div className="p-5">

        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="text-neutral-400 mt-1">
          {product.category}
        </p>

        <p className="text-green-400 text-2xl font-bold mt-4">
          ₹{selectedSize.price}
        </p>

        <select
          value={selectedSize.label}
          onChange={(e) =>
            setSelectedSize(
              product.sizes.find(
                (size) => size.label === e.target.value
              ) || product.sizes[0]
            )
          }
          className="w-full bg-neutral-800 rounded-xl p-3 mt-4 outline-none"
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

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl transition"
        >
          ADD TO CART
        </button>

      </div>
    </div>
  );
}