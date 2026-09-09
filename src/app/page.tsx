import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealsBanner from "@/components/DealsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="relative">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
          <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />
          <div className="absolute right-[-120px] top-[260px] h-[360px] w-[360px] rounded-full bg-white/[0.025] blur-3xl" />
        </div>

        <Navbar />

        <section className="relative">
          <Hero />
        </section>

        <section className="relative border-t border-white/[0.05]">
          <Categories />
        </section>

        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-white/[0.025] to-transparent" />
          <FeaturedProducts />
        </section>

        <section className="relative py-2 sm:py-4">
          <DealsBanner />
        </section>

        <section className="relative border-y border-white/[0.05] bg-white/[0.015]">
          <WhyChooseUs />
        </section>

        <Footer />
      </div>
    </main>
  );
}