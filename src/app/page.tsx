import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealsBanner from "@/components/DealsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts />

      <DealsBanner />

      <WhyChooseUs />

      <Footer />

    </main>
  );
}