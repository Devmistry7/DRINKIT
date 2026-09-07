"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Home,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Truck,
  User,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

type DeliveryForm = {
  fullName: string;
  phone: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
};

export default function CheckoutPage() {
  const router = useRouter();

  const {
    cart,
    subtotal,
    totalItems,
  } = useCart();

  const [form, setForm] =
    useState<DeliveryForm>({
      fullName: "",
      phone: "",
      address: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
    });

  const [detailsSaved, setDetailsSaved] =
    useState(false);

  const deliveryFee =
    subtotal >= 2000 || subtotal === 0
      ? 0
      : 49;

  const platformFee =
    cart.length > 0 ? 10 : 0;

  const grandTotal =
    subtotal + deliveryFee + platformFee;

  function updateField(
    field: keyof DeliveryForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setDetailsSaved(false);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    setDetailsSaved(true);
  }

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

      {/* PAGE */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_420px]">
        {/* LEFT SIDE */}
        <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-xl bg-green-500/10 p-3">
                <MapPin className="text-green-400" />
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  Delivery Details
                </h2>

                <p className="mt-1 text-neutral-400">
                  Enter the information for this
                  demo checkout.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* NAME + PHONE */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-neutral-300"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
                  />

                  <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(event) =>
                      updateField(
                        "fullName",
                        event.target.value
                      )
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-neutral-300"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
                  />

                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value
                      )
                    }
                    placeholder="10-digit number"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-semibold text-neutral-300"
              >
                Address
              </label>

              <div className="relative">
                <Home
                  size={19}
                  className="absolute left-4 top-4 text-neutral-500"
                />

                <textarea
                  id="address"
                  required
                  rows={4}
                  value={form.address}
                  onChange={(event) =>
                    updateField(
                      "address",
                      event.target.value
                    )
                  }
                  placeholder="Flat, building, street, area..."
                  className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500"
                />
              </div>
            </div>

            {/* LANDMARK */}
            <div>
              <label
                htmlFor="landmark"
                className="mb-2 block text-sm font-semibold text-neutral-300"
              >
                Landmark
                <span className="ml-2 font-normal text-neutral-600">
                  Optional
                </span>
              </label>

              <input
                id="landmark"
                type="text"
                value={form.landmark}
                onChange={(event) =>
                  updateField(
                    "landmark",
                    event.target.value
                  )
                }
                placeholder="Nearby landmark"
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500"
              />
            </div>

            {/* CITY + STATE */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-semibold text-neutral-300"
                >
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  required
                  value={form.city}
                  onChange={(event) =>
                    updateField(
                      "city",
                      event.target.value
                    )
                  }
                  placeholder="City"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-semibold text-neutral-300"
                >
                  State
                </label>

                <input
                  id="state"
                  type="text"
                  required
                  value={form.state}
                  onChange={(event) =>
                    updateField(
                      "state",
                      event.target.value
                    )
                  }
                  placeholder="State"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500"
                />
              </div>
            </div>

            {/* PINCODE */}
            <div>
              <label
                htmlFor="pincode"
                className="mb-2 block text-sm font-semibold text-neutral-300"
              >
                Pincode
              </label>

              <input
                id="pincode"
                type="text"
                required
                value={form.pincode}
                onChange={(event) =>
                  updateField(
                    "pincode",
                    event.target.value
                  )
                }
                placeholder="6-digit pincode"
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 focus:border-green-500 md:max-w-xs"
              />
            </div>

            {/* SAVE DETAILS */}
            <button
              type="submit"
              disabled={cart.length === 0}
              className="w-full rounded-2xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
            >
              Review Delivery Details
            </button>

            {/* SUCCESS */}
            {detailsSaved && (
              <div className="flex items-start gap-3 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <div>
                  <p className="font-semibold text-green-400">
                    Delivery details saved
                  </p>

                  <p className="mt-1 text-sm text-neutral-400">
                    Your information is currently
                    stored only in this page state
                    for the demo checkout.
                  </p>
                </div>
              </div>
            )}
          </form>
        </section>

        {/* ORDER SUMMARY */}
        <aside>
          <div className="sticky top-28 rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
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

            {/* ITEMS */}
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

            <div className="my-6 border-t border-neutral-800" />

            {/* BILL */}
            <div>
              <h3 className="mb-4 font-semibold">
                Bill Details
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">
                    Item Total
                  </span>

                  <span>₹{subtotal}</span>
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

            <div className="my-5 border-t border-neutral-800" />

            {/* TOTAL */}
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
          </div>
        </aside>
      </div>
    </main>
  );
}