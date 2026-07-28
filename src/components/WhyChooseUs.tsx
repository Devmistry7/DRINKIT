import {
  Truck,
  ShieldCheck,
  Clock3,
  Wine,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "10 Minute Delivery",
    text: "Fast delivery to your doorstep."
  },
  {
    icon: Wine,
    title: "Premium Brands",
    text: "Only authentic beverages."
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Safe and encrypted checkout."
  },
  {
    icon: Truck,
    title: "Live Tracking",
    text: "Track every order in real time."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-black text-center mb-12">
        Why Choose DRINKIT?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-neutral-900 rounded-3xl p-8 text-center border border-neutral-800 hover:border-green-500 transition"
            >
              <Icon
                size={50}
                className="mx-auto text-green-400"
              />

              <h3 className="text-xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-neutral-400 mt-3">
                {feature.text}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}