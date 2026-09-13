import {
  CupSoda,
  GlassWater,
  Popcorn,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    name: "Beverages",
    description: "Explore refreshing picks",
    icon: CupSoda,
  },
  {
    name: "Mixers",
    description: "Perfect pairings & blends",
    icon: GlassWater,
  },
  {
    name: "Snacks",
    description: "Something to munch on",
    icon: Popcorn,
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Section Heading */}
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
            Explore
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base">
            Find what you&apos;re looking for faster with
            our most popular categories.
          </p>
        </div>

        <p className="hidden text-sm text-neutral-600 sm:block">
          3 categories
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              type="button"
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.045]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-400/0 blur-3xl transition duration-500 group-hover:bg-green-400/10" />

              <div className="relative">
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05] text-green-400 transition-all duration-300 group-hover:border-green-400/20 group-hover:bg-green-400 group-hover:text-black">
                    <Icon size={22} />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] text-neutral-600 transition-all duration-300 group-hover:border-green-400/30 group-hover:text-green-400">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">
                    {category.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 h-px w-full overflow-hidden bg-white/[0.06]">
                  <div className="h-full w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}