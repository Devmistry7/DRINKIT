import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between mb-10">

        <div>
          <h2 className="text-4xl font-black">
            🔥 Featured Products
          </h2>

          <p className="text-neutral-400 mt-2">
            Handpicked premium beverages
          </p>
        </div>

        <button className="text-green-400 hover:text-green-300 font-semibold">
          View All →
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

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