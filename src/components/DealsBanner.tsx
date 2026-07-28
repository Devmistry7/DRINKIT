export default function DealsBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-emerald-700 p-12">

        <div className="max-w-2xl">

          <span className="bg-white text-green-700 px-4 py-2 rounded-full font-bold">
            LIMITED TIME
          </span>

          <h2 className="text-5xl font-black text-white mt-6">
            Up to 40% OFF
          </h2>

          <p className="text-green-100 mt-4 text-xl">
            Premium whiskies, vodkas, wines and cocktail mixers.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Shop Now
          </button>

        </div>

      </div>

    </section>
  );
}