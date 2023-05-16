import React from "react";

export default function DetailPayments() {
  return (
    <div class="mt-10 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Payment Details</p>
      <p class="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div class="">
        {/* <!-- Total --> */}
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-white">Subtotal</p>
            <p class="font-semibold text-white">$399.00</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-white">Tax</p>
            <p class="font-semibold text-white">$8.00</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-white">Total</p>
          <p class="text-2xl font-semibold text-white">$408.00</p>
        </div>
      </div>
      <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
        Place Order
      </button>
    </div>
  );
}
