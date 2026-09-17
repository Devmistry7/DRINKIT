import {
  ArrowUp,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-black">

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[-180px] left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-green-400/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/[0.07] pb-12 md:grid-cols-[1.4fr_0.6fr_0.6fr]">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black tracking-[-0.045em] text-white">
              DRINK
              <span className="text-green-400">
                IT
              </span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
              A modern demo beverage storefront built
              around a fast, clean and intuitive
              shopping experience.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs font-medium text-neutral-500">
              <Sparkles
                size={13}
                className="text-green-400"
              />

              Built as a frontend demo project
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">
              Explore
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="#categories"
                className="text-sm text-neutral-400 transition hover:text-green-400"
              >
                Categories
              </a>

              <a
                href="#featured-products"
                className="text-sm text-neutral-400 transition hover:text-green-400"
              >
                Featured Products
              </a>

              <a
                href="#featured-products"
                className="text-sm text-neutral-400 transition hover:text-green-400"
              >
                Browse Products
              </a>
            </div>
          </div>

          {/* Project */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">
              Project
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <span className="text-sm text-neutral-400">
                Next.js
              </span>

              <span className="text-sm text-neutral-400">
                TypeScript
              </span>

              <span className="text-sm text-neutral-400">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-neutral-600">
            © 2026 DRINKIT. Demo project.
          </p>

          <div className="flex items-center gap-4">

            <p className="flex items-center gap-1.5 text-xs text-neutral-600">
              Designed with
              <Heart
                size={12}
                className="text-green-400"
              />
              for the web
            </p>

            {/* Back To Top */}
            <a
              href="#"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-neutral-500 transition-all hover:border-green-400/20 hover:bg-green-400 hover:text-black"
            >
              <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}