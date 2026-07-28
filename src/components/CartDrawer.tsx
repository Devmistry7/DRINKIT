"use client";

import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-neutral-950 border-l border-neutral-800 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-neutral-800">
          <h2 className="text-2xl font-bold">🛒 Your Cart</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Products */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {cart.length === 0 ? (
            <p className="text-neutral-400">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-neutral-900 rounded-xl p-4"
              >
                <img
                  src={item.image}
                  className="h-24 w-full object-cover rounded-lg"
                  alt={item.name}
                />

                <h3 className="mt-3 font-bold">
                  {item.name}
                </h3>

                <p className="text-neutral-400">
                  {item.size}
                </p>

                <p className="text-green-400 font-bold mt-2">
                  ₹{item.price}
                </p>

                <div className="flex justify-between items-center mt-4">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id, item.size)
                      }
                    >
                      <Minus size={18} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id, item.size)
                      }
                    >
                      <Plus size={18} />
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.size)
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-800 p-5">

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="w-full mt-5 bg-green-500 text-black py-3 rounded-xl font-bold hover:bg-green-600 transition">
            Proceed to Checkout
          </button>

        </div>
      </div>
    </>
  );
}