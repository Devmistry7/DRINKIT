"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const {
    cart,
    subtotal,
    totalItems,
  } = useCart();

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
      {/* HEADER */}
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

            Secure Checkout
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_420px]">
        {/* LEFT SIDE */}
        <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h2 className="text-3xl font-bold">
            Checkout
          </h2>

          <p className="mt-2 text-neutral-400">
            Review your order before continuing.
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-neutral-700 p-10 text-center">
            <Package
              size={48}
              className="mx-auto text-neutral-600"
            />

            <h3 className="mt-4 text-xl font-semibold">
              Delivery Details
            </h3>

            <p className="mt-2 text-neutral-500">
              Address and delivery form will be
              added in the next step.
            </p>
          </div>
        </section>

        {/* ORDER SUMMARY */}
        <aside>
          <div className="sticky top-28 rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            {/* Summary Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-green-500/10 p-3">
                <Package className="text-green-400" />
              </div>

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

            {/* PRODUCTS */}
            <div className="cart-scrollbar max-h-80 space-y-4 overflow-y-auto pr-2">
              {cart.length === 0 ? (
                <div className="py-10 text-center">
                  <Package
                    size={42}
                    className="mx-auto text-neutral-700"
                  />

                  <p className="mt-3 text-neutral-500">
                    Your cart is empty.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      router.push("/")
                    }
                    className="mt-4 text-sm font-semibold text-green-400 transition hover:text-green-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="rounded-xl border border-neutral-800 bg-neutral-900 p-3"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">
                          {item.name}
                        </p>

                        <p className="mt-1 text-sm text-neutral-400">
                          {item.size}
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-bold">
                          ₹
                          {item.price *
                            item.quantity}
                        </p>

                        {item.quantity > 1 && (
                          <p className="mt-1 text-xs text-neutral-500">
                            ₹{item.price} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* BILL DIVIDER */}
            <div className="my-6 border-t border-neutral-800" />

            {/* BILL DETAILS */}
            <div>
              <h3 className="mb-4 font-semibold">
                Bill Details
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">
                    Item Total
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
                        ? "font-semibold text-green-400"
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
            </div>

            {/* FREE DELIVERY MESSAGE */}
            {subtotal > 0 &&
              subtotal < 2000 && (
                <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-3">
                  <p className="text-sm text-green-400">
                    Add ₹{2000 - subtotal} more
                    for free delivery.
                  </p>
                </div>
              )}

            {subtotal >= 2000 && (
              <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-3">
                <div className="flex items-center gap-2">
                  <Truck
                    size={17}
                    className="text-green-400"
                  />

                  <p className="text-sm font-semibold text-green-400">
                    You've unlocked free delivery!
                  </p>
                </div>
              </div>
            )}

            {/* TOTAL DIVIDER */}
            <div className="my-5 border-t border-neutral-800" />

            {/* GRAND TOTAL */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">
                  Grand Total
                </p>

                <p className="text-xs text-neutral-500">
                  Including all charges
                </p>
              </div>

              <span className="text-3xl font-black text-green-400">
                ₹{grandTotal}
              </span>
            </div>

            {/* NEXT BUTTON */}
            <button
              type="button"
              disabled={cart.length === 0}
              className="mt-6 w-full rounded-2xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
            >
              Continue
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}