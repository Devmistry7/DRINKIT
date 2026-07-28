export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-12 text-black">

        <h1 className="text-5xl font-black">
          Get Your Drinks
          <br />
          Delivered in Minutes 🍾
        </h1>

        <p className="mt-6 text-lg max-w-xl">
          Order whiskey, vodka, gin, rum, beer, wine and premium mixers
          delivered to your doorstep.
        </p>

        <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 transition">
          Shop Now
        </button>

      </div>
    </section>
  );
}