"use client"; // ✅ Make this a client component

import { useState } from "react";
import dynamic from "next/dynamic";
import { causesData } from "../causes/causesData";
import DonationModal from "./Donationform";

// ✅ Import DonationModal dynamically (client-only)
// const DonationModal = dynamic(() => import("../components/Donationform"), {
//   ssr: false,
// });

export default function Partofchange() {
  const [showDonateForm, setShowDonateForm] = useState(false);

  return (
    <section
      className="
        relative 
       
        bg-black
        bg-cover 
        bg-center 
        text-white 
        flex 
        items-center 
        justify-center 
        px-4 
        py-16 
        sm:py-20 
        md:py-24 
        lg:h-[350px]
        h-auto
      "
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center px-2 sm:px-4 md:px-6">
        <h2
          className="
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-4xl 
            font-semibold 
            mb-4
          "
        >
          Be Part of the Change
        </h2>

        <p
          className="
            text-gray-200 
            text-xs 
            sm:text-sm 
            md:text-base 
            lg:text-SM 
            mb-6
            leading-relaxed
            px-16
          "
        >
          Your support makes everything possible. Whether you donate,
          volunteer, or partner with us, together we can create lasting impact.
        </p>

        {/* ✅ Button triggers modal */}
        <button
          onClick={() => setShowDonateForm(true)}
          className="
            bg-[#BC153F] 
            text-white 
            px-5 
            sm:px-6 
            md:px-8 
            py-2 
            sm:py-3 
            rounded-xl 
            text-sm 
            sm:text-base 
            md:text-base 
            border-none 
            cursor-pointer 
            transition-all 
            hover:opacity-90
            active:scale-95
          "
        >
          Donate Now
        </button>
      </div>

      {/* ✅ Form only loads when button is clicked */}
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
