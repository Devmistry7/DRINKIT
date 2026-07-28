export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="text-2xl font-black">
            DRINK<span className="text-green-400">IT</span>
          </h3>
          <p className="text-neutral-400 mt-1">
            Premium beverage delivery in minutes.
          </p>
        </div>

        <p className="text-neutral-500 text-sm">
          © 2026 DRINKIT. All rights reserved.
        </p>

      </div>
    </footer>
  );
}