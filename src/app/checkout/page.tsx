"use client";

import {
  FormEvent,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Edit3,
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

type FormErrors = Partial<
  Record<keyof DeliveryForm, string>
>;

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

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [isReviewing, setIsReviewing] =
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
    let nextValue = value;

    if (field === "phone") {
      nextValue = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    if (field === "pincode") {
      nextValue = value
        .replace(/\D/g, "")
        .slice(0, 6);
    }

    setForm((current) => ({
      ...current,
      [field]: nextValue,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function validateForm() {
    const newErrors: FormErrors = {};

    if (form.fullName.trim().length < 2) {
      newErrors.fullName =
        "Please enter your full name.";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit phone number.";
    }

    if (form.address.trim().length < 8) {
      newErrors.address =
        "Please enter a complete address.";
    }

    if (form.city.trim().length < 2) {
      newErrors.city =
        "Please enter your city.";
    }

    if (form.state.trim().length < 2) {
      newErrors.state =
        "Please enter your state.";
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      newErrors.pincode =
        "Enter a valid 6-digit pincode.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsReviewing(true);
  }

  function handleEdit() {
    setIsReviewing(false);
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

            Demo Checkout
          </div>
        </div>
      </header>

      {/* PAGE */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_420px]">
        {/* LEFT SIDE */}
        <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8">
          {!isReviewing ? (
            <>
              {/* FORM HEADER */}
              <div className="mb-8 flex items-start gap-3">
                <div className="rounded-xl bg-green-500/10 p-3">
                  <MapPin className="text-green-400" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold">
                    Delivery Details
                  </h2>

                  <p className="mt-1 text-neutral-400">
                    Enter your information to
                    continue to review.
                  </p>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                {/* NAME + PHONE */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* NAME */}
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
                        value={form.fullName}
                        onChange={(event) =>
                          updateField(
                            "fullName",
                            event.target.value
                          )
                        }
                        placeholder="Enter your name"
                        className={`w-full rounded-xl border bg-neutral-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-neutral-600 ${
                          errors.fullName
                            ? "border-red-500"
                            : "border-neutral-800 focus:border-green-500"
                        }`}
                      />
                    </div>

                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}
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
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                          )
                        }
                        placeholder="10-digit number"
                        className={`w-full rounded-xl border bg-neutral-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-neutral-600 ${
                          errors.phone
                            ? "border-red-500"
                            : "border-neutral-800 focus:border-green-500"
                        }`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.phone}
                      </p>
                    )}
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
                      rows={4}
                      value={form.address}
                      onChange={(event) =>
                        updateField(
                          "address",
                          event.target.value
                        )
                      }
                      placeholder="Flat, building, street, area..."
                      className={`w-full resize-none rounded-xl border bg-neutral-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-neutral-600 ${
                        errors.address
                          ? "border-red-500"
                          : "border-neutral-800 focus:border-green-500"
                      }`}
                    />
                  </div>

                  {errors.address && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.address}
                    </p>
                  )}
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
                  {/* CITY */}
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-semibold text-neutral-300"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      value={form.city}
                      onChange={(event) =>
                        updateField(
                          "city",
                          event.target.value
                        )
                      }
                      placeholder="City"
                      className={`w-full rounded-xl border bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 ${
                        errors.city
                          ? "border-red-500"
                          : "border-neutral-800 focus:border-green-500"
                      }`}
                    />

                    {errors.city && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  {/* STATE */}
                  <div>
                    <label
                      htmlFor="state"
                      className="mb-2 block text-sm font-semibold text-neutral-300"
                    >
                      State
                    </label>

                    <input
                      id="state"
                      value={form.state}
                      onChange={(event) =>
                        updateField(
                          "state",
                          event.target.value
                        )
                      }
                      placeholder="State"
                      className={`w-full rounded-xl border bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 ${
                        errors.state
                          ? "border-red-500"
                          : "border-neutral-800 focus:border-green-500"
                      }`}
                    />

                    {errors.state && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.state}
                      </p>
                    )}
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
                    inputMode="numeric"
                    value={form.pincode}
                    onChange={(event) =>
                      updateField(
                        "pincode",
                        event.target.value
                      )
                    }
                    placeholder="6-digit pincode"
                    className={`w-full rounded-xl border bg-neutral-900 px-4 py-3.5 text-white outline-none transition placeholder:text-neutral-600 md:max-w-xs ${
                      errors.pincode
                        ? "border-red-500"
                        : "border-neutral-800 focus:border-green-500"
                    }`}
                  />

                  {errors.pincode && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.pincode}
                    </p>
                  )}
                </div>

                {/* REVIEW BUTTON */}
                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full rounded-2xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
                >
                  Review Details
                </button>
              </form>
            </>
          ) : (
            <>
              {/* REVIEW SCREEN */}
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="rounded-xl bg-green-500/10 p-3">
                    <CheckCircle2 className="text-green-400" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      Review Details
                    </h2>

                    <p className="mt-1 text-neutral-400">
                      Check your information before
                      continuing.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleEdit}
                  className="flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 text-sm font-semibold transition hover:border-green-500 hover:text-green-400"
                >
                  <Edit3 size={16} />
                  Edit
                </button>
              </div>

              <div className="space-y-5">
                {/* NAME */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Deliver To
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {form.fullName}
                  </p>

                  <p className="mt-1 text-neutral-400">
                    {form.phone}
                  </p>
                </div>

                {/* ADDRESS */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
                  <div className="flex gap-3">
                    <MapPin
                      size={20}
                      className="mt-1 shrink-0 text-green-400"
                    />

                    <div>
                      <p className="font-semibold">
                        Delivery Address
                      </p>

                      <p className="mt-2 leading-7 text-neutral-400">
                        {form.address}
                        {form.landmark && (
                          <>
                            <br />
                            Landmark:{" "}
                            {form.landmark}
                          </>
                        )}
                        <br />
                        {form.city},{" "}
                        {form.state} -{" "}
                        {form.pincode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DEMO NOTICE */}
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={21}
                      className="mt-0.5 shrink-0 text-green-400"
                    />

                    <div>
                      <p className="font-semibold text-green-400">
                        Details verified
                      </p>

                      <p className="mt-1 text-sm leading-6 text-neutral-400">
                        This is currently a demo
                        checkout. No real transaction
                        or order is being submitted.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleEdit}
                  className="w-full rounded-2xl border border-neutral-700 py-4 font-bold transition hover:border-green-500 hover:text-green-400"
                >
                  Edit Delivery Details
                </button>
              </div>
            </>
          )}
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

            {/* DELIVERY STATUS */}
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