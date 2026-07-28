const categories = [
  "Alcohol",
  "Mixers",
  "Snacks",
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">

      <h2 className="text-3xl font-bold mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {categories.map((category) => (
          <div
            key={category}
            className="bg-neutral-900 rounded-2xl hover:bg-green-500 transition p-8 text-center cursor-pointer"
          >
            <h3 className="font-bold">{category}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}