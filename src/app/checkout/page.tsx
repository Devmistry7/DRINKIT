"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Package,
  ShieldCheck,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee =
    subtotal >= 2000 || subtotal === 0
      ? 0
      : 49;

  const platformFee =
    cart.length > 0 ? 10 : 0;

  const grandTotal =
    subtotal + deliveryFee + platformFee;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-neutral-800 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-neutral-300 transition hover:text-white"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </button>

          <h1 className="text-2xl font-black">
            DRINK
            <span className="text-green-400">
              IT
            </span>
          </h1>

          <div className="hidden items-center gap-2 text-sm text-neutral-400 md:flex">
            <ShieldCheck
              size={18}
              className="text-green-400"
            />

            Checkout
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_420px]">
        {/* Left Side */}
        <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h2 className="text-3xl font-bold">
            Checkout
          </h2>

          <p className="mt-2 text-neutral-400">
            Delivery details and payment options
            will be added in the next step.
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-neutral-700 p-10 text-center text-neutral-500">
            Checkout form coming next
          </div>
        </section>

        {/* Order Summary */}
        <aside>
          <div className="sticky top-28 rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="mb-6 flex items-center gap-3">
              <Package className="text-green-400" />

              <div>
                <h2 className="text-xl font-bold">
                  Order Summary
                </h2>

                <p className="text-sm text-neutral-400">
                  {totalItems} item
                  {totalItems !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <div className="cart-scrollbar max-h-72 space-y-4 overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <p className="py-8 text-center text-neutral-500">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">
                        {item.name}
                      </p>

                      <p className="text-sm text-neutral-400">
                        {item.size} ×{" "}
                        {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold">
                      ₹
                      {item.price *
                        item.quantity}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="my-6 border-t border-neutral-800" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Delivery Fee
                </span>

                <span
                  className={
                    deliveryFee === 0
                      ? "text-green-400"
                      : ""
                  }
                >
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Platform Fee
                </span>

                <span>
                  ₹{platformFee}
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-neutral-800" />

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">
                Total
              </span>

              <span className="text-3xl font-black text-green-400">
                ₹{grandTotal}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}