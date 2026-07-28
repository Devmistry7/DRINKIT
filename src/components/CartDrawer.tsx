"use client";

import { useEffect } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: Props) {
  const {
    cart,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // Prevent the background page from scrolling
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Close the cart when Escape is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Background overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Cart drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 grid h-dvh w-full max-w-[420px] grid-rows-[auto_minmax(0,1fr)_auto] border-l border-neutral-800 bg-neutral-950 text-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-neutral-800 px-5 py-4">
          <div className="flex items-center gap-3">
            <ShoppingBag
              size={24}
              className="text-green-400"
            />

            <div>
              <h2 className="text-xl font-bold">
                Your Cart
              </h2>

              <p className="text-sm text-neutral-400">
                {cart.length} product
                {cart.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-lg p-2 transition hover:bg-neutral-800"
          >
            <X size={22} />
          </button>
        </header>

        {/* Only this area scrolls */}
        <main
          className="cart-scrollbar min-h-0 overflow-y-auto overscroll-contain p-5"
          onWheel={(event) => event.stopPropagation()}
        >
          {cart.length === 0 ? (
            <div className="flex min-h-full flex-col items-center justify-center text-center">
              <ShoppingBag
                size={64}
                className="mb-5 text-neutral-700"
              />

              <h3 className="text-xl font-bold">
                Your cart is empty
              </h3>

              <p className="mt-2 text-neutral-400">
                Add some products to begin your order.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <article
                  key={`${item.id}-${item.size}`}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-full rounded-xl object-cover"
                  />

                  <div className="mt-4">
                    <h3 className="text-lg font-bold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-neutral-400">
                      {item.size}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-lg font-bold text-green-400">
                      ₹{item.price}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(
                          item.id,
                          item.size
                        )
                      }
                      aria-label={`Remove ${item.name}`}
                      className="rounded-lg p-2 text-red-500 transition hover:bg-red-500/10"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(
                            item.id,
                            item.size
                          )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 transition hover:bg-neutral-700"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="w-6 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(
                            item.id,
                            item.size
                          )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-black transition hover:bg-green-600"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-neutral-400">
                        Item total
                      </p>

                      <p className="font-bold">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Fixed footer */}
        <footer className="border-t border-neutral-800 bg-neutral-950 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-neutral-400">
              Subtotal
            </span>

            <span className="text-2xl font-bold text-green-400">
              ₹{subtotal}
            </span>
          </div>

          <button
            type="button"
            disabled={cart.length === 0}
            className="w-full rounded-xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-400"
          >
            Proceed to Checkout
          </button>
        </footer>
      </aside>
    </>
  );
}