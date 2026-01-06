"use client";
import { useState } from "react";
import LearnMoreButton from "./ui/learnmore";
import DonationModal from "./Donationform";

export default function FeaturedCampaign({
  buttonText = "Donate for Ramadan",
  largeImg = "/Collage.png",
}) {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-white overflow-hidden px-6 sm:px-10 lg:px-24 py-12 sm:py-16 lg:py-24 gap-10 ">
      {/* LEFT SIDE - TEXT */}
      <div className="flex-1 max-w-full lg:max-w-[1000px] text-center lg:text-left">
        <p className="text-red-600 text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3 inline-block border-b-2 border-[#BC153F] pb-1">
          Seasonal Campaign
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
          Ramadan Food Drive
        </h2>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-2 sm:mb-3">
          Baitussalam UK is a trusted Islamic charity providing essential food packs and warm meals to families in need across the UK. For many, these meals are more than food—they bring relief, dignity, and hope.
        </p>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-2 sm:mb-3">
          Your zakat, sadqah donation, or online donation in the UK can help struggling families put food on the table and ease their hardships.
        </p>

        <p className="text-sm sm:text-[14px] text-gray-600 leading-relaxed mb-6 sm:mb-8">
          Support our Islamic charity services this Ramadan and make sure no one goes hungry. Every act of kindness multiplies in reward and transforms lives.
        </p>

        <LearnMoreButton
          label={buttonText}
          bgColor="#22305B"
          textColor="white"
          hoverColor="#1a2447"
          className="px-5 py-2 text-sm"
          onClickAction={() => setShowDonateForm(true)}
        />

        {/* Donate Modal */}
        {showDonateForm && (
          <div
            onClick={() => setShowDonateForm(false)}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative shadow-xl"
            >
              <button
                onClick={() => setShowDonateForm(false)}
                className="absolute right-4 sm:right-6 top-4 text-2xl text-gray-800 cursor-pointer"
              >
                ✕
              </button>

              <DonationModal open={showDonateForm} setOpen={setShowDonateForm} />
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 flex justify-center lg:justify-center items-center mt-8 lg:mt-0">
        <div className="relative w-full max-w-[400px] sm:max-w-[485px] lg:max-w-[500px]">
          <img
            src={largeImg}
            alt="Featured Campaign"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
