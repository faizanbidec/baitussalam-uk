"use client"
import React, { use,useState,useEffect } from "react";
import { causesData } from "../causesData";

import InsideSection from "@/app/components/InsideSection";
import SmileSection from "@/app/components/SmileSection";
import DonationModal from "@/app/components/Donationform";
import Storiessection from "@/app/components/StoriesSection";
import Ourworksupport from "@/app/components/Ourworksupport";
import TrustSection from "@/app/components/Trustsection";
import CausesForm from "@/app/components/CausesForm";
import Impact from "@/app/components/Impact";
import Aboutsection from "@/app/components/Aboutsection";
import useCausesStore from "../../stores/useCausesStore";

export default function CauseDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { causes, fetchCauses } = useCausesStore();
  const [cause, setCause] = useState(null);

useEffect(() => {
    fetchCauses();
  }, [fetchCauses]);

   useEffect(() => {
    const matchedCause = causes.find((item) => item.slug === slug);
    setCause(matchedCause || null);
  }, [causes, slug]);

  if (!cause)
    return (
      <div className="h-screen flex justify-center items-center text-xl text-red-600">
        Cause not found
      </div>
    );


  return (
    <div className="bg-white font-[Rubik,sans-serif]">
      {/* ===== HERO SECTION ===== */}
    {/* ===== HERO SECTION ===== */}
<section
  className="relative flex flex-col md:flex-row justify-between items-center px-4 md:px-12 h-auto md:h-[85vh] bg-cover bg-center"
  style={{ backgroundImage: `url('${cause?.banner_image || "/education.png"}')` }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Left Text */}
  <div className="relative z-10 text-white max-w-full md:max-w-[45%] text-center md:text-left mb-8 md:mb-0">
    <h5 className="text-[#E40D11] uppercase underline underline-offset-4 decoration-[#E40D11] mb-2 text-xs sm:text-sm tracking-wide mt-5 ">
       {cause?.title}
    </h5>

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4">
     {cause?.banner_heading}
    </h1>

    <p className="text-gray-200 text-sm sm:text-sm font-medium px-2">
      {cause?.banner_description}
    </p>
  </div>

  {/* Donation Form */}
  <CausesForm />
</section>


      {/* ===== GLOBAL CONTAINER ===== */}
      
        {/* ABOUT SECTION */}

        <Aboutsection />

        {/* IMPACT SECTION */}
        <Impact />
      

      {/* Remaining Sections */}
      <Storiessection  />
      <Ourworksupport
        title="How We Support Education"
        subtitle="OUR WORK"
        description="Amina shared, “I had no idea how we would survive this Ramadan. Your help has given us not just food, but hope. May Allah bless those who made this possible.”"
        mainImage="/ourwork2.png"
      />
      <TrustSection />
      <SmileSection
        title="Be the Reason for Change Today"
        description="Your donation ensures families receive food, care, and hope. Join us in spreading compassion."
        ModalComponent={DonationModal}
      />
      <InsideSection />
    </div>
  );
}
