import {
  Layers3,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    number: "01",
    title: "Simple Experience",
    text: "Browse products, select sizes and manage your cart with ease.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Curated Selection",
    text: "A clean catalogue of beverages, mixers and everyday favourites.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Demo Checkout",
    text: "A complete frontend checkout flow with validation and order review.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Modern Design",
    text: "A responsive interface built for a smooth and polished experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-green-400">
          The DRINKIT Experience
        </p>

        <h2 className="text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
          Why choose DRINKIT?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
          Designed around simplicity, convenience and
          a clean modern shopping experience.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/25 hover:bg-white/[0.045]"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/0 blur-3xl transition-all duration-500 group-hover:bg-green-400/10" />

              <div className="relative">
                
                {/* Icon + Number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/10 bg-green-400/10 text-green-400 transition-all duration-300 group-hover:bg-green-400 group-hover:text-black">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-black tracking-[0.15em] text-neutral-700 transition-colors group-hover:text-green-400/50">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                    {feature.text}
                  </p>
                </div>

                {/* Accent Line */}
                <div className="mt-8 h-px overflow-hidden bg-white/[0.06]">
                  <div className="h-full w-8 bg-green-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Statement */}
      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-xs font-medium text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Built for a fast, clean and intuitive demo experience
        </div>
      </div>
    </section>
  );
}