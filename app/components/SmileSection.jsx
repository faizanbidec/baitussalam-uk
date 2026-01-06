"use client";
import { useState } from "react";
import Image from "next/image";
import DonationModal from "./Donationform";
import { causesData } from "../causes/causesData";

export default function SmileSection({
  title = "Be the Reason Someone Smiles Today",
  description = "A small act of kindness can bring joy, hope, and dignity to those in need. Become part of our mission today.",
  buttonText = "Donate Now",
  bgImage = "/smiles.png",
  overlayColor = "bg-black/70",
  showButton = true, // optional
}) {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section
      className="relative text-white py-28 px-6 md:px-16 overflow-visible"
      aria-labelledby="smile-section-heading"
    >
    <div className="absolute inset-0  ">
  <Image
    src={bgImage}
    alt="Background image"
    fill
    className="object-cover"
    sizes="100vw"
    priority
    aria-hidden="true"
  />
</div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-0`}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2
          id="smile-section-heading"
          className="text-xl sm:text-3xl md:text-4xl font-semibold mb-3 leading-snug"
        >
          {title}
        </h2>

        <p className="text-gray-200 text-xs sm:text-base mb-5 leading-relaxed">
          {description}
        </p>

        {showButton && (
          <button
            onClick={() => setShowDonateForm(true)}
            className="bg-[#BC153F] text-white px-6 py-3 rounded-lg transition hover:opacity-90 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#BC153F]"
            aria-label={buttonText}
            type="button"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Donation Form Modal */}
      {showDonateForm && (
        <DonationModal
          open={showDonateForm}
          setOpen={setShowDonateForm}
          causesData={causesData}
        />
      )}
    </section>
  );
}
