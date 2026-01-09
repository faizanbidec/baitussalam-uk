"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ongoingCampaigns, upcomingEvents } from "../../data/allCampaigns";
import { transactionAPI } from "../api/transactionAPI";
import useCampaignsStore from "../stores/useCampaignsStore";
import useCausesStore from "../stores/useCausesStore";

export default function DonationModal({
  open,
  setOpen,
  selectedCampaign,
  selectedService,
  
  initialAmount = "",
  initialDonationFrequency = "One-Time",
  initialDonationType = "Zakat",
  
}) {
  // hi
  const [donationFrequency, setDonationFrequency] = useState(initialDonationFrequency);
  const [donationType, setDonationType] = useState(initialDonationType);
  const [paymentOption, setPaymentOption] = useState("Credit/Debit Card");
  const [selectedCampaignOption, setSelectedCampaignOption] = useState("");
  const [selectedServiceOption, setSelectedServiceOption] = useState("");
  const [amount, setAmount] = useState(initialAmount);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

// Properly access fetchCampaigns
const fetchCampaigns = useCampaignsStore((state) => state.fetchCampaigns);

const getOngoingCampaigns = useCampaignsStore((state) => state.getOngoingCampaigns);
const getUpcomingCampaigns = useCampaignsStore((state) => state.getUpcomingCampaigns);

useEffect(() => {
  if (open) {
    fetchCampaigns(); // now this works
  }
}, [open, fetchCampaigns]);

 
  const { causes, fetchCauses } = useCausesStore();

 const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const ongoingCampaignsList = getOngoingCampaigns();
    const upcomingCampaignsList = getUpcomingCampaigns();
  const combinedCampaignOptions = [
    ...ongoingCampaignsList.map((c) => ({ ...c, type: "Ongoing Campaign" })),
    ...(upcomingCampaignsList || []).map((e) => ({ ...e, type: "Upcoming Campaign" })),
  ];

  console.log("Combined campaigns:", combinedCampaignOptions);


  // Use causesData if provided, otherwise use from store
  // const servicesList = causesData.length > 0 ? causesData : causes;
  const servicesList = causes; 
  console.log("Services List:", causes);

  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Auto-fill campaign or service when modal opens, and update initial values
  useEffect(() => {
    if (selectedCampaign) {
      setSelectedCampaignOption(selectedCampaign);
      setSelectedServiceOption("");
    } else if (selectedService) {
      setSelectedServiceOption(selectedService);
      setSelectedCampaignOption("");
    }
    
    // Update initial values when props change
    if (initialAmount) {
      setAmount(initialAmount);
    }
    if (initialDonationFrequency) {
      setDonationFrequency(initialDonationFrequency);
    }
    if (initialDonationType) {
      setDonationType(initialDonationType);
    }
  }, [selectedCampaign, selectedService, initialAmount, initialDonationFrequency, initialDonationType]);

  // Reset form when modal closes (but preserve initial values when reopening)
  useEffect(() => {
    if (!open) {
      setSelectedCampaignOption("");
      setSelectedServiceOption("");
      setUserDetails({ name: "", email: "", address: "", phone: "" });
      setSubmitError("");
      setSubmitSuccess(false);
      // Reset to initial values
      setAmount(initialAmount);
      setDonationFrequency(initialDonationFrequency);
      setDonationType(initialDonationType);
    }
  }, [open, initialAmount, initialDonationFrequency, initialDonationType]);

  // Generate unique transaction ID
  const generateTransactionId = () => {
    return `TX${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  // Map payment option to API format
  const mapPaymentThrough = (paymentOption) => {
    const mapping = {
      "Credit/Debit Card": "credit_card",
      "PayPal": "paypal",
      "Bank Transfer": "bank_transfer",
    };
    return mapping[paymentOption] || "credit_card";
  };

  // Find service/cause ID by title
  const findServiceId = (title) => {
    const service = servicesList.find((s) => s.title === title);
    return service?.id || null;
  };

  // Find campaign ID by title
  const findCampaignId = (title) => {
    const campaign = combinedCampaignOptions.find((c) => c.title === title);
    return campaign?.id || null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!amount || parseFloat(amount) <= 0) {
        setSubmitError("Please enter a valid amount");
        setIsSubmitting(false);
        return;
      }

      if (!userDetails.name || !userDetails.email) {
        setSubmitError("Please fill in your name and email");
        setIsSubmitting(false);
        return;
      }

      if (!selectedCampaignOption && !selectedServiceOption) {
        setSubmitError("Please select either a Service or Campaign");
        setIsSubmitting(false);
        return;
      }

      // Prepare payload
      const payload = {
        transaction_id: generateTransactionId(),
        status: "pending",
        amount: parseFloat(amount),
        currency_code: "GBP", // UK charity, using GBP
        payment_through: mapPaymentThrough(paymentOption),
        // category_id: 1, // Default category, adjust as needed
        name: userDetails.name,
        email: userDetails.email,
        address: userDetails.address || "",
        telephone: userDetails.phone || "",
      };

      // Add support_program or support_service based on selection
     if (selectedCampaignOption) {
  const campaignId = findCampaignId(selectedCampaignOption);

  if (!campaignId) {
    throw new Error("Invalid campaign selected");
  }

  payload.category_id = Number(campaignId);
}

if (selectedServiceOption) {
  const serviceId = findServiceId(selectedServiceOption);

  if (!serviceId) {
    throw new Error("Invalid service selected");
  }

  payload.category_id = Number(serviceId); // 👈 REQUIRED
  payload.support_service = Number(serviceId);
}
console.log("idddddddd",combinedCampaignOptions[0]);

      // Call API
      const response = await transactionAPI.createTransaction(payload);
      
      if (response.data) {
        setSubmitSuccess(true);
        // Reset form after 2 seconds and close modal
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Transaction error:", error);
      setSubmitError(
        error.response?.data?.message || 
        "Failed to process transaction. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-[#001B44]/30 backdrop-blur-sm flex justify-center  z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>

            {/* Header */}
            <div className="text-center text-[#BC153F] py-6 px-6 text-3xl font-bold">
              Quick & Easy Donate
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh] text-gray-800">
              {/* Donation Frequency & Amount */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="mb-3 text-left">Select Donation Frequency</h3>
                  <div className="flex flex-wrap gap-3">
                    {["One-Time", "Monthly", "Yearly"].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setDonationFrequency(freq)}
                        className={`px-4 py-2 rounded font-medium text-sm sm:text-base ${
                          donationFrequency === freq
                            ? "bg-[#22305B] text-white"
                            : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-left">Enter Your Own Amount</h3>
                  <input
                    type="number"
                    placeholder="Enter your own amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 text-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded w-full text-sm sm:text-base"
                  />
                </div>
              </div>

              <p className="text-left text-gray-800 text-sm">
                With just £25, you can provide a struggling family with enough
                food to stay.
              </p>

              {/* Donation Type */}
              <div>
                <h3 className="mb-3 text-left">Donation Type</h3>
                <div className="flex gap-3 flex-wrap">
                  {["Zakat", "Sadqah", "General Donation"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`px-4 py-2 rounded font-medium text-sm sm:text-base ${
                        donationType === type
                          ? "bg-[#22305B] text-white"
                          : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campaign & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className=" text-left block mb-2 text-sm font-medium text-gray-800">
                    Select Service
                  </label>
                  <select
                    className="border border-gray-300 text-gray-800 rounded px-3 py-2 sm:px-4 sm:py-2 w-full text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                    value={selectedServiceOption}
                    onChange={(e) => {
                      setSelectedServiceOption(e.target.value);
                      setSelectedCampaignOption("");
                    }}
                    disabled={!!selectedCampaignOption}
                  >
                    <option value="">-- Select Service --</option>
                    {servicesList
  .filter(cause => cause.status === 1)   // only active services
  .map((cause) => (
    <option key={cause.slug || cause.id} value={cause.title}>
      {cause.title}
    </option>
  ))}

                  </select>
                </div>

                <div>
                  <label className=" text-left block mb-2 text-sm font-medium text-gray-800">
                    Select Campaign
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg text-gray-800 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#22305B] transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    value={selectedCampaignOption}
                    onChange={(e) => {
                      setSelectedCampaignOption(e.target.value);
                      setSelectedServiceOption("");
                    }}
                    disabled={!!selectedServiceOption}
                  >
                    <option value="">-- Select Campaign --</option>
                    {combinedCampaignOptions
  .filter(item => item.status === 1)   // only active campaigns
  .map((item, index) => (
    <option key={index} value={item.title}>
      {item.title} ({item.type})
    </option>
  ))}

                  </select>
                </div>
              </div>

              {/* User Details */}
              <div>
                <h3 className="mb-3 text-left">Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["name", "email", "address"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      value={userDetails[field]}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          [field]: e.target.value,
                        })
                      }
                      className="border border-gray-300 text-gray-800 rounded px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
                    />
                  ))}
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                    className="border border-gray-300 text-gray-800 rounded px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base sm:col-span-3"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div>
                <h3 className="mb-3 text-left">Payment Options</h3>
                <div>
  <h3 className="mb-3 text-left">Payment Options</h3>
  <div className="flex flex-wrap gap-4 sm:gap-6">
    {[
      { label: "Credit/Debit Card", img: "/card.png" },
      { label: "PayPal", img: "/paypal.webp" },
      { label: "Bank Transfer", img: "/bankt.png" },
    ].map((option) => (
      <label
        key={option.label}
        className="flex items-center gap-2 text-gray-800 cursor-pointer text-sm sm:text-base p-2  hover:shadow-sm transition-shadow"
      >
        <img
          src={option.img}
          alt={option.label}
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        />
        <input
          type="radio"
          name="payment"
          checked={paymentOption === option.label}
          onChange={() => setPaymentOption(option.label)}
          className="w-4 h-4"
        />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
</div>

              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                  {submitError}
                </div>
              )}

              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm">
                  Transaction submitted successfully! Thank you for your donation.
                </div>
              )}

              {/* Donate Button */}
             <button
  onClick={handleSubmit}
  disabled={isSubmitting}
  className="bg-[#E40D11] text-white py-3 px-7 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition disabled:opacity-50 text-left"
>
  {isSubmitting ? "Processing..." : "Donate Now"}
</button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
