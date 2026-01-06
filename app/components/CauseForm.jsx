import React, {useState} from 'react'

const CauseForm = () => {

    const [donationType, setDonationType] = useState("");
      const [paymentMethod, setPaymentMethod] = useState("card");
      const [amount, setAmount] = useState("");
  return (
    <div><form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0142e]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0142e]"
              />
            </div>

            {/* Select Cause */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Select Cause
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0142e]">
                <option>{cause.title}</option>
                <option>Healthcare</option>
                <option>Food Security</option>
                <option>Orphan Care</option>
                <option>Emergency Relief</option>
              </select>
            </div>

            {/* Donation Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Donation Type
              </label>
              <select
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0142e]"
              >
                <option value="">Select Donation Type</option>
                <option value="one-time">One Time</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Donation Amount
              </label>
              <div className="flex flex-wrap gap-4 mb-3">
                {[10, 50, 80, 100, 600].map((val) => (
                  <label key={val} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="amount"
                      onChange={() => setAmount(val)}
                      checked={amount == val}
                      className="text-[#b0142e] focus:ring-[#b0142e]"
                    />
                    £{val}
                  </label>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom Amount"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0142e]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Payment Method
              </label>
              <div className="flex flex-wrap gap-5">
                {[
                  { id: "card", label: "Credit/Debit Card" },
                  { id: "paypal", label: "PayPal" },
                  { id: "bank", label: "Bank Transfer" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="text-[#b0142e] focus:ring-[#b0142e]"
                    />
                    {method.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#0a1a3c] hover:bg-[#12275a] text-white font-semibold py-3 rounded-md transition"
            >
              Donate Now
            </button>
          </form></div>
  )
}

export default CauseForm