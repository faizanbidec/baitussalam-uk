"use client";
import React, { useState } from "react";

const CausesForm = () => {
  const [donationType, setDonationType] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full md:w-[45%] p-4 sm:p-6 md:p-8 mt-8 md:mt-0 md:translate-y-[160px] mb-19">
      <h2 className="text-[#b0142e] text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 text-center md:text-left">
        Join Our Mission
      </h2>
      <p className="text-gray-600 font-medium mb-4 text-center md:text-left">
        Easy Donation
      </p>

      <form className="flex flex-col gap-3">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-left">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-left">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
          />
        </div>

        {/* Donation Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-left">
            Donation Type
          </label>
          <select
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
          >
            <option value="">Select Donation Type</option>
            <option value="one-time">One Time</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-left">
            Donation Amount
          </label>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-2">
            {[10, 50, 80, 100, 600].map((val) => (
              <label key={val} className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="radio"
                  name="amount"
                  onChange={() => setAmount(val)}
                  checked={amount == val}
                  className="accent-[#b0142e]"
                />
                £{val}
              </label>
            ))}
          </div>
          <input
            type="number"
            placeholder="Custom Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#b0142e]"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1 text-left">
            Payment Method
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              { id: "card", label: "Credit/Debit Card" },
              { id: "paypal", label: "PayPal" },
              { id: "bank", label: "Bank Transfer" },
            ].map((method) => (
              <label key={method.id} className="flex items-center gap-2 text-gray-700 font-medium">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                  className="accent-[#b0142e]"
                />
                {method.label}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-[60%] md:w-[40%] mt-3 bg-[#0a1a3c] text-white font-semibold py-2 rounded-md hover:bg-[#0d2554] transition"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default CausesForm;
