"use client";

import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Home,
  PackageCheck,
  ReceiptText,
  Truck,
} from "lucide-react";

export default function OrderConfirmationPage() {
  const router = useRouter();

  const demoOrderId = "DRK-DEMO-001";

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full rounded-3xl border border-white/10 bg-neutral-900 p-6 shadow-2xl sm:p-10">

          {/* Success Section */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle2 className="h-12 w-12 text-green-400" />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Demo Confirmation
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Order Preview Confirmed
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">
              Your demo checkout has been completed successfully.
              No real payment, transaction, or delivery order has
              been submitted.
            </p>
          </div>

          <div className="my-8 h-px bg-white/10" />

          {/* Order Information */}
          <div className="grid gap-4 sm:grid-cols-3">

            {/* Order ID */}
            <div className="rounded-2xl border border-white/10 bg-neutral-950 p-5">
              <ReceiptText className="mb-3 h-6 w-6 text-neutral-300" />

              <p className="text-xs uppercase tracking-wider text-neutral-500">
                Demo Order ID
              </p>

              <p className="mt-1 font-semibold">
                {demoOrderId}
              </p>
            </div>

            {/* Status */}
            <div className="rounded-2xl border border-white/10 bg-neutral-950 p-5">
              <PackageCheck className="mb-3 h-6 w-6 text-neutral-300" />

              <p className="text-xs uppercase tracking-wider text-neutral-500">
                Status
              </p>

              <p className="mt-1 font-semibold text-green-400">
                Preview Confirmed
              </p>
            </div>

            {/* Delivery */}
            <div className="rounded-2xl border border-white/10 bg-neutral-950 p-5">
              <Truck className="mb-3 h-6 w-6 text-neutral-300" />

              <p className="text-xs uppercase tracking-wider text-neutral-500">
                Delivery
              </p>

              <p className="mt-1 font-semibold">
                Demo Only
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold">
              What happens next?
            </h2>

            <div className="mt-4 space-y-3 text-sm text-neutral-400">
              <p>
                • The demo checkout flow ends here.
              </p>

              <p>
                • No payment information is collected.
              </p>

              <p>
                • No real delivery request is created.
              </p>

              <p>
                • You can return to the storefront and continue
                testing the website.
              </p>
            </div>
          </div>

          {/* Back Home */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-black transition hover:bg-neutral-200"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}